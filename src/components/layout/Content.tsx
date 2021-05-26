import {Switch,Route,} from "react-router-dom";
import {IndexTodo} from '../todo/IndexTodo';
import {IndexUsers} from '../users/IndexUsers';

export const Content = ()  => {
    return (
    <div className="content">
        <Switch>
          <Route path="/todos">
            <IndexTodo />
          </Route>
          <Route path="/users">
            <IndexUsers />
          </Route>
        </Switch>
    </div>
    );
} 