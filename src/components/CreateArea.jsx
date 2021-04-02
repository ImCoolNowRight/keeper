import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [active, setActive] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleFocus() {
        setActive(true);
    }

    return (
        <div>
            <form className="create-note" onFocus={handleFocus}>
                {active && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} autoComplete="off" />}
                <textarea name="content" placeholder="Take a note..." rows={active ? 3 : 1} onChange={handleChange} value={note.content} />
                <Zoom in={active}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
