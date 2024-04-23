import Link from "next/link";
import React from "react";

const BudgetItem = () => {
	return (
		<Link href="/dashboard/expenses/ggh">
			<div className="p-5 border rounded-lg hover:shadow-sm cursor-pointer h-[170px]">
				<div className="flex gap-2 items-center justify-between">
					<div className="flex gap-2 items-center">
						<h2 className="text-2xl p-3 px-4 bg-slate-100 rounded-full">
							Icon
						</h2>

						<div>
							<h2 className="font-bold">budget Name</h2>
							<h2 className="text-sm text-gray-500">
								Budget total items
							</h2>
						</div>

						<div className="mt-5">
							<div className="flex items-center justify-between mb-3">
								<h2 className="text-xs text-slate-400">$ spent</h2>
								<h2 className="text-xs text-slate-400">$ remaining</h2>
							</div>

							<div className="w-full bg-slate-300 h-2 rounded-full">
								<div className="bg-primary h-2 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
				Budget Item
			</div>
		</Link>
	);
};

export default BudgetItem;
