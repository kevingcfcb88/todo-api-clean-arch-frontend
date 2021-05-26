import * as React from 'react';
import {Title} from '../common/Title';
import {TitleTypeEnum} from '../interfaces/CommonInterfaces';
import {Link} from 'react-router-dom';

export const Sidebar = () => {

    return (
        <div className="sidebar">            
                <Title title="Todos" titleType = {TitleTypeEnum.H2} />
                <div className="flex flex-col">
                    <Link to="/todos">See my Todos</Link>
                    <Link to="/users">See Users</Link>
                </div>
        </div>
    );
};