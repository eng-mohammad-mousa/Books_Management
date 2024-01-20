# Books Management Project

This is a simple Books Management project developed with Vue.js and Laravel. 
It showcases the CRUD (Create, Read, Update, Delete) operations between the Vue.js frontend and Laravel backend.

<br>

## Features

- Add, edit, and delete books easily.
- Users can add books by entering the relevant details like title, price, and description.
- Users can view the list of books, edit specific book details, and delete books when needed.
- A custom 404 page is included for a user-friendly experience.

<br>

## Technologies Used

- Vue.js
- Laravel
- MySQL

<br>    

## Prerequisites

Before running this project, make sure you have the following software installed:

- Node.js: [Download Node.js](https://nodejs.org)
- Composer: [Download Composer](https://getcomposer.org)

<br>


## Installation

1. Create a new database named `2_book_laravel_vue_crud` to store the tasks.

2. Clone the repository:

```
git clone https://github.com/eng-mohammad-mousa/Books_Management.git
```

3. Navigate to the project directory:

```
cd Books_Management
```

4. Install the required dependencies:

```
composer install
npm install
```

5.  Copy the `.env.example` file and rename it to `.env`. Update the necessary database configurations in the `.env` file.
```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=2_book_laravel_vue_crud
DB_USERNAME=root
DB_PASSWORD=
```

6. Generate a new application key:
```bash
php artisan key:generate
```
   
7. Run the database migrations:

```
php artisan migrate --seed
```

8. Build and compile the frontend assets:

```
npm run build
```

9. Start the development server:

```
php artisan serve
```

10. Access the application in your browser by visiting `http://localhost:8000`.

<br>

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the GitHub repository.
