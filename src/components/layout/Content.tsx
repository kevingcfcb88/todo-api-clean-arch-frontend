import * as React from 'react';
import { Title } from '../common/Title';
import { TitleTypeEnum } from '../interfaces/CommonInterfaces';

export const Content = ()  => {
    return (
    <div className="content">
        <Title title='Todos de {UserName}' titleType= {TitleTypeEnum.H2}/>
    </div>);
} 