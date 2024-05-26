# React JS Shopping Cart (Frontend Only)

A fully functional shopping cart application built using React.js. This project demonstrates the use of React components, state management, and basic styling to create a user-friendly shopping experience. This is a front-end only application with no backend integration.

## Features

- Display a list of products
- Add products to the cart
- Remove products from the cart
- Adjust quantities of products in the cart
- Calculate the total price of items in the cart
- Search for products

## Demo

You can check out a live demo of the application [here](#).

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/react-shopping-cart.git
    cd react-shopping-cart
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The application will run on `http://localhost:3000`.

## Usage

- Browse the list of available products.
- Use the search bar to find specific products.
- Click the "Add to Cart" button to add a product to the cart.
- Click the "Remove" button in the cart to remove a product.
- Adjust the quantity of a product using the quantity controls in the cart.
- The total price will automatically update based on the products and quantities in the cart.

## Project Structure

```plaintext
react-shopping-cart/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── Show.js
│   ├── Search.js
│   ├── Cart.js
│   └── ...
├── package.json
└── README.md
