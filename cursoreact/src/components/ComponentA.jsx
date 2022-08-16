import ComponentB from "./ComponentB"
const ComponentA = () =>{
    const nico = {
        nombre: "Nicolas",
        apellido: "Raffagnini",
        email:"aksdj@askdj.com",
        conectado: true
    }
    return (
        <>
        <h1>{nico.nombre}</h1>
        <h1>{nico.apellido}</h1>
        <h1>{nico.email}</h1>
        <ComponentB contacto={nico}/>        
        </>
    )
}
export default ComponentA