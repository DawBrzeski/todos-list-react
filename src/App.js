import TasksPage from "./features/tasks/TasksPage"
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage"
import { StyledNavLink } from "./styled";


export default () => (
    <HashRouter basename="todos-list-react">
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania"> zadania
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor"> O autorze
                    </StyledNavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>

)