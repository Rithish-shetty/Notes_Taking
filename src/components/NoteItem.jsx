import { FaDeleteLeft } from "react-icons/fa6";

const NoteItem = ({note, onDelete}) => {
    return (
        <div className="border-2 p-4 rounded-2xl flex justify-between bg-white mb-2">
          <div>
            <h3 className="font-bold">{note.title}</h3>
            <p className="text-gray-600 text-sm">{note.desc}</p>
          </div>
          <button 
            onClick={onDelete} 
            className="text-red-500 px-2 hover:bg-red-50"
          >
            <FaDeleteLeft className="text-3xl" />
          </button>
        </div>
    )
}

export default NoteItem;