import Link from 'next/link';

export default function Home() {
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
		</main>
	);
}
