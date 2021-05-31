import * as React from 'react';
import {Title} from '../common/Title';
import {TitleTypeEnum} from '../interfaces/CommonInterfaces';
import {Link} from 'react-router-dom';

export const Sidebar = () => {

    return (
        <div className="sidebar">            
                <Title title="Todos" titleType = {TitleTypeEnum.H2} darkMode={true}/>
                <div className="flex flex-col">
                    <Link to="/todos">
                        <Title title="See my Todos" titleType = {TitleTypeEnum.H4} darkMode={true}/>
                    </Link>
                    <Link to="/users">
                        <Title title="See users" titleType = {TitleTypeEnum.H4} darkMode={true}/>
                    </Link>
                </div>
        </div>
    );
};