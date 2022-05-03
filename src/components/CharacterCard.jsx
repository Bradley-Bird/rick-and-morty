import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ id, name, url, setId }) {
  return (
    <div key={id}>
      <Link onClick={() => setId(id)} to={`${url}/${id}`}>
        {name}
      </Link>
    </div>
  );
}

export default CharacterCard;
