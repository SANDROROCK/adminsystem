import React,{useState} from 'react';
import './styles.css';
import {Form,Button} from 'react-bootstrap';
import api from '../../services/api';


export default function Login({history}) {

    const [email,setEmail]= useState('');
    const [senha,setSenha]= useState('');

    

    async function login(){

        const response = await api.post('/usuarios/auth',{
            email,
            senha
        });

        console.log(response.data.usuarioEncontrado);
        console.log(response.data.token);

        localStorage.setItem('token',response.data.token);
    
        history.push('/home');
    }

    function cadastro(){
        history.push('/cadastro');
    }

    return (
        <div className="container">
            <div className="boxLogin">
           <Form>
               <Form.Label >Email</Form.Label>

               <Form.Control 
               type="email" 
               placeholder="email@email.com"
               value={email}
               onChange = {event => setEmail(event.target.value)}
               
               
               ></Form.Control>
               <Form.Label >Senha</Form.Label>

               <Form.Control 
               type="password" 
               placeholder="Digite sua senha"
               value={senha}
               onChange={ event => setSenha(event.target.value)}
               
               ></Form.Control>
               
               <Button onClick={cadastro} variant="primary">Cadastro</Button>
               
              
               <Button  onClick={login} variant="success">Entrar</Button>

           </Form>
           </div>
        </div>
    )
}
