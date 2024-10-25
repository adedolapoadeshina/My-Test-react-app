import { useNavigate } from "react-router-dom";





const LogIn=({input,user,error,setError,handleChange})=>{


const navigate=useNavigate();

    const RedirectLogin=(event)=>{
        event.preventDefault();
        navigate("/admin")
        // alert(input.password)
        if (input.username==="admin" && user.admin===input.password){
            navigate("/admin")
        }else if(input.username==="editor" && user.editor===input.password){
            navigate("/editor")
        }else if(input.username==="viewer" && user.viewer===input.password){
            navigate("/viewer")
        }else{
            setError("password/username mismatch! kindly input the correct values")
            navigate('/admin')
        };
    }


    if(error!==""){

        return(
            <div className="row">
                <div className="offset-3 col-md-6">
                    <div className="alert alert-danger">
                        <p>{error}</p>
                    </div>
                    <div>
                    <h1 className="text-center text-primary">LOGIN PAGE</h1>
                    <p className="text-center">Kindly input your login details below:-</p>
                    </div> 
                </div>
                <div className="offset-3 col-md-6">
                    <form onSubmit={RedirectLogin}>
                        <div>
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input 
                        type="text"
                        name="username" 
                        className="form-control" 
                        placeholder="input your username"
                        value={input.username}
                        onChange={handleChange}/>
                        </div>
                        <div>
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="input password"
                        value={input.password}
                        onChange={handleChange}
                        />
                        
                        </div>
                        <div className="m-3">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
    
            </div>
        )

    }






    return(
        <div className="row">
            <div className="offset-3 col-md-6">
                <div>
                <h1 className="text-center text-primary">LOGIN PAGE</h1>
                <p className="text-center">Kindly input your login details below:-</p>
                </div> 
            </div>
            <div className="offset-3 col-md-6">
                    <form onSubmit={RedirectLogin}>
                        <div>
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input 
                        type="text"
                        name="username" 
                        className="form-control" 
                        placeholder="input your username"
                        value={input.username}
                        onChange={handleChange}/>
                        </div>
                        <div>
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="input password"
                        value={input.password}
                        onChange={handleChange}
                        />
                        
                        </div>
                        <div className="m-3">
                            <button type="submit" className="btn btn-primary col-4 offset-4">Submit</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default LogIn