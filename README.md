<div align="center">
  <img src="./assets/node-logo.svg"/>
</div>

<h1 align = "center">NodeJS Fundamentals</h1>

<p>This project provided me with a comprehensive understanding of Node.js, its functionality, and its diverse applications. Node.js, a robust library, empowers us to execute JavaScript on the server side, leveraging the V8 Engine to construct essential back-end functionalities, including the development of APIs. Furthermore, this learning journey delved into critical aspects such as HTTP methods, status codes, stream handling, pipe operations, file manipulation, local database interaction, and the creation of application routes.</p>

<div align="center">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <img src="https://img.shields.io/static/v1?label=node&message=v18.7.1&color=blue&style=plastic&logo="/>
  </div>
</div>

<h4 align="center"> 
	NodeJS Fundamentals | Status: Done  
</h4>

## Table of Contents

- [Features](#features)
- [Requirements to run the project](#requirements-to-run-the-project)
- [Running the application](#running-the-application)
- [Main Technologies](#main-technologies)
- [License](#license)
- [Author](#author)

## Features

This is study project to get introduced about NodeJS fundamentals. There's some routes to simulate data persistence in local database, like get users, add new user and remove an user.

### GET (/users)

This route returns the list of users on the local database. You can also filter users by adding "search" query param in the URL, like: GET request for http://localhost:3333/users?search=John

### POST (/users)

Through body request, you can add a new user with name and email. Unique user's ID will be created natively by NodeJS.

### PUT(/users/:id)

You can edit name or email of a user by sending through body request what you want to modify. For example: PUT http://localhost:3333/users/b4b3ce4a-e0e3-4b51-b33a-97060e437a4b, and add a body request on Insomnia.

### DELETE(/users/:id)

If you want to delete a user, pass his/her ID through the route param, like: DELETE http://localhost:3333/users/b4b3ce4a-e0e3-4b51-b33a-97060e437a4b

## Requirements to run the project

<p>Before you run the project, check if you have [Node.js](https://nodejs.org/en/) installed on your machine, as well [Git](https://git-scm.com) to clone this repository.</p>

## Running the application

```bash
    # Clone this repository on your machine:
    $ git clone https://github.com/vitorlinsbinski/nodejs-fundamentals.git

    # Access the project folder in your terminal:
    $ cd nodejs-fundamentals

    # Install all dependencies:
    $ npm install

    # Run the application:
    $ node src/server.js
```

<p>After that, you may use some API Client to send HTTP requests to the server, like Insomnia.</p>

<span>Example: if you send a GET request to the server with the route "/users", you will get the list of users in the local json database created by the application</span>

## Main Technologies

- [NodeJS](https://nodejs.org/)

## License

This project is licensed under [MIT](https://choosealicense.com/licenses/mit/) License.

### Author

<a href="https://github.com/vitorlinsbinski">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/69444717?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vitor Linsbinski</b></sub></a> <a href="https://github.com/vitorlinsbinski" title="">🚀</a>

Developed by Vitor Linsbinski

[![Linkedin Badge](https://img.shields.io/badge/-Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitorlinsbinski/)](https://www.linkedin.com/in/vitorlinsbinski/)
