
import { formatCurrency, formatCurrencyLocale } from "../helpers/currency";

const usePrice = (price: number = 0, locale: boolean = true): string => {
	if (typeof price !== "number") return "No Price";

	if (locale) return formatCurrencyLocale(price);

	return formatCurrency(price);
};

export default usePrice;
