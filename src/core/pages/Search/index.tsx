import ButtonForm from 'core/components/ButtonForm';
import React from 'react';
import './styles.scss';

const Search = () => (
    <form className="search-container" >
        <div className="search-content">
            <h1 className="search-text">Encontre um perfil Github</h1>
            <div className="search-input-container">
                <input type="text" className="search-input" placeholder="Usuário Github" />
            </div>
            <ButtonForm text="Encontrar" />
        </div>
    </form>
);

export default Search;