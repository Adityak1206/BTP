import React from 'react'
import '../components/sidebar.css'
import vector from '../images/Vector.png';
import dashboard from '../images/dashboard.png';
import add from '../images/add.png';
import groups from '../images/groups.png';
import research from '../images/research.png';
import settings from '../images/settings.png';
import logout from '../images/logout.png';
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Quicksand&display=swap" rel="stylesheet"></link>


function sidebar() {
    return (
        <div className="container">
            <img src={vector}/>
            <p>btp</p>
            <div className="dashboard">
                <img src={dashboard}/>
                <p>Dashboard</p>
            </div>
            <div className="add">
                <img src={add}/>
                <p>Add BTP</p>
            </div>
            <div className="groups">
                <img src={groups}/>
                <p>Groups</p>
            </div>
            <div className="research">
                <img src={research}/>
                <p>Research</p>
            </div>
            <div className="settings">
                <img src={settings}/>
                <p>Settings</p>
            </div>
            <div className="logout">
                <img src={logout}/>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default sidebar
