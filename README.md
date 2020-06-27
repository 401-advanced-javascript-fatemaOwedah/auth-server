# auth-server
### Project: Autharization
### Author: Fatema Owedah

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-fatemaOwedah/auth-server/pull/4)

#### Documintation

### Modules

### Setup

#### `jest`
#### `express`
#### `dotenv`
#### `supertest`

#### How to initialize/run your application 
- node index.js /nodemon
- after that go to swagger
http://localhost:3000/signup ===> app.post
http://localhost:3000/signin ===> app.get
http://localhost:3000/users ===> app.get
http://localhost:3000/oauth ===> app.get
http://localhost:3000/secret ===> app.get

role ==========> [admin, writer, regular, editor]

http://localhost:3000/read [admin, writer, regular, editor] ===> app.get
http://localhost:3000/add  [admin, writer, editor]  ===> app.post
http://localhost:3000/change [admin, editor]  ===> app.put
http://localhost:3000/remove [admin]  ===> app.delete
to run test ===> npm test / npm run test



#### How do I install the app or library
- npm init -y 
- npm i express jest dotenv supertest
- npm install -g json-server

#### Tests
npm run test 

#### UML
![UML](/assets/lab14.jpeg)