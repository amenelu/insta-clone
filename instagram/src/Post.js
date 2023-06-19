import React, { useState } from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar'
function Post({username,caption,imgurl}) {
  
  return (
    <div className='post'>
    <div className="post__header">
    <Avatar className='post__avatar'
      alt='username'
      src="/static/images/avatar/1.jpg"
          />
    <h3>{username}</h3>

    </div>
    
    {/*header-> avatar + username */}
    <img className='post__image' src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg" 
          alt="" />
    <h3 className='post__text'><strong>{username}:</strong> {caption}</h3>
    {/*username + caption */}

    </div>
  )
}

export default Post;