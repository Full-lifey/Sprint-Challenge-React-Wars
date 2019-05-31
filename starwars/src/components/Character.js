import React from 'react';

const Character = props => {
    console.log(props.eachCharacter)
    return(
        <div 
            className={`each-character ${props.eachCharacter.isClicked ? ' clickedOn' : ''}`} 
            onClick={props.eachCharacter.isClicked && !props.eachCharacter.isClicked}
        >
            <h3 className='character-name'>{props.eachCharacter.name}</h3>
            {/* {props.eachCharacter.isClicked} */}
        </div>
    )
}

export default Character;