export const Input = ({setState, id, title, value, erro, children, type, options}) => {

    return (
        <div className='row mb-3'>
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                           <div className='form-group'>
                            <label htmlFor={id} className='control-label'>{title}:</label>
                              { type == 'select' ?
                                 <select 
                                    className={erro ? 'form-control is-invalid' : "form-control"}
                                    id={id}
                                    name={id}
                                    value={value} 
                                    onChange={(e)=> setState(e.target.value)}>
                                    {
                                    options && options.length > 0 &&
                                        options.map((option, index) => {
                                            return (
                                            <option key={index} value={option.id}>{option.nome}</option>
                                            )
                                        })
                                    }
                                 </select>
                                    :
                                <>
                                <input 
                                      onChange={(e)=> setState(e.target.value)}
                                      className={erro ? 'form-control is-invalid' : "form-control"}
                                      id={id}
                                      name={id}
                                      value={value} 
                                />
                                      
                                </>
                                }
                                {erro ? children : null}
                           </div>


                           
                        </div> 
         </div>  
    )
}