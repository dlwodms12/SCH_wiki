import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NoPostSearch.css'

function NoPostSearch() {
    let Navigate = useNavigate();

    function NewDocumentWrite() {
        Navigate('./writing');
    }

    return(
        <>
            <div style={{fontSize:'50px', marginTop:'30px', marginLeft:'30px'}}>'' 문서가 없습니다.</div>
            <span style={{fontSize:'20px', marginTop:'20px', marginLeft:'30px'}}>'' 문서를 작성하시겠습니까?</span>
            <button onClick={NewDocumentWrite} style={{fontSize:'20px', marginTop:'20px', marginLeft:'30px', cursor:'pointer', backgroundColor:'rgb(0, 130, 245)', color:'white'}}>'' 새 문서 작성하기</button>
        </>
    )
}

export default NoPostSearch;