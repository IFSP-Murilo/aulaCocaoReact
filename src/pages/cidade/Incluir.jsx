
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import ShowMensagem from '../../components/mensagem/ShowMensagem';
import { ERROR_PROF, PROFESSOR } from './professor';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { ErrorMensagem } from '../../components/mensagem/ErrorMensagem';

const IncluirCidade = () => {
   const [erro, setErro] = useState(ERROR_PROF);

   const [codCidade, setCodCidade] = useState('');
   const [nomeCidade, setNomeCidade] = useState('');
   const [idCidade, setIdCidade] = useState('');


   // useEffect(() => {
   //    async function getCidades() {
   //       try {

   //          const response = await api.get('/cidade/lista')
   //          console.log(response)
         
   //          const data = [
   //             {
   //                nome: 'Araçatuba',
   //                id: 1
   //             },
   //             {
   //                nome: 'Birigui',
   //                id: 2
   //             },
   //             {
   //                nome: 'Catanduva',
   //                id: 3
   //             }
   //          ]
   //          setCidades(data)
   //       }catch(error){
   //          console.log(error)
   //       }
   //    }
   //    getCidades()
   // }, [])

   const handleEnviar = async (e) => {
    e.preventDefault()
      const data ={
         idCidade,
         nomeCidade,
         codCidade
      }

        try{
         const response = await api.post('/cidade/incluir', data)
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

