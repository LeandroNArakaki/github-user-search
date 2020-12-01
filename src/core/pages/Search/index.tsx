import ButtonForm from 'core/components/ButtonForm';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import './styles.scss';


type FormState = {
    name:string;
}

const Search = () => {

    const [formData, setFormData] = useState<FormState>({
        name:''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setFormData(data => ({ ...data, [name]: value }) );
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest( { url:`users/${formData.name}`} );
    }
    return (
        <form className="search-container" onSubmit={handleSubmit} >
            <div className="search-content">
                <h1 className="search-text">Encontre um perfil Github</h1>
                <div className="search-input-container">
                    <input type="text" className="search-input" placeholder="Usuário Github" 
                        name="name" value={formData.name}  onChange={handleOnChange} />
                </div>
                <ButtonForm text="Encontrar" />
            </div>
            <div className="search-found-container">
                <div className="search-found-content">

                </div>
            </div>
        </form>
    );
};

export default Search;