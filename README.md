# Quick Frontend Kit

A quick starter kit that utilizes modern web technologies for frontend app using `react`, `redux`, `react-router`, `express` and `webpack`. It is designed to setup as simple as possible to extend easily, and to be used for different cases.


### Requirements
```
node >= v12.13.0
npm >= v6.12.0
```


### Usage:
- Clone the repository
- Extend / Add more dependencies for suitable needs
- Run `npm install`
- Rename `.env.example` to `.env` and other necessary variables needed
- Run at least once `npm run build` to have the `dist` folder created for server to have the client source compiled and be served


### Commands:
- `npm run start` - open terminal to start developing
- `npm run build` - to compile assets to be deployed, it will create `dist` folder on server
- `npm run server` - to  run it on root project to start the server and serving our `dist` folder in production
- `npm run test` - to execute and run test with jest / enzyme


### Frameworks and Tools
- Webpack
- Gulp
- ReactJS
- Redux
- React Router
- Redux Saga
- PostCSS / CSS Modules
- Jest
- Enzyme


### Client Workflow
- an action will be dispatched through actions defined in each action types.
- reducer async actions will received those calls and handle the side effects. (ie. api calls, etc...)
- an action will be then dispatched after those side effect calls which will be received on reducers
