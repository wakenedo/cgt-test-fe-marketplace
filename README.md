# 90s Shop 🥳

90s Shop is a modern application that simulates a marketplace, with a 90s theme. 

* Responsiveness 
* Scalable File & Folder Structure
* Clean Code


# Libs 📘

* Redux , Redux-persist
* Axios
* Material UI
* Toastify

# Redux & Redux-persist
  https://redux.js.org/

    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",

 For this project to deal with states we implemented a Redux structure, this way we can track the Cart states without the risk of state pollution.
 The redux structure used was the suggested one by Redux docs.
# Mocko API
  https://app.mocko.dev/

For the products, I've decided to mock an api, to call and simulate a more realistic development environment. I've used the service of mocko to create a simple endpoint for the products that were in the project.
# IMGBB
  https://imgbb.com/
Used imgbb to host the images from the products to call and render them from the api request         
# Axios
  https://axios-http.com/ptbr/docs/intro
    
    "axios": "^0.27.2",
Since we're using and api, I decided to use axios to fetch the data from the endpoint

# Material UI

    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/material": "^5.10.2",
Material UI was used for its fast development process and implementation, with its in-built components that we have access to.
# Toastify
    "react-toastify": "^9.0.8",

React-Toastify to improve user experience related to their actions on the app.

# Marketplace MVP

The goal of this task is to test your ability to test, refactor and implement new functionality on a given system. Note
that this repository does not represent the actual code of CGTrader, but only acts as a testing ground.

## New Functionality

Imagine the situation where management assigns you a task. Management wants you to implement basic MVP functionality for
the marketplace. User should be able to navigate between home page, product page and cart page, add multiple items to the cart and
see the total amount for payment.

## Tasks

1. Implement MVP cart functionality
2. Refactor implementation code and tests where you see fit. You have as much freedom here as you wish
3. Improve the layout and styling of the application. No need to polish too much.
4. Make sure test suite runs through all of the tests successfully

## Notes & Requirements

* You can spend as much time as you want.
* You may refactor not only the application code, but the tests too. Keep in mind that test code is still code that
needs to be maintained.
* Use git to track your changes. **Fork or clone this repository** and commit often.
* When finished, send us the link or the zip of the project via e-mail.

Good luck!

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
