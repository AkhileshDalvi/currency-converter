import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

const CurrencyConverter = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-4xl">Currency Converter</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 p-6">
					<div className="space-y-2">
						<label className="text-sm font-medium">From</label>
						<div className="flex space-x-2">
							<Input
								type="number"
								placeholder="0.00"
								className="flex-1"
							/>
							<Select defaultValue="USD">
								<SelectTrigger className="w-28">
									<SelectValue placeholder="Currency" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="USD">USD</SelectItem>
									<SelectItem value="EUR">EUR</SelectItem>
									<SelectItem value="GBP">GBP</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="flex justify-center">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full p-2"
						>
							<ArrowUpDown className="h-4 w-4" />
							<span className="sr-only">Swap currencies</span>
						</Button>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">To</label>
						<div className="flex space-x-2">
							<Input
								type="number"
								placeholder="0.00"
								className="flex-1"
								readOnly
							/>
							<Select defaultValue="INR">
								<SelectTrigger className="w-28">
									<SelectValue placeholder="Currency" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="INR">INR</SelectItem>
									<SelectItem value="EUR">EUR</SelectItem>
									<SelectItem value="GBP">GBP</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<Button className="w-full">Convert from USD to INR</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default CurrencyConverter;
