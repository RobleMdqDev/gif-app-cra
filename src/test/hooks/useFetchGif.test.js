import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../hooks/useFetchGif";


describe('Test en hook useFetchGif', () => {
    
    test('Debe regresar el estado inicial', () => {
        
        // Primero importamos nuestro hook, pero como lo ejecutamos?
        // El primer problema es que no se puede llamar un hook fuera de un componente de react

        // esto no se puede hacer...
        // const {imagenes, loading} = useFetchGif();
        // console.log(imagenes, loading)
        
        const { result } = renderHook( ()=> useFetchGif('One punch') );
        // console.log(result)
        const { imagenes, loading } = result.current;
        
        expect( imagenes.length ).toBe(0);
        expect( loading ).toBeTruthy();
    });

    // La segunda prueba es mas complicada, porque automaticamente cuando se dispara el useEffect se actualiza el estado. El loading pasa a ser false y se carga el arreglo con gifs.

    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {

        const { result } = renderHook( ()=> useFetchGif('One punch') );
        // El tema es que ahora, nosotros tenemos que esperar que se cargen las imagenes, para hacer esto usamos la funcionalidad de testing library WAITFOR.
        
        // wait for espera que cambie algo de nuestro hook, es una promesa, entonces usamos async await.
        await waitFor(
            () => expect( result.current.imagenes.length ).toBeGreaterThan(0)
        );
        // Una vez que termina el waitFor puedo realizar la destructuracion del resultado.

        const {imagenes, loading } = result.current;

        expect(imagenes.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();

    });


});