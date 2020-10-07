import React, { useEffect, useState } from 'react';
import { Box, Card, CardBody, CardHeader, Image, Text, Grommet } from 'grommet';

import {
    useParams,
} from "react-router-dom";


import WebClient from '../WebClient';

const UserCard = () => {
    let { userId } = useParams();

    const [user, setUser] = useState({ id: 0, firstName: '', lastName: '', avatar: '/logo-small.png', email: '' });
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const baseUrl = 'http://localhost:32774/api/users/'
        let response = WebClient.getJsonAsync(`${baseUrl}${userId}`)
        response.then((data) => {
            if (data.error){
                setFeedback(`Requested user Id: ${userId} not found`);
            } else {
                setUser({ ...data.data });
                setFeedback(`Requested user Id: ${userId} found`);
            }
        });

    });

    return (
        <Grommet>
            <h3>{feedback}</h3>
            <Card height="medium" width="medium" background="light-1">
            <CardHeader pad="medium">{`${user.firstName} ${user.lastName}`}</CardHeader>
            <CardBody pad="medium">
                <Image fit='cover' src={user.avatar} alt={`${user.firstName} ${user.lastName} avatar`} />
                <Box>
                    <Text>{user.email}</Text>
                </Box>
            </CardBody>
            </Card>
        </Grommet>
    );

};

export default UserCard;