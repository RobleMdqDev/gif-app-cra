import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGif } from '../../hooks/useFetchGif';

jest.mock("../../hooks/useFetchGif");

describe('Test en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('Debe mostrar inicialmente el loading.', () => {

        useFetchGif.mockReturnValue({
            imagenes: [],
            loading: true,
        })
        
        // Ponemos PropTypes en GifGrid
        render( <GifGrid category={category} /> );
        // Chequeamos con un screen.debug();
        // screen.debug();

        expect( screen.getByText( 'Cargando...' ).innerHTML ).toBe( 'Cargando...' );
        expect( screen.getByText( category ).innerHTML ).toBe( category );
       
        
    });

    // En este caso vamos a ver como hacer para simular el estado de un hook.

    // Nosotros tenemos nuestro customHook que nos va a devolver el estado de loading y las imagenes, entonces nosotros vamos a poder controlar eso.
    
    test('Debe mostar items, cuando se cargan las imagenes en useFetchGifs', () => { 
        
        // Antes de renderizar nuestro componente, tenemos que hacer el mock del hook. Importamos el hook useFetchGifs y debajo jest.mock()
        useFetchGif.mockReturnValue({
            imagenes: [
                {id:'ABC123', title: 'Saitama', url: 'https://onepunch/saitama.jpg'},
                {id:'ABC321', title: 'Garou', url: 'https://onepunch/garou.jpg'}
            ],
            loading: false,
        });

        render( <GifGrid category={category}/> );
        // screen.debug();

        expect( screen.getAllByRole('img').length ).toBe(2);

    })

});