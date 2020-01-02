import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Cabecalho from '../../components/cabecalho';
import './styles.css';
import api from '../../services/api';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


export default function Clientes({history}) {

  const [rows, setRows] = useState([]);

  function novoCli() {
    
        history.push('/novoCliente')
   
}
  useEffect(() => {
    async function loadClientes() {
      const userid = localStorage.getItem('token');
      const response = await api.get('/clientes', {
        headers: { userid }
      });
      setRows(response.data)
    }
    loadClientes();

  }, []);

  return (
    <>
      <Cabecalho />
      <div className="boxItens">
        <Fab color="primary" aria-label="add">
          <AddIcon onClick={novoCli}/>
        </Fab>
      </div>

      <Paper >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow size="small">
              <TableCell size="small">Nome</TableCell>
              <TableCell size="medium" align="right">CPF</TableCell>
              <TableCell size="medium" align="right">Endereço</TableCell>
              <TableCell size="medium" align="right">UF</TableCell>
              <TableCell size="medium" align="right">Telefone</TableCell>
            </TableRow>

          </TableHead>

          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}