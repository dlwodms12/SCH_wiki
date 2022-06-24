import React from 'react'
import Navigationbar from './Component/Navigationbar.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home.js'
import Post from './Page/Post.js'
import DepartmentList from './Page/DepartmentList.js'
import ClubPostList from './Page/ClubPostList.js'
import UniversityPostList from './Page/UniversityPostList.js'
import UniversityLifePostList from './Page/UniversityLifePostList.js'
import NoPostSearch from './Page/NoPostSearch.js'
import Writing from './Page/Writing.js'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar/>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/Post" element={<Post/>}/>
                <Route path="/DepartmentList" element={<DepartmentList/>}/>
                <Route path="/ClubPostList" element={<ClubPostList/>}/>
                <Route path="/UniversityPostList" element={<UniversityPostList/>}/>
                <Route path="/UniversityLifePostList" element={<UniversityLifePostList/>}/>
                <Route path="/NoPostSearch" element={<NoPostSearch/>}/>
                <Route path="/Writing" element={<Writing/>}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;