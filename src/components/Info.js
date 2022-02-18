import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

export default function Info(props) {
    const { characterId, closeInfo } = props;
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/people/${characterId}?api_key=${API_KEY}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.error(err))
    }, [characterId])

    return (
        <div>
            
        </div>
    )
}