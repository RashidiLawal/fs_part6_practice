import React from 'react'
import Note from './Note'
import {useDispatch, useSelector} from 'react-redux'
import { toggleImportanceOf } from './reducers/noteRuducer'

const Notes = () => {

    const dispatch = useDispatch()
    const notes = useSelector(state => state)

  return (
    <ul>
       {notes.map((note, noteIndex) => 
       <Note
       key={`note_${noteIndex}`}
       note={note}
       handleClick={() =>
        dispatch(toggleImportanceOf(note.id))
    }
       />
        )}
    </ul>
  )
}

export default Notes