// src/components/FancyBox.js
import React from 'react';
import Link from '@docusaurus/Link';

const Card = ({ to, title, description }) => (
    <div className="card">
        <Link to={to} className="card-link">
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    </div>
);

export default Card;
