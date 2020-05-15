import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Games = (props) => {

    const [games, setGames] = useState([]);

    useEffect( () => {
        fetchGames();
    }, []);
    
    const fetchGames = () => {
        axios.get("http://localhost:8000/games")
            .then(res => setGames(res.data))
            .catch(err => console.log(err));
    }

    const remove = (e, i) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/games/${i}`)
            .then(res => {
                fetchGames();
            })
            .catch(err => console.log(err));
    }

    return (
        <table border="1">
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Console</th>
                    <th>Studio</th>
                    <th>Actions</th>
                </tr>
                {games.map( (g, i) => 
                    <tr key={ i }>
                        <td>{g.title}</td>
                        <td>{g.genre}</td>
                        <td>{g._console}</td>
                        <td>{g.studio}</td>
                        <td>
                            <Link to={"/edit/" + i}>Edit</Link>{" | "}
                            <a href="#" onClick={(e) => remove(e, i)}>&times;</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default Games;