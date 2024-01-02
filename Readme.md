# REACT NATIVE - SIRIUS PRODUCTS

## Setup

- Install [Expo](https://docs.expo.dev/get-started/installation/), [Node v18](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/)
- Clone this repository
- Run:
  ```
  yarn install
  ```
- Run:
  ```
  yarn start
  ```
- Follow the instructions and choose the platform.

- You're ready to go!

## Useful tools

- A mobile app to run your expo projects: [Expo Go](https://expo.dev/client)

## Objective

Develop a cross-platform mobile and web application using React Native and Expo. The 
application will showcase key React Native concepts, responsiveness, and integration 
with a public API.

## Tasks

### Core Features
We will use  https://fakestoreapi.com  to retrieve the data from
- 1. Product Listing Screen:
Fetch and display a list of products from a public API 
(https://fakestoreapi.com/products).
Display product name, image, and price.
- 2. Product Detail Screen:
On selecting a product, navigate to a detail screen showing more information 
(description, larger image, etc.).
- 3. Cart Functionality:
Allow users to add products to a cart.
Display a cart icon with a badge indicating the number of items.
- 4. Responsive Layout:
Ensure the app is responsive and provides a good user experience on both 
mobile and web.
### Technical Aspects
- 1. API Integration:
Use  fetch  or  axios  to retrieve product data from the public API.
- 2. Navigation:
Implement navigation using React Navigation.
- 3. State Management:
Use Context API or Redux for managing cart state.
- 4. Styling and Responsiveness:
Use StyleSheet for styling.
Implement responsive design for web compatibility.
- 5. Hooks: Use React hooks for lifecycle events and state management.
- 6. Code Organization:
Structure the project clearly with components, screens, and state management.
- 7. Error Handling and Validation:
Basic error handling for API calls and input validations.
### Bonus Challenges
- 1. Local Storage:
Persist cart items using local storage.
- 2. Custom Hooks:
Create custom hooks for common functionalities.
- 3. Testing:
Write unit tests for components using Jest and React Native Testing Library.
