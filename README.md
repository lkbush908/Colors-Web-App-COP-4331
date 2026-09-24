# Colors-Web-App-COP-4331



## About
Repository for COP 4331 Colors web application and first assignment.

The Colors web app is a basic search and add application where users can create a list of colors added by them and search through what they have added. 
This application is run within a web browser by visitng the website made during teh setup. 

This application does NOT allow for editing and deleting entries, and those can only be done by a user with access to the database directly within the root.

## Setup

**Important**: For this web application you will need to host server and create a domain to access the API and give functionality


### Create SQL Database

- Create SQL databse and tables for users and contacts using CREATE commands. 

- Main user will need to be made using 

~~~
create user 'username' identified by 'password';
grant all privileges on databaseName.* to 'username'@'%';
~~~

### Connecting API 

In each API file the command below will need to be updated witht the correct username, password, and database

~~~
$conn = new mysqli("localhost", "username", "password", "database");
~~~

After connect API, the website should update to the complete home page and allow colors and users to be searched and added











