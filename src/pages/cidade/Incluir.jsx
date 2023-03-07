
import React, { Fragment, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import ShowMensagem from '../../components/mensagem/ShowMensagem';
import { ERROR_PROF } from './professor';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { ErrorMensagem } from '../../components/mensagem/ErrorMensagem';
import { toast } from 'react-toastify';

const IncluirCidade = () => {
   const [erro, setErro] = useState(ERROR_PROF);

   const [codCidade, setCodCidade] = useState('');
   const [nomeCidade, setNomeCidade] = useState('');
   const [idCidade, setIdCidade] = useState('');

   const notify = () => toast("Wow so easy!");

   const handleEnviar = async (e) => {
    e.preventDefault()
      const data ={
         idCidade,
         nomeCidade,
         codCidade
      }

        try{
         const {data} = await api.post('/cidade/incluir', data)
         if(data.status == 200){
            toast.success('Cidade cadastrada com sucesso!')
            return <Navigate to='/cidade/lista' />
         }
         console.log(response)
        } catch(error) {
         console.log(error)
        }
   }

   return (
    <Fragment>
       <div className="app-content">
         <ShowMensagem 
            titulo="Cadastro de Cidade"
            iconTitulo={<GiIcons.GiTeacher/>}
            iconReturn={FaIcons.FaListAlt}
            url="/professor/lista"
            tituloUrl="Página Principal"
         />
         <button onClick={notify}>Notify!</button>
            <div className="row justify-content-center">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <div className="cadastro">
                  <form className='mt-3' onSubmit={(e) => handleEnviar(e)}>
                     <Input 
                           erro={erro.idCidade}
                           id={'idCidade'}
                           setState={setIdCidade}
                           value={idCidade}
                           title={'Id'}
                     >
                        <ErrorMensagem mensagem={erro.idCidade} />
                     </Input>

                     <Input 
                           erro={erro.codCidade}
                           id={'codCidade'}
                           setState={setCodCidade}
                           value={codCidade}
                           title={'Código'}
                     >
                        <ErrorMensagem mensagem={erro.codCidade} />
                     </Input>

                     <Input 
                           erro={erro.nomeCidade}
                           id={'nomeCidade'}
                           setState={setNomeCidade}
                           value={nomeCidade}
                           title={'Nome'}
                     >
                        <ErrorMensagem mensagem={erro.nomeCidade} />
                     </Input>


                     <div style={{display: 'flex', gap: '1rem'}}>
                        <button type='submit' className='btn btn-primary btn-lg'>Salvar</button>
                        <Link to='/cidade/lista' type='button' className='btn btn-secondary btn-lg'>Cancelar</Link>
                     </div>
                  </form>
               </div>
            </div>
         </div> 
       </div>
    </Fragment>
  )  
}

export default IncluirCidade

