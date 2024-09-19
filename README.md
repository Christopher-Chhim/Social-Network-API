# Social-Network-API

## Description

My motivation in developing this project was to make a simple web application to become familiar with MongoDB. This is my first time working with the MongoDB database and I used it for this project because of its speed with large amounts of data and flexibility with unstructured data. My social network API allows users to share their thoughts, react to friends' thoughts, and create a friend list.

## Installation

Download VSCode.
Download Node.js.
Download Insomnia.
Download mongoose
Download dayjs (npm install).
Download express (npm install).
Download nodemon (npm install).

## Usage

Run 'node index.js' on the terminal. If functioning properly, the terminal should the user that it is currently listening to the current port it is being set to. Next, the server is started and the Mongoose models are synced to the MongoDB database. When they open API GET routes in Insomnia for users and thoughts. Then the data for each of these routes is displayed in a formatted JSON. When they test API POST, PUT, and DELETE routes in Insomnia then they are able to successfully create, update, and delete users and thoughts in their database. When they test API POST and DELETE routes in Insomnia then they are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Features

Server Initialization and Database Sync
- Server Startup: The API starts a server when invoked, ensuring the Mongoose models are properly synced to the MongoDB database.
- Mongoose Models: These models define the schema for the database and ensure that data related to users, thoughts, reactions, and friends are properly stored and managed in MongoDB

Data Retrieval (GET Routes)

- Provides endpoints to retrieve users and thoughts.
- When accessing these routes via tools like Insomnia, data is returned in a structured JSON format.
- This allows easy viewing and verification of data stored in the database.

Data Manipulation (POST, PUT, DELETE Routes)
User Management:
- POST: Create new users.
- PUT: Update existing user information.
- DELETE: Remove users from the database.
Thoughts (Posts) Management:
- POST: Create new thoughts associated with users.
- PUT: Update existing thoughts.
- DELETE: Remove thoughts from the database.

Reactions to Thoughts
- Add Reactions: POST requests allow users to react to thoughts (like likes or comments).
- Remove Reactions: DELETE requests let users remove their reactions to thoughts.

Friend Management
- Add Friends: POST requests allow users to add friends to their friend list.
- Remove Friends: DELETE requests allow users to remove friends from their friend list.

## License

MIT License

Copyright <2024> <Christopher Chhim>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![opensource](https://img.shields.io/badge/generator-open_source-blue)

 