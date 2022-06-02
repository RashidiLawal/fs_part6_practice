import {createStore} from 'redux'

function App() {


const noteReducer = (state = [], action) => {
    
    switch(action.type){
      case 'NEW_NOTE':
        // return state.concat(action.data)
        return [...state, action.data]
      case 'TOGGLE_IMPORTANCE': {
        const id = action.data.id
        const noteToChange = state.find(n => n.id === id)
        const changedNote = {
          ...noteToChange, important: !noteToChange.important
        }

        return state.map(note => note.id !== id ? note : changedNote
          )
      }

      default:
        return state
    }
}


const store = createStore(noteReducer)

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'the app state is in redux store',
        important: true,
        id: 1
    }
})

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'state changes are node with actions',
        important: false,
        id: 2
    }
})

store.dispatch({
  type: 'TOGGLE_IMPORTANCE',
  data: {
    id: 2
  }
})


  
  return (
    <div className="App">
      <ul>
                {store.getState().map((note, noteIndex) => 
                    <li key={`note_${noteIndex}`}>
                        {note.content} <strong>{note.important ? 'import' : ''}</strong>
                    </li>
                    )}
      </ul>
    </div>
  );
}

export default App;
