import React, {useState} from 'react';
import Header from '../header/header';

const Login = (props) => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Header/>

        </>
    )
}

export default Login;