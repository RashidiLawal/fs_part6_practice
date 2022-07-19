import { useEffect } from 'react';
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibiltyFilter from './components/VisibiltyFilter'
import {useDispatch} from 'react-redux'
import { initializeNotes } from './reducers/noteRuducer';


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeNotes())
  },[dispatch])

 return (
    <div className="App">
      <NewNote/>
      <VisibiltyFilter />
      <Notes/>
    </div>

  );
}

export default App;
