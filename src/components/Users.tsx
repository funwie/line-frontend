import React from 'react';
import { Box } from 'grommet';
import UserCard from './UserCard';
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";

function Users() {
    let match = useRouteMatch();

    return (
        <div>

            <Switch>
                <Route path={`${match?.path}/:userId`}>
                    <Box flex align='center' justify='center'>
                        <UserCard />
                    </Box>
                </Route>
                <Route path={match?.path}>
                    <Box flex align='center' justify='center'>
                        <h3>Please add a user id to the url</h3>
                    </Box>
                </Route>
            </Switch>
        </div>
    );
}
export default Users;
