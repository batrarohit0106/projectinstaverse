import React from 'react';
import {Layout} from "antd";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthForm from './components/AuthForm/AuthForm';
import styles from './styles';
import AppBar from './components/AppBar/AppBar';
const {Footer} =Layout;

const App=()=>{
    return(
        <BrowserRouter>
        <Layout style={styles.layout}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/authform" element={<AuthForm/>}/>
                </Routes>
                <Footer style={styles.footer}>2023 Instaverse</Footer>
           
        </Layout>
        </BrowserRouter>
    )
}
export default App;