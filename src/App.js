import TasksPage from "./features/tasks/TasksPage"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage"
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";


const App = () => (
    <HashRouter>
        <Navigation></Navigation>
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route>
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
        
    </HashRouter>

)
export default App; 