import React,{useState,useEffect} from "react";
import logo from "../images/logo.jpeg"
import LoginForm from "./login/login";
function WithSplashScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {loading?(
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>YOUR SMART KITCHEN COMPANION</p>
                </div>):
                <LoginForm/>
            
            }
        </div>
    );
}

export default  WithSplashScreen
