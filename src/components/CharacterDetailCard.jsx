import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetailCard({ character = [] }) {
  const { id } = useParams();
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    const selectedCharacter = character.find(
      (character) => character.id === Number(id)
    );
    setCharacters(selectedCharacter);
  }, [id]);

  return (
    <>
      <h1>{characters.name}</h1>
    </>
  );
}

export default CharacterDetailCard;
