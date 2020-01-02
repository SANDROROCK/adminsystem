import React, { useState } from 'react';
import './styles.css';
import * as yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import api from '../../services/api';



export default function Cadastro({ history }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaconf, setSenhaConf] = useState('');

    const addressSchema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required('email inválido'),
        nome: yup
            .string()
            .required('informe o nome'),
    });



    async function salvar() {
        setVal();
        let response = await api.post('/usuarios/cad', {
            nome,
            email,
            senha
        });
        if(response){
            history.push('/login')
        }
        console.log(response);
    }

    //funão de validação
    function setVal() {
        const addressFormData = {
            email: email,
            nome: nome,
        }
        addressSchema
            .isValid(addressFormData)
            .then(valid => {

                if (valid) {

                } else
                
                alert('Informações inválidas');
                    
            });

        if (senha !== senhaconf) {

            alert('Senha não confere');
            
        }
    }
    function enviar() {

    }

    function voltar() {
        history.push('/login');
    }


    return (

        <div className="boxLogin">
            <Form> <Form.Label >Nome</Form.Label>

                <Form.Control
                    type="text"
                    placeholder="Nome Completo"
                    value={nome}
                    onChange={event => setNome(event.target.value)}


                ></Form.Control>

                <Form.Label >Email</Form.Label>

                <Form.Control
                    type="email"
                    placeholder="email@email.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}

                ></Form.Control>

                <Form.Label >Senha</Form.Label>

                <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={event => setSenha(event.target.value)}

                ></Form.Control>

                <Form.Label >Confirmar Senha</Form.Label>

                <Form.Control
                    type="password"
                    placeholder="Confirme sua senha"
                    value={senhaconf}
                    onChange={event => setSenhaConf(event.target.value)}
                    onBlur={setVal}

                ></Form.Control>



                <Button onClick={voltar} variant="danger">Voltar</Button>
                <Button onClick={salvar} variant="success">Enviar</Button>

            </Form>

        </div>
    )
}
