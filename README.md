# Employee Tracker 2.0

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
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

![setup video](./assets/employee-tracker-installation.gif)

Install all the required packages. Make sure you have MySQL installed and log in. Then source the schema and (optional) the seed file. You should be able to browse the database through MySQL as usual. Once you've confirmed that the database is up and running, run npm start to begin the inquirer prompts.

## Usage

Simply navigate the prompts and provide info as inquirer requests it. You should have no problem navigating the database with the user-friendly interface.

## Demonstration

This video will demonstrate all the functions of Employee Tracker.

![demo video](./assets/employee-tracker-demo.gif)

## Challenges

This was one of my hardest challenges. I kept struggling to get the right data to return. Role ID and department ID in particular kept returning null, and I couldn't figure out why. Turns out I needed to add [0] to return the first value in the array (id). This was also just quite a bit of tricky JavaScript to write, with many moving parts.

## Contact

I can be reached here on GitHub at [brenhamp](https://github.com/brenhamp) if you have any questions or comments.
