# Boiler plate for server side web application in hapi.js

Created boiler plate for server side web application in hapi.js to ollow MVC pattern with Swagger for API testing.

## Project SetUp

1. first clone the project using `git clone git@github.com:prince21298/HAPI-JS-boilerplate.git` then change directory using `cd HAPI-JS-boilerplate/`.
2. install all dependencies running `npm install`.
3. rename project name with your own project name.

## DB Setup
1. make one .env file in root directory and copy all content from sample.env file past it in .env file and give appropiate variables name in .env file.

## Migration
1. delete sample migration file from migration folder.
2. run `npm run knex migrate:make file_name` to create migration file.

## Models
1. delete created model file and create your own db model.

## services
1. create your own services deleting existing service file.

## Route
1. create your own route deleting existing route file.