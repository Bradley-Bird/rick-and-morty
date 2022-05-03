import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharactersById } from '../services/rickandmorty';

function CharacterDetailCard({ character, id }) {
  // const { id } = useParams();
  // const [characters, setCharacters] = useState({});

  // useEffect(() => {
  //   // const selectedCharacter = character.find(
  //   //   (character) => character.id === Number(id)
  //   // );
  //   const fetchData = async () => {
  //     const resp = await fetchCharactersById(id);
  //     setCharacters(resp);
  //   };
  //   fetchData();
  //   // setCharacters(selectedCharacter);
  // }, [id]);

  return (
    <>
      <h1>{character.name}</h1>
      <img src={character.image} alt={`Image of ${character.name}`} />
    </>
  );
}

export default CharacterDetailCard;
