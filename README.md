# Tech Blog

## Description

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

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

## Deployment

The Tech Blog is deployed on Heroku for easy access. You can access the live application [here](https://aaron-tech-blog-d16e2bba3683.herokuapp.com/).

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

## Screenshots

![Tech Blog Homepage](assets\screenshots\tech-blog-homepage.png)

![Tech Blog Post](assets\screenshots\tech-blog-post.png)


## Contributing

Contributions are welcome! If you would like to contribute to the Tech Blog, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.