# redux-CRUDaxe-thunk

### Why
This library was created for simplify of describing narrow propose Redux(redux-thunk) modules.

### Long story

#### General way

First, we all split out Redux modules, using this structure^
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

};

// store/some-namespace/index.js
const moduleName = 'some-namespace';

const geSelectorFor = getPureSelectorForModuleState(moduleName);

export const selectError = geSelectorFor('error');
export const selectData = geSelectorFor('data');
export const selectIsInProcess = geSelectorFor('isInProcess');
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

export const loginModuleName = 'login';
    
export const loginProcedure = getProcedure(loginModuleName, login);


// store/index.js
import {loginModuleName, loginProcedure} from '@store/login'; 

createStore(
  combineReducers({
    [loginModuleName]: loginProcedure.reducer,
  })    
)
```

#### `getCRUD`

```javascript
import {getCRUD} from 'redux-crudaxe-thunk';

// API functions
import getUsers from '@api/private/getUser';
import createUser from '@api/private/createUser';
import deleteUser from '@api/private/deleteUser'; 

export const userModuleName = 'user';
    
export const userCRUD = getCRUD(userModuleName, {
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
import {userModulename, userCRUD} from '@store/user';

createStore(
  combineReducers({
    [userModulename]: userCRUD.reducer,
  })    
)
```

> I know that it's not the best way to add reducer, but i'll change it some time.

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

So you can provide your onw default state. Every options in `stateDefaults` object is optional

```javascript
// store/login/index.js
import {getProcedure} from 'redux-crudaxe-thunk';
import login from '@api/public/login'; // API request

export const loginModuleName = 'login';
    
export const loginProcedure = getProcedure(loginModuleName, login, {
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

export const loginModuleName = 'login';
    
export const loginProcedure = getProcedure(loginModuleName, login, {
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

Finally you may mock your response, when your API is not ready, but you have contract already.

```javascript
// store/login/index.js
import {getProcedure} from 'redux-crudaxe-thunk';
import login from '@api/public/login'; // API request

export const loginModuleName = 'login';
    
export const loginProcedure = getProcedure(loginModuleName, login, {
    mock: {
        type: 'data' | 'error' | 'isInProcess', // Use one of these values
        value: someValue, // `data` and `error` values passes as is, but `isInProcess` will be converted to boolean 
    }
});
```

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

> Procedure request accepts only one argument, so you need to pass all values you want using object