import React from 'react'
import ReactDOM from 'react-dom/client'

import {createStore} from 'redux'

// const action = {
//     type: 'INCREMENT'
// }

/* const counterReducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1
    }else if (action.type === 'DECREMENT') {
      return state - 1 
    }else if (action.type === 'ZERO') {
      return 0
    }

    return state
  }
 */
 

  const counterReducer = (state = 0, action) => {
      switch(action.type){
          case 'INCREMENT':
            return state + 1
          case 'DECREMENT':
            return state - 1
          case 'ZERO':
            return 0
          default:
            return state
      }
  }


  const store = createStore(counterReducer)

  /* console.log(store.getState())
  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'INCREMENT'})
  console.log(store.getState())
  store.dispatch({type: 'ZERO'})
  store.dispatch({type: 'DECREMENT'})
  console.log(store.getState()) */

  
  /* store.subscribe(() => {
      const storeNow = store.getState()
      console.log(storeNow)
  })


  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'INCREMENT'})
  store.dispatch({type: 'ZERO'})
  store.dispatch({type: 'DECREMENT'}) */


  const App = () => {
      return (
          <div>
              <div>
                  {store.getState()}
              </div>
              
              <button onClick={e => store.dispatch({type: 'INCREMENT'})}>
                Plus
              </button>
              <button onClick={e => store.dispatch({type: 'DECREMENT'})}>
                Minus
              </button>
              <button onClick={e => store.dispatch({type: 'ZERO'})}>
                Zero
              </button>
          </div>
      )
  }


  const renderApp = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
  }


  renderApp()
  store.subscribe(renderApp)