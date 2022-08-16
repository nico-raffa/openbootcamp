const ComponentB = ( {contacto} ) =>{
    contacto.conectado = false

    return (
        <>
       
        
        {contacto.conectado ? (
            <>
        <h1>Contacto En Línea</h1> 
        </>
    ) : (
        <>
            <h1>Contacto No Disponible</h1>
        </>
    )}
        </>
        
    )
    
}
export default ComponentB