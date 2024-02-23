"use client";

function Heading() {
	console.log("am i client");

	return (
		<div className="relative">
			<div className="absolute top-[50%] left-[45%] ">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-48 -z-10 bg-white rounded-full shadow-lg"></div>
			</div>
			<header className="  font-semibold text-[16rem] text-center ">
				NOTES
			</header>
		</div>
	);
}

export default Heading;
