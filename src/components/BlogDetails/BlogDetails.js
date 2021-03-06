import React, { useEffect } from 'react';
import './BlogDetails.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetails = ({ blog }) => {
    const { blogTitle, blogDate, blogDescription, blogImgUrl } = blog;

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])


    return (
        <div className="col-md-3 col-sm-8" data-aos="fade-up">
            <div className="card bg-transparent blog-card">
                <img src={blogImgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{blogTitle}</h5>
                    <small>{blogDate}</small>
                    <h2 className="card-boder w-25 my-3"></h2>
                    <p className="card-text">{blogDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;