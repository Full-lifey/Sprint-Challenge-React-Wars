import React from "react";
import Character from "./Character";

const CharacterList = props => {
    // console.log(props.characterList)
  return (
    <div className="character-item">
        {props.characterList.map(eachCharacter => {
            return <Character eachCharacter={eachCharacter} />
        })}
    </div>
  );
};

export default CharacterList;
