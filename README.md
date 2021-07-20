# Exercise Tracker with MERN stack
This is a project done based on this [freeCodeCamp tutorial](https://www.youtube.com/watch?v=7CqJlxBYj-M). The tutorial shows how to build a website by using *React, MongoDB Atlas, Express and Node.js*. What I did on my own was to mix those tools with **React-Redux, Redux-Saga, Formik (also with Yup) and React-Bootstrap**. It has no purpose rather than to practice. What I mean is that it doesn't do anything special nor solves any problem.

It is simple exercise tracker that lets yout:
- Add a new "user"
- Create a new Exercise, with some information
- See the exercises
- Delete and edit those exercises

It **doesn't have authentication, anyone can do anything on the data**.

## How to set up
- Setup the database in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as explained [here](https://youtu.be/7CqJlxBYj-M?t=302)
- Clone this repository into your computer
- Inside each folder ('backend' and 'frontend') type the command `npm install` or `yarn install`
- Inside the backend folder create a .env file containing the variable `ATLAS_URI`
  - This variable should contain the link given when setting up your database.
- Install *nodemon* globally by typing `npm install -g`
- Then, to run it you should type the command `nodemon server` in the backend folder and `yarn start` or `npm run` in the mern-tutorial directory.

Note that the server port specified in [backend/server.js](/backend/server.js) must be the same as the constant `port` on [mern-tutorial/src/store/sagas.js](/mern-tutorial/src/store/sagas.js), so backend and frontend can interact correctly.

### Some things I have to learn and look forward to
- Handling API calls, with something like a *"loading"* component
- Other React frameworks like Material UI or React Styled Components
- Node and relational databases
- Authentication and registering users
- Everything related with backend...

> Julián Sanmartino

[Twitter](https://twitter.com/julisanmartino)

[Github](https://github.com/jjsanmartino03)