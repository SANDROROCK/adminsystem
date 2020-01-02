import React ,{useState,useEffect}from 'react';
import Cabecalho from '../../components/cabecalho';
import './styles.css';
import api from '../../services/api';
import { Form, Button } from 'react-bootstrap';

export default function ClientesCad({history}) {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [uf, setUF] = useState('');
    const [dataNasc, setNasc] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefone, setTelefone] = useState('');
    

    


    async function salvar() {
        
        let response = await api.post('/Clientes/cad', {
            nome,
            email,
           
        });
        if(response){
            history.push('/clientes')
        }
        console.log(response);
    }


    function voltar() {
        history.push('/clientes');
    }


    return (
       <>
     

      </>
       
     
    );
    }