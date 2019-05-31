import React from 'react';

const Character = props => {
    console.log(props.eachCharacter)
    return(
        <div 
            className={`each-character ${props.eachCharacter.isClicked ? ' clickedOn' : ''}`} 
            onClick={props.eachCharacter.isClicked && !props.eachCharacter.isClicked}
        >
            <h3 className='character-name'>{props.eachCharacter.name}</h3>
            <p>Born {props.eachCharacter.birth_year}</p>
        </div>
    )
}

export default Character;