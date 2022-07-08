
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  const {imagenes, loading} = useFetchGif(category);
 
  return (
    <>
        <h3>{category}</h3>     
        
        {/* Desplegar Listado */}
        <div className="card-grid">
          {
            loading ? <h2>Cargando...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
        </div>            
    </>
  )
}
