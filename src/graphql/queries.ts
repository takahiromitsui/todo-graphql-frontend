import { gql } from 'graphql-tag';

export const FETCH_TODOS = gql`
	query fetchAllTodos {
		todos {
			todos {
				id
				title
				completed
			}
		}
	}
`;
