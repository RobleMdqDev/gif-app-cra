import { getSaludo, getUser } from "./functions";

describe("test demo", () => {

  test("1 - Numero igual", () => {
    expect(1 === 1).toBe(true);
  });

  test("2 - Mensaje igual", () => {
    // 1. Arrange / Inicio
    const message1 = "Hola";
    
    // 2. Act / Acciones 
    // Ejecutar algo...
    const message2 = message1.trim();

    // 3. Assert / Observar el comportamiento esperado... 
    expect(message1).toBe(message2);
  });

  test('3 - getNombre', () => {
    const nombre = 'Beto';

    const message = getSaludo(nombre);

    expect(message).toBe(`Hola ${nombre}`)
  });

  test('4 - getUser', () => {
    const testUser = {
        uid: 'ABC123',
        username: 'Agosto1986'
    };

    const user = getUser();

    // No se puede validar la igualdad de un objeto con toBe
    // expect(testUser).toBe(user)

    expect(testUser).toEqual(user)
  });
});


