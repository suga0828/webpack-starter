import { ListUsers } from "./components/ListUsers";

export const App = (): Element => {
  const container = document.createElement('main');
  container.insertAdjacentElement('beforeend', ListUsers());

  return container;
};
