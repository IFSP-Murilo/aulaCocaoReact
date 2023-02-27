import http from '../config/Banco';


export const listarProfessores = async () => {
    return(
        http({
            method:'get',
            url:'/professor/lista',
        }).then((response)=>{
             return response.data;
        })
    )
}