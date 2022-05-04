import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ id, name, url }) {
  return (
    <div key={id}>
      <Link to={`${url}/${id}`}>{name}</Link>
    </div>
  );
}

export default CharacterCard;
