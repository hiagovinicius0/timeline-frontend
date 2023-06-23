import { Breakpoints } from "@skynexui/responsive_stylesheet";

type ResponsiveProps<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
	fontFamily?: ResponsiveProps<string> | string;
	backgroundColor?: ResponsiveProps<string> | string;
	[key: string]: any;
}
