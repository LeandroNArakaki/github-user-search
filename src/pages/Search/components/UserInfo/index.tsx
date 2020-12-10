import ButtonForm from 'core/components/ButtonForm';
import { User } from 'core/types/User';
import dayjs from 'dayjs';
import React from 'react';
import './styles.css';

type Props = {
    user?: User;
}

const UserInfo = ({ user }: Props) => {
    return (
        <div className="user-info-container">
            <div className="user-info">
                <div className="user-info-avatar-content">
                    <>
                        <img src={user?.avatar_url}
                            alt="Avatar do usuário"
                            className="user-info-avatar" />
                        <a href={`https://github.com/${user?.login}`} target="_new" >
                            <ButtonForm text="Ver Perfil" />
                        </a>
                    </>

                </div>

                <>
                    <div className="user-info-details">
                        <div className="badges-content">
                            <span className="badge-item user-info-item">
                                Repositórios públicos: {user?.public_repos}
                            </span>
                            <span className="badge-item user-info-item">
                                Seguidores: {user?.followers}
                            </span>
                            <span className="badge-item user-info-item">
                                Seguindo: {user?.following}
                            </span>
                        </div>
                    </div>
                    <div className="user-info-content user-info-item">
                        <h3 className="user-info-title">
                            Informações
                                </h3>
                        <div className="user-info-details-item user-info-item">
                            <strong>Empresa: </strong> {user?.company}
                        </div>
                        <div className="user-info-details-item user-info-item">
                            <strong>Website/Blog: </strong> {user?.blog}
                        </div>
                        <div className="user-info-details-item user-info-item">
                            <strong>Localidade: </strong> {user?.location}
                        </div>
                        <div className="user-info-details-item user-info-item">
                            <strong>Membro desde: </strong> {dayjs(user?.created_at).format('DD/MM/YYYY')}
                        </div>
                    </div>
                </>

            </div>
        </div>
    );
}


export default UserInfo;