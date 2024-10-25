import { useState} from "react"
import { BrowserRouter,Route,Routes,redirect,useNavigate} from "react-router-dom"
import Header from "./Test_App_Component/Header"
import LogIn from "./Test_App_Component/LogIn"
import AdminDashboard from "./Test_App_Component/AdminDashboard"
import EditorDashboard from "./Test_App_Component/EditorDashboard"
import ViewerDashboard from "./Test_App_Component/ViewerDashboard"
import NoPage from "./Test_App_Component/NoPage"



const Test=()=>{

    const user={admin:'admin123',editor:'editor123',viewer:'viewer123'};
    
    const[input,setInput]=useState({});
    const[error,setError]=useState("");

    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setInput(values=>({...values,[name]:value}))
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="*" element={<LogIn input={input} user={user} setError={setError} handleChange={handleChange} error={error}/>}/>
                <Route path="admin" element={<AdminDashboard/>} />
                <Route path="editor" element={<EditorDashboard/>} />
                <Route path="viewer" element={<ViewerDashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Test