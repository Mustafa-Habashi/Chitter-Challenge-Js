Chitter Challenge
=================

To start the application

As usual please start by forking this repo.

* `cd client`
* `npm i` - to install all the dependencies required
* `npm start` - to start the REACT app

Open up a new terminal within VSC and:

* `cd server`
* `npm i` - to install the dependencies
* `npm start` - to start the server



For Testing open up separate terminals for the client and server side

* `cd client`
* `npm test`

For Server side

* `cd server`
* `npm test`



-------
### Schemas and models
Looking at the requirements for the acceptance criteria. I decided the schema for the user to sign up will require an
* Full name `type String`
* Username `type String`
* Email `type String`
* Password `type String` encrypted

For the peep schema and model I went for the text and date it was created to be deisplayed and also the author of the peep aka the username when signed in:
* text `type String`
* author `type String`
* date `type new Date`


-------

## Testing
### Backend Register Route
```
1. tests when invalid username input should send back status (422) and error message
1. tests when invalid email input should send back status (422) and error message
1. tests when invalid password input should send back status (422) and error message
1. tests when invalid name input should send back status (422) and error message

```
### FrontEnd React tests
### Header test
```
1. It should create a snapshot of the component Header

```
### Footer test
```
1. It should create a snapshot of the component Header

```
### HomePage test
```
1. tests for certain Header text to be in document
2. tests for role of button to be within document

```

### LoginPage test
```
1. tests for email input box to be rendered in
2. tests for password input box to be rendered in
3. tests that the value of email inputed matches and exists
4. tests that the value of password inputed matches and exists

```
### Signup Page test
```
1. tests for email input box to be rendered in
2. tests for password input box to be rendered in
3. tests for name input box to be rendered in
4. tests for username input box to be rendered in
5. tests that the value of email inputed matches and exists
6. tests that the value of password inputed matches and exists
7. tests that the value of username inputed matches and exists
8. tests that the value of name inputed matches and exists

```

## Reflection:
------
## Changes for the future
- I will want to update my UI and make it more user friendly, researching more and UI frameworks that are simpler to use and easier to test in unit testing

- Create more unit test. In this challenge and in general i struggle at unit testing not knowing what to test and test failing. I will want to create tests testing components functionality, navigiation and more.

- I will want to make the login more secure hide the users details and user loading effects and time as pages jsut flash before your eyes.

- I will want to deploy the code on to a website. Host it to netlify maybe.