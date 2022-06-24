import './Writing.css';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Post from './Post.js';

function Writing() {

  const [checkedst, setCheckedst] = useState([]);

  const checkedbox = (e) => {
    setCheckedst(!checkedst);
  }

  const [content, setContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value
    })
  };

  return (
    <div className="App">
      <div style={{fontSize:'25px', marginTop:'50px', padding:'10px'}}>카테고리 주제 선택(필수)
        <input type="checkbox" onClick={checkedbox} disabled={!checkedst ? true : false} style={{zoom:'1.5'}}/> <span style={{border:'2px solid black'}}>학과</span>
        <input type="checkbox" onClick={checkedbox} disabled={!checkedst ? true : false} style={{zoom:'1.5'}}/> <span style={{border:'2px solid black'}}>동아리</span>
        <input type="checkbox" onClick={checkedbox} disabled={!checkedst ? true : false} style={{zoom:'1.5'}}/> <span style={{border:'2px solid black'}}>학교</span>
        <input type="checkbox" onClick={checkedbox} disabled={!checkedst ? true : false} style={{zoom:'1.5'}}/> <span style={{border:'2px solid black'}}>순천향대 생활</span>
      </div>
      <div className='form-wrapper'>
        <input className="title-input" placeholder={"제목을 입력하세요."}
          type='text'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent({
              ...content,
              content: data
            })
            console.log(content);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          config={{
            placeholder: "내용을 입력하세요.",
          }}
        />
      </div>
      <button className="submit-button"


      onClick={() => {
        setViewContent(viewContent.concat({...content}));
      }}
      >작성 완료</button>
    </div>
  );
}

export default Writing;