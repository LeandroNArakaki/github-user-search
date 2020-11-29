import ButtonForm from 'core/components/ButtonForm';
import React from 'react';
import './styles.scss';

const Search = () => (
    <div className="search-container">
        <div className="search-content">
            <h1 className="search-text">Encontre um perfil Github</h1>
            <input type="text" className="search-input" placeholder="Usuário Github" name="name">
            
            </input>
            <ButtonForm text="Encontrar" />
        </div>
    </div>
);

export default Search;