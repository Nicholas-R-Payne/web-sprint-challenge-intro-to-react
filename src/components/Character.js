import React from 'react';
import styled, { keyframes } from 'styled-components';

// const kf = keyframes`
//   100% {
//     opacity: 1;
//     transform: scale(1);
//   }
// `

// opacity: 0;
// transform: scale(2);
// animation: ${kf} 0.5s ease-in-out forwards;

const kf = keyframes`
  0% {
    top: 500px;
    transform: rotateX(20deg) translateZ(0);
  }
  100% {
    top: 0;
    transform: rotateX(25deg) translateZ(-2500);
  }
`

const StyledCharacter = styled.div`

position: relative;
transform-origin: 50% 100%;
animation: ${kf} 2s linear;

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