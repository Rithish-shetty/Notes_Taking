import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {

  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false),2000)
  },[])

  const onAdd = (note) => {
    setNotes([...notes, {...note, id : Date.now()}] )
  }

  const onDelete = (id) => {
    setNotes(notes.filter((item) => item.id != id))
  }

  return (
    <div className="max-w-150 mx-auto p-10">
      <h1 className="text-2xl font-bold text-center">Notes</h1>
      <NoteForm onAdd={onAdd} />

      {isLoading ? (
        <div className="text-center py-10 text-blue-500">Loading Please Wait</div>
      ) : (
        <NoteList notes={notes} onDelete={onDelete} />
      )}
    </div>
  );
}
  

export default App;
