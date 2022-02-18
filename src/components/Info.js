import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants';
import styled, { keyframes } from 'styled-components';

const StyledInfo = styled.div`
color: red;
font-weight: bold;
font-size: 20px;

p {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

h2 {
    color: black;
}

button {
    background-color: rgba(0, 0, 0, 0.5);
    color: skyblue;
    padding: 10px 20px;
    font-size: 20px;
}
`

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
        <StyledInfo>
            <h2>Info</h2>
            {
                info &&
                <>
                    <p>Gender: {info.gender}</p>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p> 
                    <p>Birth Year: {info.birth_year}</p>
                    <p>Eye Color: {info.eye_color}</p> 
                    <p>Hair Color: {info.hair_color}</p> 
                    <p>Skin Color: {info.skin_color}</p> 
                </>
            }
            <button onClick={closeInfo}>Close</button>
        </StyledInfo>
    )
}