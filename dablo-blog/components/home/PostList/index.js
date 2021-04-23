import React from 'react'
import PostItem from './PostItem'
import { postListStyles } from 'styles'
import ScrollIcon from '../../ScrollIcon'
/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <div className="blog-main">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
      <style jsx global>{postListStyles}</style>
    </div>
  )
}

export default PostList
