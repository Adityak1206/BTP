import React from 'react'
import '../components/studentPop.css'
import Student from '../images/student.png';
import Dot from '../images/redDot.png';
function studentPop() {
    return (
        <div className="container">
            <img src={Student}/>
            <h3>Nitesh Patel</h3>
            <p>Student</p>
            <img className="dot1" src={Dot}/>
            <img className="dot2" src={Dot}/>
            <img className="dot3" src={Dot}/>
        </div>
    )
}

export default studentPop
