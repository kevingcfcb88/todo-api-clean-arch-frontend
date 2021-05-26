import { Title } from '../common/Title';
import { TitleTypeEnum } from '../interfaces/CommonInterfaces';

export const IndexTodo = () : JSX.Element => {
    return (
        <div>
            <Title title='Todos de {UserName}' titleType= {TitleTypeEnum.H2}/>
        </div>
    )
};