import React from "react";
import Character from "./Character";

import './StarWars.scss'

const CharacterList = props => {
    // console.log(props.characterList)
  return (
    <div className="character-items">
        {props.characterList.map((eachCharacter, index) => {
            return (
            <Character 
                key={index} 
                eachCharacter={eachCharacter}
            />
        )})}
    </div>
  );
};

export default CharacterList;
