import { useState } from "react";


const StateFulFrom = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
      e.preventDefault();
      if(password.length < 6){
        setError('password must be 6 character or longer')
      }
      else{
        setError(' ');
        console.log(email,password,);
      }
      

    }

    const handleEmailChange = e =>{

      console.log(e.target.value);
      setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit }>
            <input 
                 onChange={handleEmailChange}
             type="email" name="email" />
            <br/>
            <input
                 onChange={handlePasswordChange}
            type="password" name="password"></input>
            <br/>
           <input type="submit" value="Submit"/>
        {
            error && <p>{error}</p>
        }
          </form>
        </div>
    );
};

export default StateFulFrom;