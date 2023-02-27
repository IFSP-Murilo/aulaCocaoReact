export const Input = ({setState, id, title, value, erro}) => {
    return (
        <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                               <label htmlFor={id} className='control-label'>{title}:</label>
                               <input 
                                      onChange={(e)=> setState(e.target.value)}
                                      className={erro ? 'form-control is-invalid' : "form-control"}
                                      id={id}
                                      name={id}
                                      value={value} /> 
                           </div>
                        </div> 
         </div>  
    )
}