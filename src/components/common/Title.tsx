import {FunctionComponent} from 'react';
import {TitleInterface, TitleTypeEnum} from '../interfaces/CommonInterfaces';

export const Title : FunctionComponent<TitleInterface> = ({title, titleType, darkMode = false}) => {

    const titleTag = () : JSX.Element => {
        switch(titleType){
            case TitleTypeEnum.H1:
                return <h1>{title}</h1>;
            case TitleTypeEnum.H2:
                return <h2>{title}</h2>;
            case TitleTypeEnum.H3:
                return <h3>{title}</h3>;
            case TitleTypeEnum.H4:
                return <h4>{title}</h4>;
            case TitleTypeEnum.H5:
                return <h5>{title}</h5>;
            case TitleTypeEnum.H6:
                return <h6>{title}</h6>;
            default:
                return <h3>{title}</h3>;
        }
    };

    const enableDarkMode : string = darkMode ? "centerDiv darkModeTextTitle" : "centerDiv";

    return (
        <div className={enableDarkMode}>
            {titleTag()}
        </div>
    );
};