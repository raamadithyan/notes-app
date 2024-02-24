"use client";

function Heading() {
	console.log("am i client");

	return (
		<div className="relative">
			<div className="drop absolute left-[39%] top-32 -z-10 "></div>
			<header className="  font-semibold text-[16rem] text-center ">
				NOTES
			</header>
		</div>
	);
}

export default Heading;
