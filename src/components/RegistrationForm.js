import React,{useState} from 'react';
import './../componentCss/registerStyle.css';
import { Link } from 'react-router-dom';

function Register() {
    
    const [userData, setUserData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        address: '',
        mobileNum: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:8080/api/v1/user/saveUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), 
          });
    
          if (!response.ok) {
            throw new Error('Failed to send data to the backend');
          }
          else{
            alert('saved succesfull');
          }
    
          const responseData = await response.json();
          console.log('Response from backend:', responseData);
        } catch (error) {
          console.error('Error sending data to backend:', error);
        }
      };
  return (
    <div className="wrapper">
      {/* <form action="#" onSubmit={(e) => e.preventDefault()}> */}
      <form action="#" onSubmit={handleSubmit} >
      
        <h1>Sign Up</h1>
        <div className="input-box">
          <label htmlFor="firstName">UserName</label>
          <input type="text" id="firstName" placeholder="UserName" name="id" required value={userData.id}
                onChange={handleChange}/>
        </div>

        <div className="input-box">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="First Name" name='firstName' required value={userData.firstName}
                onChange={handleChange}/>
        </div>

        <div className="input-box">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Last Name" name='lastName' required value={userData.lastName}
                onChange={handleChange} />
        </div>

        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" name='email' required value={userData.email}
                onChange={handleChange}/>
        </div>

        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" name='password' required value={userData.password}
                onChange={handleChange}/>
        </div>

        <div className="input-box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
        </div>

        <div className="input-box">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="address" name='address' required value={userData.address}
                onChange={handleChange}/>
        </div>

        <div className="input-box">
          <label htmlFor="mobileNum">MobileNum</label>
          <input type="text" id="mobileNum" placeholder="mobileNum" name='mobileNum' required value={userData.mobileNum}
                onChange={handleChange}/>
        </div>

        <button type="submit">Sign Up</button>

        <div className="login-link">
          <p>Already Registered? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
