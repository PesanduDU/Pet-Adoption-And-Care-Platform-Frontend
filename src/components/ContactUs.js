import React, { useState } from 'react'
import './../componentCss/ContactUs.css'
import validateForm from './formValidation'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';



function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear errors when user starts typing
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form
        const formErrors = validateForm(formData);

        if (Object.keys(formErrors).length === 0) {
            // If there are no errors, proceed with form submission
            console.log('Form submitted:', formData);
            // Clear the form fields after submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                message: ''
            });
        } else {
            // If there are errors, update the state to display them to the user
            setErrors(formErrors);
        }
    };
  return (
    <div className="contactus">
            <div className="contactTitle">
                <h2>Get in Touch</h2>
            </div>
            <div className="contactBox">
                {/* form */}
                <div className="contactForm">
                    <h3>Send a message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="formContactBox">
                            <div className="row50">
                                <div className="inputContactBox">
                                    <span>First Name</span>
                                    <input type="text" placeholder="John" value={formData.firstName} onChange={handleChange} name="firstName" />
                                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                                </div>
                                <div className="inputContactBox">
                                    <span>Last Name</span>
                                    <input type="text" placeholder="Doe" value={formData.lastName} onChange={handleChange} name="lastName" />
                                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div className="row50">
                                <div className="inputContactBox">
                                    <span>Email</span>
                                    <input type="text" placeholder="johndeo@gmail.com" value={formData.email} onChange={handleChange} name="email" /> 
                                    {errors.email && <span className="error">{errors.email}</span>}

                                </div>
                                <div className="inputContactBox">
                                    <span>Mobile</span>
                                    <input type="text" placeholder="+94 123 456 789" value={formData.mobile} onChange={handleChange} name="mobile" />
                                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputContactBox">
                                    <span>Message</span>
                                    <textarea placeholder="Write your message here...."></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputContactBox">
                                    
                                    <input type="submit" value="send" id='btn-send'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="contactInfo">
                    <h3>Contact Info</h3>
                    <div className="infocontactBox">
                        <div>
                            <span><FaHome /></span>
                            <p>Kandy Road, Dalugama, Kelaniya <br />Sri Lanka</p>
                        </div>
                        <div>
                            <span><FaEnvelope /></span>
                            <a href="mailto:petcare@gmail.com">petcare@gmail.com</a>
                        </div>
                        <div>
                            <span><FaPhone /></span>
                            <a href="tel:+94123456789">+94723456789</a>
                        </div>
                    </div>
                </div>

                <div className="contactMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2871936739475!2d79.91555340000001!3d6.975403200000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c8dde7e47%3A0x341e7e820c46d3ed!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1713548862586!5m2!1sen!2slk" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
  )
}

export default ContactUs
