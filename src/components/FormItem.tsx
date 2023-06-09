'use client';
import { CREATE_TODO, FETCH_TODOS } from '@/graphql/queries';
import { useMutation } from '@apollo/client';
import * as Form from '@radix-ui/react-form';
import Link from 'next/link';
export default function FormItem() {
	const [createTodo] = useMutation(CREATE_TODO, {
		refetchQueries: [{ query: FETCH_TODOS }],
	});
	return (
		<Form.Root
			className='w-1/2'
			onSubmit={event => {
				const { todo } = Object.fromEntries(new FormData(event.currentTarget));
				createTodo({
					variables: { title: todo },
				});
				event.preventDefault();
			}}
		>
			<Form.Field className='grid mb-[10px]' name='todo'>
				<div className='flex items-baseline justify-between'>
					<Form.Message className='text-3 opacity-[0.8]' match='valueMissing'>
						Invalid data
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className='
            text-black box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9'
						type='text'
						required
					/>
				</Form.Control>
			</Form.Field>
			<div className='flex items-baseline justify-end gap-2'>
				<Form.Submit asChild>
					<button className='border border-slate-100 hover:bg-blue-700 font-bold py-2 px-4 rounded'>
						Create
					</button>
				</Form.Submit>
				<Link href='/'>
					<button className='border border-slate-100 hover:bg-red-700 font-bold py-2 px-4 rounded'>
						Cancel
					</button>
				</Link>
			</div>
		</Form.Root>
	);
}
