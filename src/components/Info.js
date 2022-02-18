import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Info(props) {
    const { characterId, closeInfo } = props;
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.characterId}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.error(err))
    }, [characterId])
}