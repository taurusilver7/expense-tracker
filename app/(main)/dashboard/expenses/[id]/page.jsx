"use client";

import { ArrowLeft, Trash } from "lucide-react";
import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ExpenseTable from "../_components/expense-table";
import EditBudget from "../_components/edit-budget";
import AddExpense from "../_components/add-expense";

const ExpenseScreen = ({ params }) => {
	return (
		<div className="p-10">
			<div className="text-2xl font-bold gap-2 justify-between items-center flex">
				<span className="flex gap-2 items-center">
					<ArrowLeft className="cursor-pointer" />
					My Expense
				</span>

				<div className="flex gap-2 items-center">
					{/* Edit Budget component */}
               <EditBudget />

					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button className="flex gap-2" variant="destructive">
								<Trash />
								Delete
							</Button>
						</AlertDialogTrigger>

						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Are you absolutely sure?
								</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently
									delete your current budget along with expenses and
									remove your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction onClick={() => deleteBudget()}>
									Continue
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
				{/* Budget item */}
				<div className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse">
					Budget item
				</div>
				{/* Add Expense */}
				<AddExpense />
			</div>
			<div className="mt-4">
				<ExpenseTable />
			</div>
		</div>
	);
};

export default ExpenseScreen;
