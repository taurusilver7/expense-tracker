import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React from "react";

const CardInfo = () => {
	return (
		<div>
			{true ? (
				<div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<div className="p-7 border rounded-lg flex items-center justify-between">
						<div>
							<h2>Total Budget</h2>
							<h2>$ 12000</h2>
						</div>
						<PiggyBank className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
					</div>
					<div className="p-7 border rounded-lg flex items-center justify-between">
						<div>
							<h2>Total Spent</h2>
							<h2>$ 7500</h2>
						</div>
						<ReceiptText className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
					</div>
					<div className="p-7 border rounded-lg flex items-center justify-between">
						<div>
							<h2>Budget Accounts</h2>
							<h2>3</h2>
						</div>
						<Wallet className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
					</div>
				</div>
			) : (
				<div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{[1, 2, 3].map((item, index) => (
						<div className="w-full h-[110px] bg-slate-200 animate-pulse rounded-lg"></div>
					))}
				</div>
			)}
		</div>
	);
};

export default CardInfo;
