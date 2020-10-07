import React from 'react';
import { Box, Grommet } from 'grommet';

export default function Home() {
    return (
    <Grommet>
        <Box flex align='center' justify='center'>
            <h1>Welcome to user request app</h1>
            <p>Visit the Users page and add a user id to the url to request user details</p>
            <p>Example. /users/2 and press enter</p>
        </Box>
    </Grommet>)
}