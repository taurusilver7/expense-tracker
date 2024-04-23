import { Loader } from "lucide-react";

const Loading = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<Loader className="h-11 w-11 text-muted-foreground animate-spin" />
		</div>
	);
};

export default Loading;
