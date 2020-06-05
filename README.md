
# Webpack starter for simple frontend projects
Web starter to use TypeScript, React, npm dependencies and SCSS. You can see examples in `examples/` folder.
### Requirements:
* [Node.js](https://nodejs.org/en/download/) 
### Folders structure:
```bash
├── dist/
├── node_modules/
├── src/
│   ├── assets/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.js
│   ├── main.scss
├── package.json
```
1. `dist/` folder: output folder for deploy.
2. `node_modules/` folder: dependencies folder.
3. `src/` folder: development folder.
4. `assets/` folder: folder for assets (images, fonts, etc).
### Get Started:
1. Use `index.html` as template entry point.
2. Use `main.js` as JavaScript entry point.
3. Use `main.scss` as styles entry point.
### Examples:
Copy `examples/` folder's content to `src/` folder. Install necessary dependencies and run the project:
```
$ npm install --save-dev react react-dom
$ npm install --save-dev @types/react @types/react-dom
$ npm run start
```
The project will run at `localhost:99999`.
### Development:
Run the following command for development:
```
$ npm run start
```
### Deployment:
Run the following command for production. The output code is placed in `dist/` folder.
```
$ npm run build
```
