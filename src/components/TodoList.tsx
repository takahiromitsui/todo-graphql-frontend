'use client';
import { useQuery } from '@apollo/client';
import TodoItem, { TodoProps } from './TodoItem';
import { FETCH_TODOS } from '@/graphql/queries';

export default function TodoList() {
	const { data, loading, error } = useQuery(FETCH_TODOS);
	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	const todos = (data?.todos.todos as TodoProps[]) || [];

	return (
		<ul className='ml-4 mt-4 flex flex-col space-y-4'>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
}
