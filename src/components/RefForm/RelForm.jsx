import { useEffect, useRef } from "react";


const RelForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])
    
 
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit }>
            <input ref={nameRef} type="text" name="name" />
            <br/>
            <input ref={emailRef} type="email" name="email"></input>
            <br/>
           <input type="submit" value="Submit"/>
          </form>
        </div>
    );
};

export default RelForm;