import { gql } from 'graphql-tag';

export const FETCH_TODOS = gql`
	query FetchAllTodos {
		todos {
			todos {
				id
				title
				completed
			}
		}
	}
`;

export const UPDATE_TODO = gql`
	mutation UpdateCompleted($id: ID!) {
		updateTodoCompleted(id: $id) {
			todo {
				id
				title
				completed
			}
		}
	}
`;

export const CREATE_TODO = gql`
	mutation CreateTodo($title: String!) {
		createTodo(title: $title) {
			todo {
				id
			}
		}
	}
`;

export const DELETE_TODO = gql`
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			todo {
				id
			}
		}
	}
`;
