
# Webpack starter for simple frontend projects
Web starter to use TypeScript, npm dependencies and SCSS. You can see examples in `examples/` folder.
### Requirements:
* [Node.js](https://nodejs.org/en/download/) 
### Folders structure:
```bash
├── dist
├── node_modules
├── src
│   ├── assets (images, fonts, etc)
│   │   ├── **/*.png, **/*.ttf, etc
│   ├── favicon.ico
│   ├── index.html
│   ├── main.js
│   ├── main.scss
├── package.json
```
1. `dist/` folder: output folder for deploy.
2. `node_modules/` folder: dependencies folder.
3. `src/` folder: development folder.
4. `assets/` folder: folder for assets.
### Get Started:
1. Use `index.html` as template entry point.
2. Use `main.js` as JavaScript entry point.
3. Use `main.scss` as styles entry point.
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
