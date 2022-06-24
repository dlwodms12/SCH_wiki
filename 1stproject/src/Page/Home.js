import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

function Home() {

    let Navigate = useNavigate();

    function DocumentWrite() {
        Navigate('./writing');
    }

    function NDepartmentList() {
        Navigate('./DepartmentList');
    }
    function NClubPostList() {
        Navigate('./ClubPostList');
    }
    function NUniversity() {
        Navigate('./UniversityPostList');
    }
    function NUniversityLifePostList() {
        Navigate('./UniversityLifePostList');
    }

    return(
        <>
            <div style={{position:'absolute', fontSize:'40px', left:'600px', marginTop:'25px'}}>순천향대 공식 홈페이지: <a href="https://home.sch.ac.kr" style={{position:'absolute', textDecorationLine:'none', color:'rgba(0,172,238,1)'}}>https://home.sch.ac.kr</a></div>
            <button style={{position:'absolute', fontSize:'50px', marginTop:'150px', marginLeft:'800px', backgroundColor:'rgb(0, 130, 245)', color:'white', cursor:'pointer'}} onClick={DocumentWrite}>문서 작성하기</button>
            <div style={{position:'absolute', marginTop:'400px'}}>
                <button name='' value='out' onClick={NDepartmentList} className="custom-btn topAnibtn" style={{position:'absolute', left:'200px', fontSize:'70px'}}><span>학과</span></button>
                <button onClick={NClubPostList} className="custom-btn topAnibtn" style={{position:'absolute', left:'600px', fontSize:'70px'}}><span>동아리</span></button>
                <button onClick={NUniversity} className="custom-btn topAnibtn" style={{position:'absolute', left:'1000px', fontSize:'70px'}}><span>학교</span></button>
                <button onClick={NUniversityLifePostList} className="custom-btn topAnibtn" style={{position:'absolute', left:'1400px', fontSize:'70px'}}><span style={{fontSize:'70px', lineHeight:'1.4'}}>순천향대 생활</span></button>
            </div>
        </>
    )
}

export default Home;