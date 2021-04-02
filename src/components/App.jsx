import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevValue => {
            return [...prevValue, note];
        });
    }

    function deleteNote(id) {
        setNotes(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote}/>;
            })}
            <Footer />
        </div>
    );
}

export default App;