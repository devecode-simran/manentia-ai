import React, {useState} from "react";
import "../Styles/Contact.css";
import { FiArrowLeft, FiHome, FiMail } from "react-icons/fi";
import Samsung from '../Images/Samsung.png';
import AWS from '../Images/AWS.png';
import Accenture from '../Images/Accenture.png';
import Bolt from '../Images/Bolt.png';
import Visma from '../Images/Visma.png';
import AT from '../Images/AT&T.png';
import Mail from '../Images/Mail.png'
import { Link } from "react-router-dom";

const Contact = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const [formData, setFormData] = useState({
    firstName:'',
    companyName:'',
    workEmail:'',
    phoneNumber:'',
    companySize:'',
    teamSize:'',
    projectBudget:'',
    message:''
  });
  const [errors, setErrors] = useState({});
  const validateForm = () =>{
    let errors = {};
    if (formData.firstName.trim() === '') errors.firstName = 'First name is required';
    if (formData.companyName === '') errors.companyName = 'Company name is required';
    if (formData.workEmail === '') errors.workEmail = 'Work email is required';
    if (!emailRegex.test(formData.workEmail)) errors.workEmail = 'Please enter a valid email id';
    if (formData.phoneNumber === '') errors.phoneNumber = 'Phone number is required';
    if (!phoneRegex.test(formData.phoneNumber)) errors.phoneNumber = 'Please enter a valid phone number';
    if (formData.companySize === '') errors.companySize = 'Company size selection is required';
    if (formData.teamSize === '') errors.teamSize = 'Team size selection is required';
    if (formData.projectBudget === '') errors.projectBudget = 'Project budget selection is required';
    if (formData.message === '') errors.message = 'Message is required';
    setErrors(errors);
  }
  return (
    <div className="page-container">
      {/* Left Side - Contact Details */}
      <div className="left-content">
        {/* Back Arrow */}
        <div className="back-arrow">
          <FiArrowLeft size={24} />
          <Link to="/" style={{ textDecoration: "none",color:"black" }}>Home</Link>
        </div>
        <h3>Contact</h3>
        {/* Navigation */}
        <div className="mail-icon">
        <img
          src={Mail}
          alt="Mail"
          className="mail-icon-img"
          sizes="24px"
        />
        <p>Contact Sales</p>
        </div>


        {/* Have Questions Section */}
        <div className="questions-section">
          <p className="questions-text">Have questions about integrating our APIs? Fill out the form and a senior web
          expert will be in touch shortly.</p>
        </div>

        {/* Main Content */}
        <h2>Talk to Our Experts</h2>
        <p className="join-companies">Join 6,000+ forward-thinking companies.</p>


        {/* Logos */}
        <div className="logos">
          <img src={Samsung} alt="Logo 1" />
          <img src= {Visma}alt="Logo 2" />
          <img src={Bolt} alt="Logo 3" />
          <img src={Accenture} alt="Logo 4" />
          <img src={AWS} alt="Logo 5" />
          <img src= {AT}alt="Logo 6" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="right-form">
        <h2>Fill the form below</h2>

        {/* First Name & Company Name */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value={formData.firstName} onChange={(e)=>{
              setFormData({...formData, firstName:e.target.value})
            }}/>
            {errors.firstName && <p style={{ color: "red", fontSize: "12px" }}>{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" value={formData.companyName} onChange={(e)=>{
              setFormData({...formData, companyName:e.target.value})
            }}/>
            {errors.companyName && <p style={{ color: "red", fontSize: "12px" }}>{errors.companyName}</p>}
          </div>
        </div>

        {/* Work Email & Phone Number */}
        <div className="form-row">
          <div className="form-group">
            <label>Work Email</label>
            <input type="email" value={formData.workEmail} onChange={(e)=>{
              setFormData({...formData, workEmail:e.target.value})
            }}/>
            {errors.workEmail && <p style={{ color: "red", fontSize: "12px" }}>{errors.workEmail}</p>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" value={formData.phoneNumber} onChange={(e)=>{
              setFormData({...formData, phoneNumber:e.target.value})
            }}/>
            {errors.phoneNumber && <p style={{ color: "red", fontSize: "12px" }}>{errors.phoneNumber}</p>}
          </div>
        </div>

        {/* Company Size & Team Dropdown */}
        <div className="form-row">
          <div className="form-group">
            <label>Company Size</label>
            <select value={formData.companySize} onChange={(e)=>setFormData({...formData, companySize:e.target.value})}>
              <option value="">Select...</option>
              <option value="1-10">1-10</option>
              <option value="11-100">11-100</option>
              <option value="101-500">101-500</option>
              <option value="500+">500+</option>
            </select>
            {errors.companySize && <p style={{ color: "red", fontSize: "12px" }}>{errors.companySize}</p>}
          </div>
          <div className="form-group">
            <label>Team Size</label>
            <select value={formData.teamSize} onChange={(e)=>setFormData({...formData, teamSize:e.target.value})}>
              <option value="">Select...</option>
              <option value="1-5">1-5</option>
              <option value="6-20">6-20</option>
              <option value="21-50">21-50</option>
              <option value="50+">50+</option>
            </select>
            {errors.teamSize && <p style={{ color: "red", fontSize: "12px" }}>{errors.teamSize}</p>}
          </div>
        </div>

        {/* Project Budget Dropdown */}
        <div className="form-group full-width">
          <label>Project Budget</label>
          <select value={formData.projectBudget} onChange={(e)=>setFormData({...formData, projectBudget:e.target.value})}>
            <option value="">Select...</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,001 - $20,000">$5,001 - $20,000</option>
            <option value="$20,001 - $50,000">$20,001 - $50,000</option>
            <option value="$50,000+">$50,000+</option>
          </select>
          {errors.projectBudget && <p style={{ color: "red", fontSize: "12px" }}>{errors.projectBudget}</p>}
        </div>

        {/* Message Textarea */}
        <div className="form-group full-width">
          <label>Message</label>
          <textarea 
            value={formData.message} 
            onChange={(e)=>setFormData({...formData, message:e.target.value})} 
            placeholder="Type here..."
            rows={5} // Adjust rows as needed
            cols={50} // Adjust columns as needed
          />
          {errors.message && <p style={{ color: "red", fontSize: "12px" }}>{errors.message}</p>}
          {/* <textarea></textarea> */}
        </div>

        {/* Submit Button */}
        <button className="lets-talk-btn" onClick={validateForm}>Let’s Talk</button>
        <p>By submitting this, you agree to the Privacy Policy and Cookie Policy.</p>
      </div>
    </div>
  );
};

export default Contact;