import React from "react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateBudget = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					className="bg-slate-100 p-10 rounded-md
            items-center flex flex-col border-2 border-dashed
            cursor-pointer hover:shadow-md"
				>
					<h2 className="text-3xl">+</h2>
					<h2>Create New Budget</h2>
				</div>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create New Budget</DialogTitle>
					<DialogDescription>
						<div className="mt-5">
							<Button variant="outline" className="text-lg">
								emoji
							</Button>
							<div className="absolute z-20">
								<EmojiPicker open={false} />
							</div>
							<div className="mt-2">
								<h2 className="text-black font-medium my-1">Name</h2>
								<Input placeholder="ex. home decor.," />
							</div>
							<div className="mt-2">
								<h2 className="text-black font-medium my-1">Amount</h2>
								<Input placeholder="$ 400" type="number" />
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button disabled={false} className="mt-5 w-full">
							Create Budget
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default CreateBudget;
