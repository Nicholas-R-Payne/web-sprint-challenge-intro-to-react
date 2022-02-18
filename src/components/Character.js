import React from 'react';

// Write your Character component here

const Character = props => {
    return (
        <div classname='character'>
            {props.info.name}
            <button onClick={() => props.openInfo(props.info.id)}>
                See Info
            </button>
        </div>
    )
}

export default Character;