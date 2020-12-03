import ButtonForm from 'core/components/ButtonForm';
import { Person } from 'core/types/Person';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import LabelBoardInfo from './components/LabelBoardInfo';
import LabelForm from './components/LabelForm';
import './styles.scss';


type FormState = {
    name: string;
    //person:Person;
}

const Search = () => {
    const [person, setPerson] = useState<Person>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    const [formData, setFormData] = useState<FormState>({
        name: '' 
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }

    useEffect(() => {
        makeRequest({ url: `users/${formData.name}` })
            .then(response => setPerson(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [formData.name])



    return (
        <form className="search-container" onSubmit={handleSubmit} >
            <div className="search-content">
                <h1 className="search-text">Encontre um perfil Github</h1>
                <div className="search-input-container">
                    <input type="text" className="search-input" placeholder="Usuário Github"
                        name="name" value={formData.name} onChange={handleOnChange} />
                </div>
                <ButtonForm text="Encontrar" />
            </div>
            <div className="search-found-container">
                <div className="search-found-content">
                    <div className="label-form-repository">
                        <LabelForm text="Repositórios públicos:" />
                    </div>
                    <div className="label-form-followers">
                        <LabelForm text="Seguidores:" />
                    </div>
                    <div className="label-form-following">
                        <LabelForm text="Seguindo:" />
                    </div>
                    <div className="search-board-info">
                        <h2 className="search-board-text-info">
                            Informações
                        </h2>
                        <div className="search-board-text-company">
                            <LabelBoardInfo text="Empresa:" />
                        </div>
                        <div className="search-board-text-website">
                            <LabelBoardInfo text="Website/Blog:" />
                        </div>
                        <div className="search-board-text-locality">
                            <LabelBoardInfo text="Localidade:" />
                        </div>
                        <div className="search-board-text-member">
                            <LabelBoardInfo text="Membro desde:" />
                        </div>
                    </div>
                    <div className="search-board-image">
                        <img className="person-card-image" 
                            src={person?.avatar_url} alt={person?.login} />
                    </div>
                    <div className="search-board-button">
                        <ButtonForm text="Ver Perfil" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Search;