import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharactersById } from '../services/rickandmorty';

function CharacterDetailCard() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCharactersById(id);
      setCharacter(resp);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h1>{character.name}</h1>
      <img src={character.image} alt={`Image of ${character.name}`} />
    </>
  );
}

export default CharacterDetailCard;
