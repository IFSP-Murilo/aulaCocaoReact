
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

const Incluir = () => {
   const [erro, setErro] = useState(ERROR_PROF);

   const [idProfessor, setIdProfessor] = useState('');
   const [codigoProfessor, setCodProfessor] = useState('');
   const [nomeProfessor, setNomeProfessor] = useState('');
   const [idCidade, setIdCidade] = useState('');
   const [cidades, setCidades] = useState([])


   useEffect(() => {
      async function getCidades() {
         try {
         
            const data = [
               {
                  nome: 'Araçatuba',
                  id: 1
               },
               {
                  nome: 'Birigui',
                  id: 2
               },
               {
                  nome: 'Catanduva',
                  id: 3
               }
            ]
            setCidades(data)
         }catch{}
      }
      getCidades()
   }, [])

   const handleEnviar = async (e) => {
    e.preventDefault()
      // const data ={
      //    cidade: {
      //       idCidade
      //    },
      //    idProfessor,
      //    nomeProfessor,
      //    codigoProfessor
      // }

         if(idProfessor.length === 0) {
            erro.idProfessor = 'O ID do professor deve ser informado!'
         }

         if(codigoProfessor.length === 0) {
            erro.codProfessor = 'O Codigo do professor deve ser informado!'
         }
         if(nomeProfessor.length === 0) {
            erro.nomeProfessor = 'O Nome do professor deve ser informado!'
         }
         if (idCidade.length === 0) {
            erro.cidade = 'A cidade do professor deve ser informada!'
         }
   }

   return (
    <Fragment>
       <div className="app-content">
         <ShowMensagem 
            titulo="Cadastro de Professores"
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
                           erro={erro.idProfessor}
                           id={'idProfessor'}
                           setState={setIdProfessor}
                           value={idProfessor}
                           title={'Id'}
                     >
                        <ErrorMensagem mensagem={erro.idProfessor} />
                     </Input>

                     <Input 
                           erro={erro.codProfessor}
                           id={'codProfessor'}
                           setState={setCodProfessor}
                           value={codigoProfessor}
                           title={'Código'}
                     >
                        <ErrorMensagem mensagem={erro.codProfessor} />
                     </Input>

                     <Input 
                           erro={erro.nomeProfessor}
                           id={'nomeProfessor'}
                           setState={setNomeProfessor}
                           value={nomeProfessor}
                           title={'Nome'}
                     >
                        <ErrorMensagem mensagem={erro.nomeProfessor} />
                     </Input>

                     <Input 
                           erro={erro.cidade}
                           id={'idCidade'}
                           setState={setIdCidade}
                           value={idCidade}
                           title={'Cidade'}
                           type='select'
                           options={cidades}
                     >
                        <ErrorMensagem mensagem={erro.cidade} />
                     </Input>

                     <div style={{display: 'flex', gap: '1rem'}}>
                        <button type='submit' className='btn btn-primary btn-lg'>Salvar</button>
                        <Link to='/professor/lista' type='button' className='btn btn-secondary btn-lg'>Cancelar</Link>
                     </div>
                  </form>
               </div>
            </div>
         </div> 
       </div>
    </Fragment>
  )  
}

export default Incluir

