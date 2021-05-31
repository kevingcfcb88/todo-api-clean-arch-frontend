import {Todo} from '../todo/Todo';

export const InnerContainer = () : JSX.Element => {
    return (
        <div className="innerContainer">
            <div className="addTodo">
                Add Todo
            </div>
            <Todo/>
            <Todo/>
        </div>
    );
}