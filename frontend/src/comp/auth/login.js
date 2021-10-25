import React, {useState} from 'react';
import { RecipeWrapper } from '../addrecipe/style';
import Header from '../header/header';
import { LoginMsg, LoginCont, Input, Button } from './style';

const Login = (props) => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Header/>
            <RecipeWrapper>
                <LoginCont>
                    <LoginMsg>
                        Login
                        <Input placeholder="Email"></Input>
                        <Input placeholder="Password"></Input>
                        <Button type='submit' /* onClick={} */>Register</Button>
                    </LoginMsg>
                </LoginCont>
            </RecipeWrapper>
        </>
    )
}

export default Login;