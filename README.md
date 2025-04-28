# SBA319
# Pokemon-Style Card Collection API

 CRUD API including users, cards, and collections.

## Technologies Used
- **Node.js**
- **Express.js (v5.1.0)** 
- **MongoDB**
- **Mongoose (v8.14.0)** 


### Users
- GET /users/:id - Get a user by ID
- POST /users - Create a new user
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

### Cards
- GET /cards/:id - Get a card by ID
- POST /cards - Create a new card
- PUT /cards/:id - Update a card
- DELETE /cards/:id - Delete a card

### Collections
- GET /collections/user/:userId - Get a user's collection
- POST /collections - Create a new collection
- PUT /collections/addcard/:collectionId - Add a card to a collection
- DELETE /collections/:id - Delete a collection


