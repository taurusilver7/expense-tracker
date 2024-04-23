"use client";

import Header from "./_components/header";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }) {
	return (
		<div className='h-full'>
			<div className="fixed md:w-64 hidden md:block">
				{/* Side Navigation Pane */}
				<Navbar />
			</div>
			<div className="md:ml-64">
				<Header />
				{children}
			</div>
		</div>
	);
}
