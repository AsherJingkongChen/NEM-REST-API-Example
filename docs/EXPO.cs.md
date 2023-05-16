---
codeslide:
  fontSize: 21px
  styles:
    - https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/vs.min.css

---
# RESTful API Example (Node.js + Express + MongoDB)

The repository is [here](https://github.com/AsherJingkongChen/NEM-REST-API-Example.git)

---
# Purpose

This example is for learning backend techniques:
- RESTful API
- CRUD operations

---
# Features

- Uses Node.js for server
- Uses Express for router
- Uses MongoDB + Mongoose for database
- Uses Postman for testing
- Uses JavaScript ESModule syntax

---
# Demo

---
# Problems I solved

- How to setup tests with Postman?
- How to setup routers with Express?
- How to build a simple REST API example?
- How to interact with MongoDB?

---
# Processes

1. Entry point
2. A Model
3. A Router
4. CRUD Controllers

---
# Entry point

[:code.js](../index.js)

---
# A model

[:code.js](../models/Card/CardModel.js)

---
# A router

[:code.js](../routers/Card/CardRouter.js)

---
# CRUD controllers

- Create
- Read
- Update
- Delete

---
# Create

[:code.js](../controllers/Card/create.js)

---
# Read

[:code.js](../controllers/Card/read.js)

---
# Update

[:code.js](../controllers/Card/update.js)

---
# Delete

[:code.js](../controllers/Card/delete.js)

---
# Utilities

## ResponseForm

[:code.js](../controllers/Card/ResponseForm.js)

---
# Thanks for your watching!

The repository is [here](https://github.com/AsherJingkongChen/NEM-REST-API-Example.git)
The tests are on [Postman](https://www.postman.com/supply-administrator-56584646/workspace/my-workspace/collection/24393116-46ba2a8d-f6c5-409f-9ee9-c1b1fd0eba0d?action=share&creator=24393116)
