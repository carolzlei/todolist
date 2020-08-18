import React from 'react';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';
import SettingsIcon from '@material-ui/icons/Settings';

function Header(){
    return <div className="header"> 
        <NotificationsPausedIcon color="primary" fontSize="large" />
        <SettingsIcon color="primary" fontSize="large" />
    </div>
}

export default Header