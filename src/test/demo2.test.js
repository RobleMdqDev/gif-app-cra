describe("test demo2", () => {

  test("test 1 - Numero igual", () => {
    expect(1 === 1).toBe(true);
  });

  test("test 2 - Mensaje igual", () => {
    // 1. Arrange / Inicio
    const message1 = "Hola";
    
    // 2. Act / Acciones 
    // Ejecutar algo...
    const message2 = message1.trim();

    // 3. Assert / Observar el comportamiento esperado... 
    expect(message1).toBe(message2);
  });
});


