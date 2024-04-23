"use client";

import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }) {
	return (
		<div>
			<div className='fixed md:w-64 hidden md:block'>
            {/* Side Navigation Pane */}
            <Navbar />
         </div>
			<div className="md:ml-64">
				{/* Dashboard Header */}
				{children}
			</div>
		</div>
	);
}
