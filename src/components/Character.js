import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledCharacter = styled.div`
color: #00B7EB;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
font-weight: bold;
font-size: 20px;

button {
    background-color: rgba(0, 0, 0, 0.5);
    color: skyblue;
}
`

// Write your Character component here

const Character = (props) => {
    return (
        <StyledCharacter>
            <p>{props.info.name}</p>
            <button onClick={() => props.openInfo(props.index + 1)}>
                See Info
            </button>
        </StyledCharacter>
    )
}

export default Character;