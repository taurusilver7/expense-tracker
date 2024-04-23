import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<nav className="p-5 flex items-center justify-between border shadow-sm">
			<Image src="/logo.svg" alt="logo" width={160} height={100} />

			<div className="flex gap-3 items-center">
				<Link href="/dashboard">
					<Button variant="outline">Dashboard</Button>
				</Link>

				{/* <UserButton /> */}
				{true ? <p>User</p> : <Link href="/sign-in">Get Started</Link>}
			</div>
		</nav>
	);
};

export default Header;
