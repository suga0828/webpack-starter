import { irABuscarUsuarios } from '../api/api.service';
import { User } from '../api/api.model';

export const imprimirUsiariosEnContenedor = async (contenedor: Element): Promise<void> => {
  try {
    const users: User[] = await irABuscarUsuarios();
    contenedor.innerHTML = '';

    users.forEach(user => {
      const liElement: HTMLLIElement = document.createElement('li');
      liElement.innerHTML = user.name;
      contenedor.insertAdjacentElement('beforeend', liElement);
    });
  }
  catch (err) {
    contenedor.innerHTML = 'Hubo un error: ' + err;
  }
}

export const Render = (): Element => {
  const idBoton = 'botonObtener'

  const template = `
    <h3>
      Lista de Usuarios
      <button id="${idBoton}">Obtener Usuarios</button>
    </h3>
    <ul id="listaUsuarios"></ul>
  `;

  const container = document.createElement('section');
  container.innerHTML = template;

  const botonObtenerUsuarios: HTMLButtonElement =  container.querySelector(`#${idBoton}`);
  const listContainer: HTMLUListElement = container.querySelector("#listaUsuarios");
  botonObtenerUsuarios.addEventListener('click', (e) => imprimirUsiariosEnContenedor(listContainer));

  return container;
};
