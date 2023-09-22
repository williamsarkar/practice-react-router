

const SimpleFrom = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        // console.log('submit this from');
    }

    return (
        <div>
          <form onSubmit={handleSubmit }>
            <input type="text" name="name" />
            <br/>
            <input type="email" name="email"></input>
            <br/>
           <input type="submit" value="Submit"/>
          </form>
        </div>
    );
};

export default SimpleFrom;