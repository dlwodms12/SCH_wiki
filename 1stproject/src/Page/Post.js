import './Post.css';
import ReactHtmlParser from 'html-react-parser';

function Post() {
  
  let viewContent;

  return (
    <>
    <div className='content-container'>
        {viewContent.map(element =>
          <div style={{border : '2px solid #333'}}>
            <div style={{textAlign:'left', fontSize:'45px', padding:'15px'}}>{element.title}</div>
            <div style={{borderTop : '1px solid #333', textAlign:'left', padding:'10px'}}>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
          )}
      </div>
    </>
  );
}

export default Post;