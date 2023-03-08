# Portfolio Application
- The application has been built with Ruby for backend and React for frontend. Deployed at [https://porfolio-application.vercel.app/]
- The Back-end API has been deployed at [https://port-folio-xtgn.onrender.com]
- This serves as a back-end API for a Portfoliomanagement system. The app uses ActiveRecord as an ORM and has three models: User, Project, and Skill.

## Installation

-To run the application, you need to have Ruby installed on your machine. 
 Once Ruby is installed, follow these steps:
 
1) Clone the repository - [https://github.com/Barsu5489/PortfolioApplication.git].
2) Navigate to the project directory in your terminal.
3) Run `bundle install` to install required gems.
4) Run  `rake db:migrate` to set up the database.
5) Run `rake server` to start the server.


The server will start on `http://localhost:9292`.

## API Endpoints
- The following API endpoints are available
## GET/
- Returns a list of all users in database.

## GET /users
- Returns a list of all users in database.

## GET /skills/:user_id
- Returns a list of all skills associated with a user.

## POST /skills/:user_id
- Creates a new skill associated with a user.

## DELETE /skills/:id
- Deletes the skill with the given `id`.

## POST /signup
- Creates a new user.

## PATCH /project/:id
- Updates the project with the given `id`

## POST /login
- Logs in a user.

## GET /projects/:user_id
- Returns a list of all projects associated with a user.

## DELETE /projects/:id
- Deletes the project with the given `id`.

## POST /project/:user_id
- Creates a new project associated with a user.

### Frontend Setup (Fetch Example)
- Example of a simple fetch to this backend API.

```js
fetch("https://port-folio-xtgn.onrender.com/users")
  .then((r) => r.json())
  .then((data) => console.log(data.data));
```


#  FRONT-END
## Features
- User can Login/Signup.
- User can have personalized portfolio after login/signup.
- Users can add new projects to their portfolio.
- Users can edit and delete existing projects on their portfolio.
- Users can add new skills to their skills section on their portfolio.
- Users can delete existing skills from their skills section.

## How to install
- Clone this repository to your local machine.[https://github.com/Barsu5489/PortfolioApplication.git]
- Change directory to frontend.
- Run `npm install` to install dependancies.
- Run `npm start` to start development server.
- Open the app on your web browser at http://localhost:3000.

## Usage
- Upon landing on Home page click on `Get started`
- Log in if you have an account or signup by clicking on `create` link at the footer of login form.
- After succesful signup and login, use the navbar for navigation through the application.
- Click on `My projects` - You can add new project by clicking on `add project` button.
- Click on `skills` on navbar to view or add new skill.
- To add new skill, input words in input section and click on `add` button.
## Copyright
- Owner [Emmanuel Kipkemboi Barsulai]
- Github [https://github.com/Barsu5489]
-(c) 2023, All rights reserved.


