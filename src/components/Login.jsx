import React,{useState} from 'react';
import './../componentCss/registerStyle1.css';
import { Link } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const[userPassword,setUserPassword]=useState('');

    const handleInputChange = (event) => {
        setUserId(event.target.value);
    };

    const getUser = () => {
        fetch(`http://localhost:8080/api/v1/user/getUserByID/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                return response.json();
            })
            .then(data => {
              console.log(data);
                setUser(data);
                setError(null);
            })
            .catch(error => {
                setUser(null);
                setError(error.message);
            });
            if(userPassword===user.password){
              alert("login succesfull");
            }
            else{
              alert("login fail");
            }
            
    };
  return (
    <div className="wrapper1">
      <form action="#" onSubmit={getUser}>
        <h1>LogIn</h1>

        <div className="input-box1">
          {/* <label htmlFor="email">Email</label> */}
          <label id="email">Email</label>
          <input type="text" id="email" placeholder="Email" required onChange={(e)=>setUserId(e.target.value)}/>
        </div>

        <div className="input-box1">
          <label id="password">Password</label>
          <input type="password" id="password" placeholder="Password" required onChange={(e)=>setUserPassword(e.target.value)}/>
        </div>

        <button className='btnLogIn' type="submit">Log In</button>
        
      </form>
    </div>
  );
}

export default Login;
