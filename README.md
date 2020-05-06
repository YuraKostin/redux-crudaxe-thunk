# redux-CRUDaxe-thunk

### Why
This library was created for simplify of describing narrow propose Redux(redux-thunk) modules.

### Long story

#### General way

First, we all split out Redux modules, using this structure:
* actions - just strings with actions names
* action creators - functions, which returns action object
* reducer - pure function to handle actions

Redux is beautiful tool, but it requires a lot of writing.
So, here i'll not show any examples because it totally described in documentation.

#### Put all together + [DUCK](https://github.com/erikras/ducks-modular-redux)

Then some of us decided that it will be more clear to put all 
definitions of Redux module in one file.

Example:

```javascript
// Actions
const REQUEST = 'some-namespace/REQUEST';
const RECEIVE = 'some-namespace/RECEIVE';
const ERROR = 'some-namespace/ERROR';

// Action creators
export const fetchSomeNamespace = () => ({
  type: REQUEST,
});

export const receiveSomeNamespaceData = payload => ({
  payload,
  type: RECEIVE,
});

export const setSomeNamespaceError = payload => ({
  payload,
  type: ERROR,
});

// Async actions
export const requestSomeNamespace = () => async dispatch => {
  dispatch(fetchSomeNamespace());

  try {
    const data = await getSomeData();
  
    dispatch(receiveSomeNamespaceData(data));  
  } catch (error) {
    dispatch(setSomeNamespaceError(error));
  }
};

// Reducer
const reducer = (state = initialState, { type, payload }) => {
  if (type === REQUEST) {
    return {
      error: null,
      data: null,
      isInProcess: true,
    };
  }
  
  if (type === RECEIVE) {
    return {
      error: null,
      data: payload,
      isInProcess: false,
    };
  }
  
  if (type === ERROR) {
    return {
      error: payload,
      data: null,
      isInProcess: false,
    };
  }
  return state;
};
```

> I should notify you, that I worked only on simple cases of Redux modules.
> It has 3 fields of data: isInProcess, data, error. You'll see example soon.

It looks better, but I decided to move forward...

#### More functions

I hate `if` and `switch` =), and I suppose you all know
other way to make some decision in code: dictionaries.

Example (here I show only changes):

```javascript
// Action handlers
const handleFetch = state => ({
  error: null,
  data: null,
  isInProcess: true,
});

const handleReceive = (state, payload) => ({
  error: null,
  data: payload,
  isInProcess: false,
});

const handleErrors = (state, payload) => ({
  error: payload,
  isInProcess: false,
  data: null,
});

// Reducer
const reducer = (state = initialState, { type, payload }) => {
  const handlersByActionType = {
    [ERROR]: handleErrors,
    [REQUEST]: handleFetch,
    [RECEIVE]: handleReceive,
  };
  const handler = handlersByActionType[type];

  if (handler) {
    return handler(state, payload);
  }

  return state;
};
```

Here we just moved our pure reducer parts in separated
pure functions.

#### `useSelector` hook

Awesome guys from Facebook gave us React hooks.
Then, Redux added hooks too.
And one of the most used hook is `useSelector`.

It has simple API - only you need is just pass function to it.
This function should describe how to get the value from Redux store.

I love FP, and I hate repeating:
`useSelector(state => state.someModule.value)`

Isn't it more elegant way: `useSelector(selectSomeModuleValue)`?

#### Redux module selectors

So, we have Redux module namespace. I call it `moduleName`.

```javascript
// Do you remember our action names? Here you are:
const REQUEST = 'some-namespace/REQUEST';
const RECEIVE = 'some-namespace/RECEIVE';
const ERROR = 'some-namespace/ERROR';
```

Let's remove some repeating:
```javascript
// store/utils/getActionNameForModule/index.js
const getActionNameForModule = moduleName => actionName => `${moduleName}/${actionName}`;

// store/some-namespace/index.js
const moduleName = 'some-namespace';
const getActionName = getActionNameForModule(moduleName);

// Actions
const REQUEST = getActionName('REQUEST');
const RECEIVE = getActionName('RECEIVE');
const ERROR = getActionName('ERROR');
```

And add same thing for data selectors:
```javascript
// store/utils/getPureSelectorForModuleState/index.js
const getPureSelectorForModuleState = moduleName => property => state => {
    // Implementation here...
};

// store/some-namespace/index.js
const moduleName = 'some-namespace';

const getSelectorFor = getPureSelectorForModuleState(moduleName);

export const selectError = getSelectorFor('error');
export const selectData = getSelectorFor('data');
export const selectIsInProcess = getSelectorFor('isInProcess');
```

Now in your component you may do this:
```javascript
const data = useSelector(selectData);
```

> Yes, there is exists a possibility of selectors names collision, but wait for a moment

