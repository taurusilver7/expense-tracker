import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import React from "react";

const AddExpense = () => {
	return (
		<div className="border p-5 rounded-lg">
			<h2 className="font-bold text-lg">Add Expense</h2>
			<div className="mt-2">
				<h2 className="text-black font-medium my-1">Name</h2>
				<Input placeholder="ex, Bedroom decor" />
			</div>

			<div className="mt-2">
				<h2 className="text-black font-medium my-1">Amount</h2>
				<Input placeholder="e.g. 1000" />
			</div>

			<Button disabled={false} onClick={() => {}} className="mt-3 w-full">
				{false ? <Loader className="animate-spin" /> : "Add New Expense"}
			</Button>
		</div>
	);
};

export default AddExpense;
