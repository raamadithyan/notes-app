"use client";

import Link from "next/link";

function Heading() {
	console.log("am i client");

	return (
		<div className="relative ">
			<div className="drop absolute left-[47%] top-[34%] bg-gray-400 -z-10 "></div>
			<header className="  font-semibold text-[6rem] text-center md:text-[10rem]  ">
				NOTES
			</header>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container space-y-8 px-4 md:px-6 flex flex-col items-center justify-center  text-center">
					<div className="space-y-2">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
							Save every drop of notes
						</h1>
						<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Capture your thoughts with ease. Whether it's a
							brilliant idea, a to-do list, or meeting notes, our
							app makes note-taking a joy.
						</p>
					</div>
					<div className="flex justify-center space-x-4">
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							href="#"
						>
							Sign Up
						</Link>
						<Link
							className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-300 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
							href="#"
						>
							Try as Guest
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Heading;
