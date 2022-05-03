import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import { fetchCharacters } from '../services/rickandmorty';

function Main() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacter(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        character.map((c) => <CharacterCard key={c.id} {...c} />)
      )}
    </>
  );
}

export default Main;
