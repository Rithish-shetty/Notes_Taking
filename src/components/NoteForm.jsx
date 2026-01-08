import { useState } from "react"

const NoteForm = ({onAdd}) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({title,desc});
        setTitle('');
        setDesc('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="border-2 rounded-2xl mx-auto p-10 space-y-10 my-10 hover:bg-blue-50">
                <p className="mb-2">Enter Title</p>
                <input 
                type="text" 
                className="w-full border-2 rounded-2xl mb-10 p-2 hover:bg-blue-100"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <p className="mb-2">Enter Description</p>
                <textarea
                className="w-full border-2 rounded-2xl mb-2 p-2 hover:bg-blue-100"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                />

                <button
                type="submit"
                disabled={!title}
                className="w-full bg-sky-700 border rounded-4xl  text-white p-4 disabled:bg-gray-400 disabled:text-black"
                >Submit
                </button>
            </form>
        </div>
    );
}
export default NoteForm;