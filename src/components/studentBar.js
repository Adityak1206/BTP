import React from 'react'
import '../components/studentBar.css'
import studentVector from '../images/studentVector.png';
import dashboard from '../images/dashboard.png';
import add from '../images/add.png';
import groups from '../images/groups.png';
import research from '../images/research.png';
import settings from '../images/settings.png';
import studentLogout from '../images/studentLogout.png';
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Quicksand&display=swap" rel="stylesheet"></link>

function studentBar() {
    return (
        <div className="container">
            <img src={studentVector}/>
            <p>btp</p>
            <div className="dashboard">
                <img src={dashboard}/>
                <p>Dashboard</p>
            </div>
            <div className="add">
                <img src={add}/>
                <p>BTP</p>
            </div>
            <div className="publications">
                <img src={research}/>
                <p>Publications</p>
            </div>
            <div className="settings">
                <img src={settings}/>
                <p>Settings</p>
            </div>
            <div className="logout">
                <img src={studentLogout}/>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default studentBar

