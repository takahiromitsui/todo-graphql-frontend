import Link from 'next/link';
import TodoItem, { TodoProps } from '@/components/TodoItem';
import TodoList from '@/components/TodoList';

export default function Home() {
	const todos: TodoProps[] = [
		{
			id: '1',
			title: 'Todo 1',
			completed: false,
		},
		{
			id: '2',
			title: 'Todo 2',
			completed: false,
		},
	];
	return (
		<main>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl'>Todo</h1>
				<Link href='/todo'>
					<button className='border border-slate-100 hover:bg-blue-700 font-bold py-2 px-4 rounded'>
						New
					</button>
				</Link>
			</div>
			<div>
				<TodoList />
			</div>
		</main>
	);
}
