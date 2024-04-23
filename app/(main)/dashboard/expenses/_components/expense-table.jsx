import { Trash } from "lucide-react";
import React from "react";

const ExpenseTable = () => {
	return (
		<div className="mt-3">
			<h2 className="font-bold text-lg">Latest Expenses</h2>
			<div className="grid grid-cols-4 bg-slate-200 p-2 mt-3">
				<h2 className="font-bold">Name</h2>
				<h2 className="font-bold">Amount</h2>
				<h2 className="font-bold">Date</h2>
				<h2 className="font-bold">Action</h2>
			</div>

			<div className="grid grid-cols-4 bg-slate-50 p-2">
				<h2>Rent</h2>
				<h2>$ 5000</h2>
				<h2>Jan 07 2024</h2>
				<h2>
					<Trash className="text-red-500 cursor-pointer" />
				</h2>
			</div>

			<div className="grid grid-cols-4 bg-slate-50 p-2">
				<h2>Bills</h2>
				<h2>$ 8000</h2>
				<h2>Jan 24 2024</h2>
				<h2>
					<Trash className="text-red-500 cursor-pointer" />
				</h2>
			</div>
		</div>
	);
};

export default ExpenseTable;
