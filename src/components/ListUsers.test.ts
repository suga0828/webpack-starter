import * as Component from './ListUsers';

import * as API from '../api/api.service';
import { User } from '../api/api.model';

describe('ListUsers component', () => {
  describe('imprimirUsiariosEnContenedor method test suite', () => {
    it('should print users response inside container', async () => {
      jest.spyOn(API, 'irABuscarUsuarios')
        .mockImplementation((): Promise<User[]> => (
          new Promise(resolve => resolve([{ name: 'mock user' } as User]))
      ));

      const container: HTMLUListElement = document.createElement('ul');

      Component.imprimirUsiariosEnContenedor(container).then((e) => {
        expect(container.innerHTML).toBe('<li>mock user</li>');
      });
    });

    it('should print error response inside container', async () => {
      jest.spyOn(API, 'irABuscarUsuarios')
        .mockImplementation((): Promise<User[]> => (
          new Promise((_, reject) => reject('Error'))
      ));

      const container: HTMLUListElement = document.createElement('ul');

      Component.imprimirUsiariosEnContenedor(container).then((e) => {
        expect(container.innerHTML).toBe('Hubo un error: Error');
      });
    });
  });

  describe('ListUsers method test suite', () => {
    it('should return a template with a button with id botonObtener', () => {
      const template = Component.Render();

      expect(template.querySelector('#botonObtener')).not.toBeNull();
    });

    it('should return a template with an ul with id listaUsuarios', () => {
      const template = Component.Render();

      expect(template.querySelector('#listaUsuarios')).not.toBeNull();
    });

    describe('when make click on a button with id botonObtener', () => {
      it('should call imprimirUsiariosEnContenedor', () => {
        const spy = jest.spyOn(Component, 'imprimirUsiariosEnContenedor');
        const boton = Component.Render().querySelector('#botonObtener');

        boton.dispatchEvent(new Event('click'));
  
        expect(spy).toHaveBeenCalled();
      });
    })
  });
});

