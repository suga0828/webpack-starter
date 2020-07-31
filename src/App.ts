export const App = (): Element => {
  const container = document.createElement('div');

  const template = `
    <section>
      <h1>Tutorial: testing de código asíncrono</h1>
      <p>En este tutorial vamos a hacer test unitarios de peticiones HTTP hechas con <a href="">Fetch API</a>. Vamos a utilizar una API REST pública: <a href="https://jsonplaceholder.typicode.com/guide.html">JSONPlaceholder - Users</a>.</p>
      <p>En la medida de lo posible voy a tratar de escribir y generar el código de este tutorial en español.</p>
    </section>
    <section>
      <h2>Obtener Usuarios</h2>
      <h3>Lista de Usuarios</h3>
      <ul><>
    </section>
    <section></section>
    <section></section>
  `;

  container.innerHTML = template;

  return container;
};
