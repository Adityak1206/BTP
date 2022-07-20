import React from 'react'
import '../components/facultyPop.css'
import Student from '../images/student.png';
import Dot from '../images/blueDot.png';
function facultyPop() {
    return (
        <div className="container">
            <img src={Student}/>
            <h3>Nitesh Patel</h3>
            <p>Senior Professor</p>
            <img className="dot1" src={Dot}/>
            <img className="dot2" src={Dot}/>
            <img className="dot3" src={Dot}/>
        </div>
    )
}

export default facultyPop
