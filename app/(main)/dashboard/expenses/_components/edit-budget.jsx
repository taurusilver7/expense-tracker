"use client";
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
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { Input } from "@/components/ui/input";

const EditBudget = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="flex gap-2">
						<PenBox />
						Edit
					</Button>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>Update Budget</DialogTitle>
						<DialogDescription>
							<div className="mt-5">
								<Button variant="outline" className="text-lg">
									Emoji
								</Button>

								<EmojiPicker open={false} />
							</div>
							<div className="mt-2">
								<h2 className="text-black font-medium my-1">
									Budget Name
								</h2>
								<Input placeholder="eg, Home, Decor..," />
							</div>
							<div className="mt-2">
								<h2 className="text-black font-medium my-1">
									Budget Amount
								</h2>
								<Input type="number" placeholder="$ 500" />
							</div>
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="sm:justify-start">
						<DialogClose asChild>
							<Button disabled={false}>Update Budget</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default EditBudget;
