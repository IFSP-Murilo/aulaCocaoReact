export const ErrorMensagem = ({mensagem}) => {
    return (
        <>
            {
                mensagem &&
                <div className="invalid-feedback">
                    {
                        <p style={{
                            margin: '0'
                        }}>
                            <span>{mensagem}</span>
                        </p>
                    }
                </div>
            }
        </>
    )
}