import React,{useState} from 'react';
import './App.css';
import Post from './Post';
function App() {
  const[posts,setPosts]=useState([
    {
      username:"Amen",
      caption:"insta",
      imgurl:"https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
    },
    {
      username:"Amen2",
      caption:"insta2",
      imgurl:"https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg"
    }
  ]);
  return (
    <div className="App">
    
    <div className="app__header">
    <img 
    className="app__headerImage" 
    src="{imgurl}" 
    alt="" 
    />
    </div>
    <h1>Hello</h1>
    {
      posts.map(post => ( 
        <Post username={post.username} caption={post.caption} imgurl={post.imgurl} />
      ))
    }
    


    </div>
  );
}

export default App;
