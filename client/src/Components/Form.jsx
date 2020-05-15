import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Form = (props) => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [_console, setConsole] = useState("");
    const [studio, setStudio] = useState("");

    const addGame = (e) => {
        e.preventDefault();
        console.log({title, genre, _console, studio});
        axios.post("http://localhost:8000/games", {title, genre, _console, studio})
          .then(res => {
            navigate("/");
          })
          .catch(err => console.log(err));
    }

    return (
        <form onSubmit={ addGame }>
            <p>Title: <input type="text" onChange={ e => setTitle(e.target.value) } /></p>
            <p>Genre: <input type="text" onChange={ e => setGenre(e.target.value) } /></p>
            <p>Console: <input type="text" onChange={ e => setConsole(e.target.value) } /></p>
            <p>Studio: <input type="text" onChange={ e => setStudio(e.target.value) } /></p>
            <button>Add Game</button>
        </form>
    )

}

export default Form;