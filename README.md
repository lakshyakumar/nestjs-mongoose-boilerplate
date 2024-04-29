# Nestjs-Mongoose boilerplate

## Description

NestJS Mongoose Boilerplate with Winston Logger

Welcome to the NestJS Mongoose Boilerplate repository! 🚀

This boilerplate provides a robust starting point for building scalable Node.js applications using NestJS framework with Mongoose ORM. It comes pre-configured with Winston logger for efficient logging, support for reading environment variables from a .env file, and the ability to manage configurations for various environments through a dedicated config file.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

This project provides a RESTful API for managing car data, including CRUD (Create, Read, Update, Delete) operations.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger Integration

This Repo comes with Swagger integration, allowing you to explore and interact with the API endpoints via a user-friendly interface. To access the Swagger UI:

Start the server by running npm start.
Open your web browser and navigate to http://localhost:3000/api.

## API Endpoints

1. **Retrieve All Cars**  
   **Endpoint**: GET /car  
   **Description**: Retrieves all cars stored in the database.
2. **Create a New Car**  
   **Endpoint**: POST /car  
   **Description**: Creates a new car with the provided data.  
   **Request Body**: JSON object representing the car data (id, brand, color, and model).
3. **Retrieve a Car by ID**  
   **Endpoint**: GET /car/:id  
   **Description**: Retrieves a specific car by its ID from the database.  
   **Parameters**:  
   **id**: ID of the car to retrieve.
4. **Delete a Car by ID**  
   **Endpoint**: DELETE /car/:id  
   **Description**: Deletes a specific car by its ID from the database.  
   **Parameters**:  
   **id**: ID of the car to delete.
5. **Update a Car's Property by ID**  
   **Endpoint**: PUT /car/:id  
   **Description**: Updates a specific property of a car by its ID in the database.  
   **Parameters**:  
   **id**: ID of the car to update.  
   **Query Parameters**:  
   **property**: Name of the property to update.  
   **valu**e: New value for the property.

## Data Model

The car data model consists of the following properties:

`id`: Unique identifier for the car.  
`brand`: Brand or manufacturer of the car.  
`color`: Color of the car.  
`model`: Model of the car.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
