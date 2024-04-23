"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";

function Navbar() {
	const scrolled = useScrollTop();
	return (
		<div
			className={cn(
				"z-50  fixed top-0 flex items-center w-full  p-10",
				scrolled && "border-b shadow-lg bg-white",
			)}
		>
			<div className="drop absolute left-[38%] top-[25%] sm:left-[43%] sm:top-[30%]  md:left-0 md:top-[-10%] md:scale-50 bg-gray-400 -z-10 "></div>
		</div>
	);
}

export default Navbar;
