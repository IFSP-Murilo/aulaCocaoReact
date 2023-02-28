
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import ShowMensagem from '../../components/mensagem/ShowMensagem';
import { ERROR_PROF, PROFESSOR } from './professor';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

const Incluir = () => {
   const [erro, setErro] = useState(ERROR_PROF);

   const [idProfessor, setIdProfessor] = useState('');
   const [codigoProfessor, setCodProfessor] = useState('');
   const [nomeProfessor, setNomeProfessor] = useState('');
   const [idCidade, setIdCidade] = useState('');


   useEffect(() => {
      async function getCidades() {
         try{
            const response = await api.get('/')
         }catch{}
      }
      getCidades()
   }, [])

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
               
               <form className='mt-3'>

                  
                   <Input 
                        erro={erro.idProfessor}
                        id={'idProfessor'}
                        setState={setIdProfessor}
                        value={idProfessor}
                        title={'Id'}
                  />
                  <Input 
                        erro={erro.codProfessor}
                        id={'codProfessor'}
                        setState={setCodProfessor}
                        value={codigoProfessor}
                        title={'Código'}
                  />

                  <Input 
                        erro={erro.nomeProfessor}
                        id={'nomeProfessor'}
                        setState={setNomeProfessor}
                        value={nomeProfessor}
                        title={'Nome'}
                  />

                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='idCidade' className='control-label'>Cidade:</label>
                               <select className="form-control"
                                      id='idCidade'
                                      name='idCidade'
                                      onChange={(e)=>setIdCidade(e.target.value)}
                                      value={idCidade} > 
                                      <option>Birigui</option>
                                      <option>Araçatuba</option>
                                      <option>Coroados</option>
                                      <option>Bilac</option>  
                               </select>          
                           </div>
                        </div> 
                  </div> 

                  <div>
                       <button 
                          className='btn btn-primary btn-lg'
                       >Salvar</button>
                       <Link 
                          to='/professor/lista'
                          type='button'
                          className='btn btn-secondary btn-lg'
                       >Cancelar</Link>
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

