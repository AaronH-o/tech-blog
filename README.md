# Tech Blog

Tech Blog is a full-stack web application designed for developers to publish their blog posts and interact with other developers' posts through comments. The application follows the MVC (Model-View-Controller) paradigm for its architectural structure and utilizes various technologies including Handlebars.js, Sequelize ORM, and express-session npm package for authentication. The application is deployed on Heroku for easy access.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely using express-session for authentication.
- **Create Blog Posts**: Developers can create and publish their blog posts, including a title and content.
- **Comment on Posts**: Users can comment on other developers' blog posts to engage in discussions and share their thoughts.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

## Technologies Used

- **Node.js**: Backend runtime environment for running JavaScript on the server.
- **Express.js**: Web application framework for Node.js used for building the backend of the application.
- **Handlebars.js**: Templating engine used for generating dynamic HTML content on the server-side.
- **Sequelize ORM**: Object-Relational Mapping library for Node.js used for interacting with the database.
- **PostgreSQL**: Relational database management system used for storing user data, blog posts, and comments.
- **express-session**: npm package used for managing user sessions and authentication.
- **HTML/CSS**: Frontend languages for structuring and styling the user interface.
- **JavaScript**: Programming language used for client-side interactions and dynamic content rendering.

## Getting Started

To run the Tech Blog locally, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
cd 
npm install
```

3. Set up the database:

   - Create a PostgreSQL database.
   - Update the database configuration in `config/config.json` file with your database credentials.

4. Run migrations to create the database tables:

```bash
npx sequelize-cli db:migrate
```

5. Start the server:

```bash
npm start
```

6. Access the application in your web browser at `http://localhost:3000`.

## Deployment

The Developer's Blog CMS is deployed on Heroku for easy access. You can access the live application [here](#).

To deploy the application to Heroku, follow these steps:

1. Create a Heroku account if you don't have one already.
2. Install the Heroku CLI.
3. Log in to your Heroku account using the CLI.
4. Create a new Heroku app.
5. Set the Heroku remote in your local git repository.
6. Deploy the application by pushing your code to the Heroku remote.

```bash
git push heroku master
```

7. Once the deployment is complete, open the application in your web browser using the Heroku app URL.

## Contributing

Contributions are welcome! If you would like to contribute to the Developer's Blog CMS, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.