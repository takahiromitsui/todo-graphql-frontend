'use client';
import { CREATE_TODO, FETCH_TODOS } from '@/graphql/queries';
import { useMutation } from '@apollo/client';
import * as Form from '@radix-ui/react-form';
import * as Toast from '@radix-ui/react-toast';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
export default function FormItem() {
	const [createTodo] = useMutation(CREATE_TODO, {
		refetchQueries: [{ query: FETCH_TODOS }],
	});
	const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
	return (
		<Toast.Provider swipeDirection='right'>
			<Form.Root
				className='w-1/2'
				onSubmit={event => {
					event.preventDefault();
					const { todo } = Object.fromEntries(
						new FormData(event.currentTarget)
					);
					createTodo({
						variables: { title: todo },
					});
					setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
					event.currentTarget.reset();
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
			<Toast.Root
				className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
				open={open}
				onOpenChange={setOpen}
			>
				<Toast.Title className='[grid-area:_title] mb-[5px] font-medium text-black text-[15px]'>
					Created a new todo
				</Toast.Title>
			</Toast.Root>
			<Toast.Viewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
		</Toast.Provider>
	);
}
