"use client";

import React from "react";
import CreateBudget from "./create-budget";
import BudgetItem from "./budget-item";

const BudgetList = () => {
	return (
		<div className="mt-7">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<CreateBudget />

				<BudgetItem />
				<BudgetItem />
				<BudgetItem />

				<div
					className="w-full bg-slate-200 rounded-lg
        h-[150px] animate-pulse"
				></div>
			</div>
		</div>
	);
};

export default BudgetList;
