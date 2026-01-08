
const NoteList = ({notes,onDelete}) => {
    if(notes.length === 0){
        return(
            <div className="text-center py-10 border-2 rounded-2xl">
                Notes list is empty
            </div>
        )
    }
      return (
    <NoteList notes={notes} onDelete={onDelete} />
  );
}

export default NoteList;