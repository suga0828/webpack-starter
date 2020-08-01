import { User } from "./api.model";

const BASE_API = 'https://jsonplaceholder.typicode.com/users/';

export const irABuscarUsuarios = (): Promise<User[]> => fetch(BASE_API).then(resp => resp.json());

export const irABuscarUsuario = (id: string): Promise<User> => fetch(BASE_API + id).then(resp => resp.json());

export const crearUsuario = async (user: User): Promise<any> => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  const resp = await fetch(BASE_API, config);
  return await resp.json();
}

export const actualizarUsuario = async (user: Partial<User>): Promise<any> => {
  const config = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user })
  }
  const response = await fetch(BASE_API + user.id, config);
  return await response.json();
}

export const eliminarUsuario = (id: number): Promise<any> => fetch(BASE_API + id, { method: 'DELETE' })
  .then(response => response.json());
