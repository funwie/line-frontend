import React from 'react';
import { Box } from 'grommet';

type AppBarProps = { title: string };

const AppBar : React.FC<AppBarProps> = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        {...props}
    />
);

export default AppBar;