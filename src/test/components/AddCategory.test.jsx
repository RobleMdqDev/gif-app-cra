/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test en <AddCategory />', () => {

    test('Debe cambiar el valor del input', () => {
        // Antes que nada establecemos las PropTypes en el componente.

        // hacemos render y nos fijamos si funcionan las PropTypes
        // Por el momento le pasamos a addCategory solo una funcion
        render(<AddCategory addCategory={ ()=>{} } />);

        // hacemos un screen.debug y vemos el valor del input
        // screen.debug();

        // vamos a disparar un evento, pero para eso, tenemos que guardar como referencia nuestro input.

        const input = screen.getByRole('textbox');
        screen.debug()
        // Cuando disparamos el evento, tenemos que acceder a sus propiedades y establecer el valor del input.
        fireEvent.change( input, {target: { value: 'Goku'}});

        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()

        expect( input.value ).toBe( 'Goku' );

    });

    test('Debe llamar la funcion addCategory si el input tiene valor', () => {
        
        const inputValue = 'Goku';

        // creamos una jest function, una simulacion de una funcion. La cual tenemos completo control.
        const addCategory = jest.fn();
        render( <AddCategory addCategory={ addCategory } /> );

        // render( <AddCategory addCategory={()=>{}} /> );

        // En este caso, vamos a tener que agregarle al formulario un testId o un aria-label. Vamos a agregarle un aria-label='form'
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Empezamos cambiando el valor del input como hicimos en el test anterior
        fireEvent.change( input, {target: { value: inputValue}});
        // screen.debug();
        fireEvent.submit( form );
        // Para chequear que realmente se esta disparando el submit, podemos agregar un console.log cuando se dispara la funcion en el componente AddCategory.

        // Lo primero que podemos chequear es que el inputValue sea un string vacio.
        expect( input.value ).toBe( '' );

        // Ahora viene lo mas importante. Como hacemos para saber si se disparo la funcion que le pasamos a addCategory por props.
        expect( addCategory ).toHaveBeenCalled();
        expect( addCategory ).toHaveBeenCalledTimes(1);
        
        // De esta forma confiramos que la funcion se llame con el valor del input.
        expect( addCategory ).toHaveBeenCalledWith( inputValue )
    });

    // TODO: Tarea...
    test('No se debe llamar la funcion addCategory, si el input esta vacio', () => {
        
        const addCategory = jest.fn();
        render( <AddCategory addCategory={ addCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( addCategory ).not.toHaveBeenCalled();
        // o tambien...
        expect( addCategory ).toHaveBeenCalledTimes(0);

    });
})