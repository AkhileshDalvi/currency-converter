import CurrencyInput from "@/components/currency-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useCurrencyInfo from "@/hooks/useCurrencyInfo";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

const CurrencyConverter = () => {
	const [fromCurrency, setFromCurrency] = useState("usd");
	const [toCurrency, setToCurrency] = useState("inr");
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(fromCurrency);
	const options = Object.keys(currencyInfo);

	const swapAmount = () => {
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const swapCurrency = () => {
		setToCurrency(fromCurrency);
		setFromCurrency(toCurrency);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[toCurrency]);
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-4xl">💱 Currency Converter</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 p-6">
					<CurrencyInput
						label="From"
						amount={amount}
						currencyOptions={options}
						onAmountChange={(amount) => setAmount(amount)}
						onCurrencyChange={(currency) => setFromCurrency(currency)}
						selectCurrency={fromCurrency}
					/>
					<div className="flex justify-center gap-2 rounded-lg p-3">
						<Button
							variant="outline"
							onClick={swapAmount}
						>
							<ArrowUpDown className="h-4 w-4" />
							<span>Swap amount</span>
						</Button>
						<Button
							variant="outline"
							onClick={swapCurrency}
						>
							<ArrowUpDown className="h-4 w-4" />
							<span>Swap currency</span>
						</Button>
					</div>

					<CurrencyInput
						label="To"
						amount={convertedAmount}
						currencyOptions={options}
						onAmountChange={(amount) => setConvertedAmount(amount)}
						onCurrencyChange={(currency) => setToCurrency(currency)}
						selectCurrency={toCurrency}
						amountDisabled
					/>

					<Button
						className="w-full"
						onClick={convert}
					>
						Convert from {fromCurrency.toUpperCase()} to{" "}
						{toCurrency.toUpperCase()}
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default CurrencyConverter;
