import React from 'react';
import CharacterDetailCard from '../components/CharacterDetailCard';

function CharacterDetail({ character }) {
  return (
    <>
      <CharacterDetailCard character={character} />
    </>
  );
}

export default CharacterDetail;
