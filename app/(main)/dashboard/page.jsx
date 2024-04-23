"use client";

import React from "react";
import CardInfo from "./_components/card-info";
import BarChartDashboard from "./_components/bar-chart";

const Dashboard = () => {
	return (
		<div className="p-8">
			<h2 className="font-bold text-4xl">Hi, User ✌️</h2>
			<p className="text-gray-500">
				Here&apos;s what is happening with your money. Let&apos;s your
				expenses
			</p>
			{/* Budget Card */}
			<CardInfo />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
				<div className="lg:col-span-2">
					{/* Bar Chart Dashboard */}
					<BarChartDashboard />
					{/* expenses list table */}
					Expenses Table
				</div>

				<div className="grid gap-5">
					<h2 className="font-bold text-lg">Latest Budget</h2>
					{/* Budget Item */}
					Budget Item list
					{[1, 2, 3, 4].map((item, index) => (
						<div className="w-full h-[180px] bg-slate-200 rounded-lg animate-pulse"></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
