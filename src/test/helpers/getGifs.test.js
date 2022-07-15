import { getGifs } from "../../helpers/getGifs";

describe('Test en getGifs()', () => {
    
    test('Debe retornar un arreglo de gifs', async () => {
        
        const gifs = await getGifs('Dragon Ball');
        // Vemos con un clg la respuesta
        // console.log(gifs)

        // En este caso nosotros no podemos testear que la respuesta sea siempre la misma, porque no tenemos control de la API, hoy nos devuelve esos gifs, pero capaz que despues nos envia otros. 
        
        // Lo que si podemos evaluar, por ejemplo es que el length de ese arreglo sea mayor que 0.

        expect( gifs.length).toBeGreaterThan( 0 );

        // Pero lo que tenemos que controlar en realidad es que devuelva este arreglo, pero que los elementos tengan el formato especificado.

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })

    });

});