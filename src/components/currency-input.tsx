import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useId } from "react";

interface CurrencyInputProps {
	label: string; // Label for the input
	amount: number; // Numeric value for the amount
	onAmountChange: (value: number) => void; // Callback function triggered when amount changes
	onCurrencyChange: (value: string) => void; // Callback function triggered when currency changes
	currencyOptions?: string[]; // Array of currency options for a dropdown (default is an empty array)
	selectCurrency?: string; // Selected currency code (default is "usd")
	amountDisabled?: boolean; // Boolean to disable the amount input (default is false)
	currencyDisabled?: boolean; // Boolean to disable the currency dropdown (default is false)
	className?: string; // Additional CSS class names (default is an empty string)
}

const CurrencyInput = ({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "usd",
	amountDisabled = false,
	currencyDisabled = false,
	className = "",
}: CurrencyInputProps) => {
	const amountInputId = useId();

	return (
		<div className={cn("space-y-2 border rounded-lg p-3", className)}>
			<label
				htmlFor={amountInputId}
				className="text-sm font-medium"
			>
				{label}
			</label>
			<div className="flex space-x-2">
				<Input
					id={amountInputId}
					type="number"
					placeholder="0.00"
					className="flex-1"
					disabled={amountDisabled}
					value={amount}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					}
				/>
				<Select
					value={selectCurrency}
					onValueChange={(e) => onCurrencyChange && onCurrencyChange(e)}
					disabled={currencyDisabled}
				>
					<SelectTrigger className="w-28">
						<SelectValue placeholder="Currency" />
					</SelectTrigger>
					<SelectContent>
						{currencyOptions.map((currency) => (
							<SelectItem
								key={currency}
								value={currency}
							>
								{currency.toUpperCase()}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default CurrencyInput;
