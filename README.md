# TODO App

This is a TODO app built using Next.js 13 and Apollo to fetch data from a GraphQL server. It consists of two main pages, "/" and "/todo".
I also created [TODO graphql server](https://github.com/takahiromitsui/Todo-GraphQL-Server.git)

## Pages

- **"/"** - All Todos: On this page, you can view a list of all the todos. The todos are fetched from the GraphQL server using the `FETCH_TODOS` query defined in `graphql/queries.ts`. Each todo item displays the title and completion status.

- **"/todo"** - Create Todo: This page allows you to create new todos. There is a form where you can enter the title of the todo and submit it using the "Create" button. The new todo is created on the server using the `CREATE_TODO` mutation defined in `graphql/queries.ts`.

## GraphQL Queries and Mutations

The following GraphQL queries and mutations are used in this application:

- **FETCH_TODOS**: This query fetches all the todos from the server. It returns the `id`, `title`, and `completed` status of each todo.

- **UPDATE_TODO**: This mutation is used to update the completion status of a todo. It takes the `id` of the todo as an argument and returns the updated `id`, `title`, and `completed` status.

- **CREATE_TODO**: This mutation is used to create a new todo. It takes the `title` of the todo as an argument and returns the `id` of the newly created todo.

- **DELETE_TODO**: This mutation is used to delete a todo. It takes the `id` of the todo as an argument and returns the `id` of the deleted todo.

These queries and mutations are defined in the `graphql/queries.ts` file.

## Getting Started

To run the TODO app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/takahiromitsui/todo-graphql-frontend.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:3000`

Make sure to have a GraphQL server running and properly configured to handle the queries and mutations used in this app. Update the GraphQL server URL in the Apollo client configuration if necessary.