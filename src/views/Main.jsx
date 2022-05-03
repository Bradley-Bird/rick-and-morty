import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { fetchCharacters } from '../services/rickandmorty';
import CharacterDetail from './CharacterDetail';

function Main() {
  const { url, path } = useRouteMatch();
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
        character.map((c) => (
          <CharacterCard key={c.id} name={c.name} id={c.id} url={url} />
        ))
      )}
      <Route path={`${path}/:id`}>
        <CharacterDetail character={character} />
      </Route>
    </>
  );
}

export default Main;
