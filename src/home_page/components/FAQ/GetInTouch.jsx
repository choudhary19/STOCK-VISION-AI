import React from "react";

const GetInTouch = () => {
	return (
		<div className="w-full bg-[#1f2937ff] rounded-md p-6 flex flex-col items-start mt-5 gap-4">
			<div className="flex flex-col">
				<h2 className="md:text-[18px] text-xl sm:text-3xl md:text-4xl font-semibold capitalize">
					Still have questions?
				</h2>
				<p className="md:text-[14px] text-[13px] md:text-md leading-normal font-light w-[95%] md:w-[100%] opacity-80">
					Feel free to contact us if you have any <br /> other questions.
				</p>
			</div>
			<div className="w-full bg-gray-700 h-[1px]" />
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-yellow-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get in Touch</button>

		</div>
	);
};

export default GetInTouch;
