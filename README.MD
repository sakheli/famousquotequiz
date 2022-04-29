# Famous quotes quiz

> Requirements
	
 - php 8.1
 - mysql 15.1
 - laravel 9.8
 - nodejs 16.1
 
 

> Setup
	
 - Create database, user and grant privileges to that user.
    `CREATE DATABASE quiz;`
    `CREATE USER 'quiz_user'@'localhost' IDENTIFIED BY 'verysecurepassword';`
    `GRANT ALL PRIVILEGES ON quiz.* TO 'quiz_user'@'localhost';`
 - Install packages for backend
	`composer install`
- Run database migration
	`php artisan migrate`
- Seed database
 	`php artisan db:seed`
 - Start backend server
	`php artisan serve`
- Install packages for frontend
	`npm install`
 - Start frontend server
	`npm run dev`
 
> Frontend

localhost:3000

> Backend

localhost:8000

> Api

localhost:8000/api
