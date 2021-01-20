# Ravenmoore-testing-authApi

## a testing api with auth and mongodb

### Author: Matt Ravenmoore

### Links and Resources

- [ci/cd](https://github.com/M-Ravenmoore/Ravenmoore-testing-authApi/actions) (GitHub Actions)
- [back-end server url](https://ravenmoore-testapi.herokuapp.com/)

- [repo](https://github.com/M-Ravenmoore/Ravenmoore-testing-authApi)

### Setup

clone down the project from github
run `npm i`
set your env variables as dictated by your system and required items below.

set up your model for what you want your routes to look like and take in data like... se existing Dragons folder under models for an example.

#### `.env` requirements (where applicable)

- `PORT` -(for local testing) Port Number
- `SECRET` -(for local testing) YOUR CUSTOM SECRET (make one if needed with: openssl rand -hex 32)
- `MONGODB_URI` -(for local testing) mongodb://localhost:27017/{your dbname here}

#### How to initialize/run your application (where applicable)

run `npm start` to run localy on what ever port you set up express to take from your env;

PLEASE DO NOT REDEPLOY MY CODE>.< its not hard write your own base api if you need it.... but dont steal mine.

#### Tests

testing notes to come

#### UML/site map

![UML Diagram](uml.jpg)
Link to an image of the UML for your application and response to events
