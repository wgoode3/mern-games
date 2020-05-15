import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Edit = (props) => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [_console, setConsole] = useState("");
    const [studio, setStudio] = useState("");

    useEffect( () => {
        fetchGames();
    }, []);
    
    const fetchGames = () => {
        axios.get(`http://localhost:8000/games/${props.id}`)
            .then(res => {
                console.log(res);
                setTitle(res.data.title);
                setGenre(res.data.genre);
                setConsole(res.data._console);
                setStudio(res.data.studio);
            })
            .catch(err => console.log(err));
    }

    const updateGame = (e) => {
        e.preventDefault();
        console.log({title, genre, _console, studio});
        axios.put(`http://localhost:8000/games/${props.id}`, {title, genre, _console, studio})
          .then(res => {
            navigate("/");
          })
          .catch(err => console.log(err));
    }

    return (
        <form onSubmit={ updateGame }>
            <p>Title: <input type="text" onChange={ e => setTitle(e.target.value) } value={ title }/></p>
            <p>Genre: <input type="text" onChange={ e => setGenre(e.target.value) } value={ genre }/></p>
            <p>Console: <input type="text" onChange={ e => setConsole(e.target.value) } value={ _console }/></p>
            <p>Studio: <input type="text" onChange={ e => setStudio(e.target.value) } value={ studio }/></p>
            <button>Update Game</button>
        </form>
    )

}

export default Edit;