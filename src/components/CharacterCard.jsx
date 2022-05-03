import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ id, name }) {
  return (
    <div key={id}>
      <Link to={`/character/${id}`}>{name}</Link>
    </div>
  );
}

export default CharacterCard;
