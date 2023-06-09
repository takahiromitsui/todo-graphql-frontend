'use client';
import { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, TrashIcon } from '@radix-ui/react-icons';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO } from '@/graphql/queries';

export interface TodoProps {
	id: string;
	title: string;
	completed: boolean;
}

export default function TodoItem({ id, title, completed }: TodoProps) {
	const [updateTodoCompleted] = useMutation(UPDATE_TODO);
	const [isChecked, setIsChecked] = useState(completed);
	const [isHovered, setIsHovered] = useState(false);

	const handleCheckboxChange = (checked: boolean) => {
		updateTodoCompleted({
			variables: { id: id },
		});
		setIsChecked(checked);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		// <div>
		<div className='flex items-center'>
			<Checkbox.Root
				className='appearance-none bg-slate-100 h-6 w-6 border rounded flex items-center justify-center hover:bg-slate-300'
				id={id}
				checked={isChecked}
				onCheckedChange={handleCheckboxChange}
			>
				<Checkbox.Indicator className='text-slate-500'>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label
				className={`pl-4 leading-none ${
					isChecked ? 'line-through text-slate-200' : ''
				}`}
				htmlFor={id}
			>
				{title}
			</label>
		</div>
		// {/* <div className="flex justify-around">
		//   <TrashIcon
		//     className="appearance-none h-6 w-6 hover:text-blue-500 cursor-pointer"
		//     onMouseEnter={handleMouseEnter}
		//     onMouseLeave={handleMouseLeave}
		//     onClick={() => {
		//       console.log('clicked');
		//     }}
		//   />
		//   {isHovered && <div className="text-red-500">Delete?</div>}
		// </div> */}
		// </div>
	);
}
