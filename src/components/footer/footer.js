import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Footer = (props) => {
    return (
        <container>
        <BottomNavigation>
        <Typography variant="h6">
            &copy; Ashley Moore, Garrett Cintron, Tahmina Ringer, Aysia Brown
        </Typography>
            <Typography variant="h6">
            <Typography>GitHub</Typography>
        </Typography>
        </BottomNavigation>
        </container>
    );
}
export default Footer;