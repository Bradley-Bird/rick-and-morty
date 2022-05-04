import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import CharacterDetailCard from '../components/CharacterDetailCard';
import { fetchCharacters } from '../services/rickandmorty';

function Main() {
  const { url, path } = useRouteMatch();

  const [characters, setCharacters] = useState({});

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {characters.map((c) => (
            <CharacterCard key={c.id} name={c.name} id={c.id} url={url} />
          ))}
          <Route path={`${path}/:id`}>
            <CharacterDetailCard />
          </Route>
        </>
      )}
    </>
  );
}

export default Main;
