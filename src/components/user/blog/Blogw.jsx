import React from 'react'
import ListBlogPost from './ListBlogPost'
export default function Blogw() {
  return (
    <div className="blog-box">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="heading-title text-center">
                    <h2>Blog</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                    </p>
                </div>
            </div>
        </div>
        {/* ListBlogPost */}
       <ListBlogPost/>
    </div>
</div>

  )
}
