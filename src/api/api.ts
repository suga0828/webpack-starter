// const BASE_API = 'https://jsonplaceholder.typicode.com/users/';

// export const irABuscarUsuarios = () => fetch(BASE_API).then(resp => resp.json())

// export const irABuscarUsuario = () => fetch(BASE_API).then(resp => resp.json())

// export const crearUsuario = () => {
//   const config = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'toy name',
//       image: 'toy image',
//       likes: 0
//     })
//   }
//   return fetch(BASE_API, config).then(resp => resp.json())
// }

// export const actualizarUsuario = (toy) => {
//   const config = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       likes: toy.likes + 1
//     })
//   }
//   return fetch(BASE_API + toy.id, config).then(response => response.json())
// }

// export const eliminarUsuario = (id) => fetch(`${BASE_API}/${id}`, { method: 'DELETE' }).then(response => response.json())