One of benefits of this decision: this selectors are pretty simple 
composes with [reselect](https://github.com/reduxjs/reselect) selectors.

Few steps of thinking and composition later... we finally got 
`getProcedure` and `getCRUD` functions.

### API

#### `getProcedure`

```javascript
// store/login/index.js
import {getProcedure} from 'redux-crudaxe-thunk';
import login from '@api/public/login'; // API request
    
export const loginProcedure = getProcedure('login', login);


// store/index.js
import {loginProcedure} from '@store/login'; 

createStore(
  combineReducers({
    ...loginProcedure.init(),
  })    
)
```

##### `getProcedure` output signature
* `actionCreatorsByType` - object that contains action creators by name (ERROR, RECEIVE, REQUEST, RESET). 
DEPRECATED, use `actions` instead
* `actions` - object that contains action creators by name (ERROR, RECEIVE, REQUEST, RESET)
* `init` - function which you use while adding the procedure in store reducers list
* `reducer` - reducer function
* `request` - async action creator, which you may dispatch to produce http request
* `selectAll` - function for `useSelector` hook; `useSelector(procedureName.selectAll)` 
returns full procedure state, object with fields `data, error, isInProcess`
* `selectors` - object, that contains functions by names `data`, `error`, `isInProcess`, 
that may be used for `useSelector` like this: `useSelector(procedureName.selectors.data)`


#### `getCRUD`

```javascript
import {getCRUD} from 'redux-crudaxe-thunk';

// API functions
import getUsers from '@api/private/getUser';
import createUser from '@api/private/createUser';
import deleteUser from '@api/private/deleteUser'; 
    
export const userCRUD = getCRUD('user', {
  create: { // Any CRUD option initiates by `getProcedure` function
    request: createUser,
  },
  delete: {
    request: deleteUser,
  },
  read: {
    request: getUsers,
  },
});


// store/index.js
import {userCRUD} from '@store/user';

createStore(
  combineReducers({
    ...userCRUD.init(),
  })    
)
```

#### Extra options

##### stateDefaults

Default state of every procedure is:
```javascript
{
    data: null,
    error: null,
    isInProcess: false,
}
```

So you can provide your onw default state. Every options in `stateDefaults` object are optional

```javascript
// store/login/index.js
import {getProcedure} from 'redux-crudaxe-thunk';
import login from '@api/public/login'; // API request
    
export const loginProcedure = getProcedure('login', login, {
    stateDefaults: {
        data: [],
        error: {},
    }
});
```


##### sideEffects

You may want always do something on response and error, so:  

```javascript
// store/login/index.js
import {getProcedure} from 'redux-crudaxe-thunk';
import login from '@api/public/login'; // API request
    
export const loginProcedure = getProcedure('login', login, {
    sideEffects: {
        data: (responseData, dispatch) => {
      
        },
        error: (error, dispatch) => {
        
        },
    }
});
```

> Both of options - `data` and `error` - are optional

##### mock

Finally you may mock your response, when your API is not ready, but you already have a contract.

```javascript
// store/login/index.js
import {getProcedure} from 'redux-crudaxe-thunk';
import login from '@api/public/login'; // API request
    
export const loginProcedure = getProcedure('login', login, {
    mock: {
        type: 'data' | 'error' | 'isInProcess', // Use one of these values
        value: any, // `data` and `error` values passes as is, but `isInProcess` will be converted to boolean 
        emulateLoading: { // Optional parameter, which emulates request, setting `isInProcess = true`
            delay: number
        } 
    }
});
```

##### Side effects in components
When you use `dispatch(procedureName.request())`, you may possibly want to do redirect,
or any other action, when request will return the data or error.

To do this, you should include function `handleResponse` from the library:
```javascript
// Some component
import {handleResponse} from 'redux-crudaxe-thunk';

// Somewhere in component
dispatch(procedureName.request(someData))
    .then(handleResponse
        ({data}) => console.log(data), 
        ({error}) => console.log(error) 
    );
```

`handleResponse` accepts three functions:
* onResult
* onError
* handleDefault

All of the functions are optional. So, if you only want to handle an error, you may
pass an `identity` function as first argument


#### Usage in component

```jsx harmony
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginProcedure} from '@store/login';

export const LoginForm = () => {
    const login = useSelector(loginProcedure.selectAll);
    const dispatch = useDispatch();    
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(loginProcedure.request({
            loginValue,
            passwordValue,
        }));
    };
    
    const handleChange = e => {
        const {
            name,
            value,
        } = e.target;
        const setValue = name === 'login' ? setLoginValue : setPasswordValue;
        
        setValue(value);
    };
      
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={loginValue} 
                placeholder="Login"
                name="login"
                onChange={handleChange} 
            />
            <input 
                value={passwordValue} 
                placeholder="password"
                name="password"
                onChange={handleChange} 
            />
            <button>{login.isInProcess ? 'Loading...' : 'Send'}</button>
        </form>
    );
};
```

> Procedure request accepts only one argument, so you need to pass all values you want, using just one object
