import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import CharacterDetailCard from '../components/CharacterDetailCard';
import { fetchCharacters, fetchCharactersById } from '../services/rickandmorty';

function Main() {
  // const { id } = useParams();
  // console.log(id);

  const location = useLocation();
  // console.log('location', location);

  const { url, path } = useRouteMatch();
  // console.log(url, path);

  const [character, setCharacter] = useState([]);
  const [characters, setCharacters] = useState({});
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const pathname = new URLSearchParams(location.pathname);
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacter(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCharactersById(id);
      setCharacters(resp);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        character.map((c) => (
          <CharacterCard
            setId={setId}
            key={c.id}
            name={c.name}
            id={c.id}
            url={url}
          />
        ))
      )}
      <Route path={`${path}/${id}`}>
        {id && <CharacterDetailCard id={id} character={characters} />}
      </Route>
    </>
  );
}

export default Main;
