"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";

function Navbar() {
	const scrolled = useScrollTop();
	return (
		<div
			className={cn(
				"hidden md:z-50  md:fixed md:top-0 md:flex md:items-center md:justify-between md:w-full  md:p-5",
				scrolled && "border-b shadow-lg bg-white",
			)}
		>
			<div className="drop hidden absolute left-[38%] top-[25%] sm:left-[43%] sm:top-[30%] md:block  md:left-0 md:top-0 md:scale-[40%] md:-rotate-45 bg-gray-400 -z-10 "></div>

			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				<ModeToggle />
			</div>
		</div>
	);
}

export default Navbar;
