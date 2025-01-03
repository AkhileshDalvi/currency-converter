import { useEffect, useState } from "react";

type CurrencyInfo = {
	[key: string]: number;
};

function useCurrencyInfo(currency: string) {
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
		)
			.then((res) => res.json())
			.then((res) => setData(res[currency]));
	}, [currency]);
	return data as CurrencyInfo;
}

export default useCurrencyInfo;
