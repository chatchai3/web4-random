import React,{useState} from "react";
import { Outlet, Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import HistoryIcon from '@mui/icons-material/History';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactsIcon from '@mui/icons-material/Contacts';

import './App.css';
const Nav=(props)=>{
    const styles = {
        root: {
          color: "green",
          "&$selected": {
            color: "red"
          }
        },
        selected: {}
      };
    const actionclass = props.classes
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <>
        <div className="App ">
            <center>
                <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} >
                    <BottomNavigationAction
                    
                    component={Link}
                    to='/'
                    label="Recents"
                    value="recents"
                    icon={<HistoryIcon />}
                    />
                   
                    <BottomNavigationAction
                    component={Link}
                    to='profile'
                    label="Nearby"
                    value="nearby"
                    icon={<ContactsIcon />}
                    />

                </BottomNavigation>
                
            </center>
        
    </div>
    <div  className="container bg-info">
    <Outlet />
    </div>
    
    </>
    )
}
export default Nav;