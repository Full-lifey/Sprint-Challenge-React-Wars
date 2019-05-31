import React from 'react';

const Character = props => {
    // console.log(props.character)
    return(
        <h3 className='character-name'>{props.eachCharacter.name}</h3>
    )
}

export default Character;