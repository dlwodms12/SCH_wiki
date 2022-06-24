import React from 'react'
import {Link} from 'react-router-dom'
import './Navigationbar.css'

function Navigationbar() {

    return (
    <>
        <div className="navArea">
            <Link to="/" className="navHome">SCH위키</Link>
            <input type="text" className="navSearchtext" placeholder="검색어 입력"/>
            <button className="navSearchbutton"><span>검색</span></button>
        </div>
        <div>
    
        </div>   
    </>
    );

}

export default Navigationbar