import NewNote from './NewNote'
import Notes from './Notes'



function App() {

  /* const dispatch = useDispatch()
  const notes = useSelector(state => state)


  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  } */





 return (
    <div className="App">
      <NewNote/>
      <Notes/>
      {/* <ul>
                {notes.map((note, noteIndex) => 
                    <li key={`note_${noteIndex}`}
                    onClick={() => toggleImportance(note.id)}
                    >
                        {note.content} <strong>{note.important ? 'import' : ''}</strong>
                    </li>
                    )}
      </ul> */}
      
    </div>

  );
}

export default App;
