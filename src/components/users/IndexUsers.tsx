import { Title } from '../common/Title';
import { TitleTypeEnum } from '../interfaces/CommonInterfaces';

export const IndexUsers = () : JSX.Element => {
    return (
        <div>
            <Title title='Users' titleType= {TitleTypeEnum.H2}/>
        </div>
    )
};