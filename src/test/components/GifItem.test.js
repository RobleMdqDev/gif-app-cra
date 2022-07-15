import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Test en <GifItem />', () => {

    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';
    
    test('Debe coincidir con el snapshot.', () => {
        // Un snapshot es una fotografia del componente en un momento determinado.
        
        // Con render de Testing Library, podemos renderizar nuestro componente
        const {container} = render(<GifItem title={title} url={url}/>);
        // console.log(render(<GifItem title={title} url={url}/>))
        expect( container ).toMatchSnapshot();

        // Esta prueba que estamos ejecutando, no nos asegura que la imagen quede correctamente colocada, o el titulo este correctamente colocado. Lo que asegura, es que al momento de volver a ejecutar las pruebas, todas las piezas del HTML esten sintacticamente igual, tal cual como esta en la foto que tomamos antes. (Mirar carpeta con snapshot)Test en 

    });

    test('Debe encontrar un texto', () => {

        // getByText encontrara una coincidencia de texto en nuestro componente.
        render(<GifItem title={title} url={url}/>);
        
        expect( screen.getByText(title) ).toBeTruthy();

    });

    test('Debe encontrar por test-id', () => {
        
        // con getByTestId podemos seleccionar un elemento de nuestro componente.
        render(<GifItem title={title} url={url}/>);
        // Antes colocar un data-testid = 'test-title' en el elemento p

        // expect( getByTestId('test-title').innerHTML ).toBe(title);

        expect( screen.getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('Debe mostrar URL y ALT', () => {

        // Con screen podemos acceder a la ultima version de nuestro componente reenderizado, de esta forma vamos a poder hacer comprobaciones de nuestro componente, antes y despues de disparar un evento.

        render(<GifItem title={title} url={url} /> );

        // Si queremos ver el componente para hacer las ascerciones 
        // screen.debug();
        
        // expect( screen.getByRole('img').src).toContain(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        
        // Lo podemos ver en un clg 
        const {src, alt} = screen.getByRole('img');
        expect(src).toContain(url);
        expect(alt).toBe('gif');        
    });

});