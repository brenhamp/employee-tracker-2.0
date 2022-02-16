# Employee Tracker 2.0
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

## Description

This is a MySQL database that uses Inquirer to keep track of a company's departments, managers, job titles, and employees. Users can view the database by department, role, or as a whole, add and modify employees, and create new departments and roles.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Challenges](#challenges)
- [Contact](#contact)

## Installation

![setup video](./assets/mysql_server_setup.gif)

You need MySQL and an API client such as Insomnia. Clone the repository, install the required packages, then open MySQL and run the schema. Run the seeds in your terminal, then start your server. You should then be able to run CRUD operations through your client.

## Usage

Once you have everything running, simply use http://localhost:3005/api/ followed by whichever endpoint you want to modify (i.e. /categories/, /products/, /tags/). Select your chosen CRUD operation, then change your JSON body accordingly.

## Demonstration

The following series of videos will show you how to use different operations.

### GET Routes (display items)

![GET routes video](./assets/get_routes.gif)

### POST Routes (add new items)

![POST routes video](./assets/post_routes.gif)

### PUT Routes (modify items)

![PUT routes video](./assets/put_routes.gif)

### DELETE routes

![DELETE routes video](./assets/delete_routes.gif)

## Challenges

This project was closely linked to our module assignments. I had a few hiccups with the association methods, but nothing major. I also had a problem where I defined the port for the server more than once, which lead to a connection refusal. Overall, this went pretty smoothly.

## Contact

I can be reached here on GitHub at [brenhamp](https://github.com/brenhamp) if you have any questions or comments.
