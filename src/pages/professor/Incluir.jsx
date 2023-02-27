
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import ShowMensagem from '../../components/mensagem/ShowMensagem';
import { ERROR_PROF, PROFESSOR } from './professor';
import { useState } from 'react';
import { Input } from '../../components/Input';

const Incluir = () => {
   const [erro, setErro] = useState(ERROR_PROF);

   const [idProfessor, setIdProfessor] = useState('');
   const [codigoProfessor, setCodProfessor] = useState('');
   const [nomeProfessor, setNomeProfessor] = useState('');
   const [idCidade, setIdCidade] = useState('');

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

                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='idProfessor' className='control-label'>Id:</label>
                               <input 
                                      onChange={(e)=> setIdProfessor(e.target.value)}
                                      className={erro.idProfessor ? 'form-control is-invalid' : "form-control"}
                                      id='idProfessor'
                                      name='idProfessor'
                                      value={idProfessor} /> 
                           </div>
                        </div> 
                  </div> 
                  {/* <Input 
                        erro={erro.idProfessor}
                        id={'idProfessor'}
                        setState={setIdProfessor}
                        value={idProfessor}
                        title={'Id'}
                  /> */}
                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='codProfessor' className='control-label'>Código:</label>
                               <input 
                                onChange={(e)=>setCodProfessor(e.target.value)}
                                className={erro.codProfessor ? 'form-control is-invalid' : "form-control"}
                                      id='codProfessor'
                                      name='codProfessor'
                                      value={codigoProfessor} /> 
                           </div>
                        </div> 
                  </div> 
                  <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor='nomeProfessor' className='control-label'>Nome:</label>
                               <input  
                                      className={erro.nomeProfessor ? 'form-control is-invalid' : "form-control"}
                                      onChange={ (e) => setNomeProfessor(e.target.value)}
                                      id='nomeProfessor'
                                      name='nomeProfessor'
                                      value={nomeProfessor} /> 
                           </div>
                        </div> 
                  </div> 

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

