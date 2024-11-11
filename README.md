# Inventory Management System MERN CRUD App

A simple MERN project that lets the user insert, update, delete & get products from the MongoDB.

## To Run App:
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
export NODE_OPTIONS=--openssl-legacy-provider
NODE_OPTIONS=--openssl-legacy-provider npm start

### 1. Open the folder in vs code and run (npm install) command.
   
### 2. In MongoDB Compass:
   - Create Database: IMS
   - Collection Name: products

### 3. Then in vs code, open two terminals in split:
   

### 4. In one terminal run these commands (For Backend / Server):
   - cd Backend
   - npm run server

### 5. In the other terminal run these commands (For Frontend / Client):
   - cd Frontend
   - cd inventory_management_system
   - npm start