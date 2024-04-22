"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";

function Navbar() {
	const scrolled = useScrollTop();
	return (
		<div
			className={cn(
				"z-50 bg-white fixed top-0 flex items-center w-full p-6",
				scrolled && "border-b shadow-sm",
			)}
		>
			Navbar
		</div>
	);
}

export default Navbar;
