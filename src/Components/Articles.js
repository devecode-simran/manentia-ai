import React from "react"; 
import "../Styles/Articles.css";
import CalendarIcon from "../Images/Calendar.png"; 
import Blog1 from "../Images/Blog1.png"; 
import Blog2 from "../Images/Blog2.png"; 
import Blog3 from "../Images/Blog3.png"; 
import ArrowIcon from "../Images/Arrow.png"; 
import User from "../Images/User.png"; 
import RightArrow from "../Images/ArrowRight.png"; 

const blogs = [
  {
    id: 1,
    image: Blog1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "Feb 23, 2024",
    username: "Jane Smith", 
  },
  {
    id: 2,
    image: Blog2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "Feb 25, 2024",
    username: "Jane Smith", 
  },
  {
    id: 3,
    image: Blog3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "Feb 27, 2024",
    username: "Jane Smith", 
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h3 className="blog-subheading">Blog</h3>
      <h2 className="blog-heading">Browse Articles</h2>

      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-tile">
            <img
              src={blog.image}
              alt="Blog Image"
              className="blog-image"
            />
            <div className="blog-meta">
            <div className="blog-name">
                <img src={User} alt="User Icon" className="user-icon" />
                <p className="username">{blog.username}</p>  
              </div>
              <div className="blog-date">
                <img src={CalendarIcon} alt="Calendar Icon" className="calendar-icon" />
                <p>{blog.date}</p>
              </div>
            </div>
            <div className="blog-article-name">
              <p>{blog.title}</p>
            </div>
            <div className="view-details">
              <span>View Details</span>
              <img src={ArrowIcon} alt="Arrow" className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>

      <div className="read-more-container">
        <button className="read-more-btn">
          Read more
          <img src={RightArrow} alt="Arrow" className="arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default Blog;
