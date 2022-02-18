import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';

export default function Info(props) {
    const { character, closeInfo } = props;
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/people/${character}?api_key=${API_KEY}`)
        .then(res => {
            setInfo(res.data);
        })
        .catch(err => console.error(err))
    }, [character])

    return (
        <div>
            <h2>Info:</h2>
            {
                info &&
                <>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p> 
                    <p>Hair Color: {info.hair_color}</p> 
                    <p>Skin Color: {info.skin_color}</p> 
                </>
            }
            <button onClick={closeInfo}>Close</button>
        </div>
    )
}