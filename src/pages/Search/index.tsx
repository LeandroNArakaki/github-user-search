import React, { useState } from 'react';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import { makeRequest } from 'core/utils/request';
import { User } from 'core/types/User';
import './styles.css';


const Search = () => {
    const [userInfo, setUserInfo] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (search: string) => {
        setIsLoading(true);
        makeRequest({ url: `users/${search}` })
            .then(response => setUserInfo(response.data))
            .catch(()=>{
                alert('Usuário não encontrado');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="search-container" >
            <Form onSearch={handleSearch} />
            {
                userInfo && (
                    <UserInfo user={userInfo} isLoading={isLoading} />
                )
            }

        </div>
    );
};


export default Search;