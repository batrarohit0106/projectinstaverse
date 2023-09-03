import React,{useState,useEffect} from 'react';
import {Link,useNavigate,useLocation} from "react-router-dom";
import {Layout,Image,Typography,Button,Avatar} from "antd";
import styles from './styles';
import Logo from "../../images/Instaverse.png";
import { useDispatch } from 'react-redux';
import {LOGOUT} from "../../constants/actionTypes";
import decode from 'jwt-decode';
const {Title}=Typography;
const {Header}=Layout;

export default function AppBar(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(()=>{
        const token=user?.token;
        if(token){
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    },[location]);
    const logout=()=>{
        dispatch({type:LOGOUT});
        navigate("/authform");
        setUser(null);
    }
     return (
    <Header style={styles.header}>
        <Link to="/">
        <div style={styles.header}>
        <Image style={styles.image} width={45} preview={false} src={Logo}/>
        &nbsp;
        <Title style={styles.title}>Instaverse</Title>
        </div>
        </Link>
        {!user ?(
            <Link to="/authform">
                <Button htmlType='button' style={styles.login}>
                    Log In
                </Button>
            </Link>
        ):
        ( 
            <div style={styles.userInfo}>
                <Avatar style={styles.avatar} alt="username" size="large">
                    {user?.result?.username?.charAt(0)?.toUpperCase()}
                </Avatar>
                <Title style={styles.title} level={4}>
                   {user?.result?.username}
                </Title>
                <Button onClick={logout} htmlType='button'>
                    Log Out
                </Button>
            </div>
        )}
    </Header>
  )
}
