import React from 'react';

declare module 'df_boilerplate-library' {
	export const OrdersFilterOpened: React.ComponentType<{
		open: boolean;
		dialog: boolean;
		filters: any[];
	}>;
	export const Flex: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const Badge: React.ComponentType<{
		count: number;
	}>;
	export const Row: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const Col: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const Layout: React.ComponentType<{
		children: React.ReactNode;
		buttons?: any[];
		title?: string;
		theme?: string;
		avatar?: { title: string };
	}>;
	export const OrdersFilterClosed: React.ComponentType<{
		open: boolean;
		filters: any;
		dialog: boolean;
	}>;
	export const Pagination: React.ComponentType<{
		total: number;
	}>;
	export const Footer: React.ComponentType<{}>;
	export const OrderVersion: React.ComponentType<{
		filters: any;
	}>;
	export const Order: React.ComponentType<{}>;
	export const OrderPreview: React.ComponentType<{}>;
	export const OrderTabs: React.ComponentType<{
		items: any;
	}>;
	export const OrderContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const OrderListItem: React.ComponentType<{
		data?: any | null;
	}>;
	export const ThemeWrapper: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const OrdersFilterProvider: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListItem: React.ComponentType<{
		listData: any | null;
	}>;
	export const OrderListPreviewContainer: React.ComponentType<{
		children: React.ReactNode;
		height: number;
	}>;
	export const OrderListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const TimeWidgetsPanel: React.ComponentType<{}>;
	export const PersonWidget: React.ComponentType<{
		userRole: string;
		fio: string;
	}>;
	export const TextFieldWidget: React.ComponentType<{
		text: string;
	}>;
	export const TimeWidgets1: React.ComponentType<{
		date: string;
	}>;
	export const TimeWidgets2: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets3: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets4: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets5: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets6: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets7: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets8: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsCustomClock: React.ComponentType<{}>;
	export const TimeWidgetsDateWithTimeBlock: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsDaysPanel: React.ComponentType<{}>;
	export const TimeWidgetsWeeksAndYearsPanel: React.ComponentType<{}>;
	export const TimeWidgetsWithPerson: React.ComponentType<{
		fullDate: any;
		userRole: string;
		fio: string;
	}>;
	export const TimeWidgetsWithTextField1: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsWithTextField2: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsWithTextField3: React.ComponentType<{
		fullDate: any;
	}>;
	export const Welcome: React.ComponentType<{
		children: React.ReactNode;
		buttons: any[];
	}>;
	export const WelcomeAuthButtons: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const WelcomeButton: React.ComponentType<{
		title: string;
		onClick: () => {};
	}>;
	export const FourImagesBg: React.ComponentType<{
		imagesUrls: { id: number; url: string }[];
		children: React.ReactNode;
	}>;
	export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.ReactNode;
	}>;
}

declare module '@juniorlevel/df_boilerplate-library' {
	export const OrdersFilterOpened: React.ComponentType<{
		open: boolean;
		dialog: boolean;
		filters: any[];
	}>;
	export const Flex: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const Badge: React.ComponentType<{
		count: number;
	}>;
	export const Row: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const Col: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const Layout: React.ComponentType<{
		children: React.ReactNode;
		buttons?: any[];
		title?: string;
		theme?: string;
		avatar?: { title: string };
	}>;
	export const OrdersFilterClosed: React.ComponentType<{
		open: boolean;
		filters: any;
		dialog: boolean;
	}>;
	export const Pagination: React.ComponentType<{
		total: number;
	}>;
	export const Footer: React.ComponentType<{}>;
	export const OrderVersion: React.ComponentType<{
		filters: any;
	}>;
	export const Order: React.ComponentType<{}>;
	export const OrderPreview: React.ComponentType<{}>;
	export const OrderTabs: React.ComponentType<{
		items: any;
	}>;
	export const OrderContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const OrderListItem: React.ComponentType<{
		data?: any | null;
	}>;
	export const ThemeWrapper: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const OrdersFilterProvider: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListItem: React.ComponentType<{
		listData: any | null;
	}>;
	export const OrderListPreviewContainer: React.ComponentType<{
		children: React.ReactNode;
		height: number;
	}>;
	export const OrderListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const TimeWidgetsPanel: React.ComponentType<{}>;
	export const PersonWidget: React.ComponentType<{
		userRole: string;
		fio: string;
	}>;
	export const TextFieldWidget: React.ComponentType<{
		text: string;
	}>;
	export const TimeWidgets1: React.ComponentType<{
		date: string;
	}>;
	export const TimeWidgets2: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets3: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets4: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets5: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets6: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets7: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgets8: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsCustomClock: React.ComponentType<{}>;
	export const TimeWidgetsDateWithTimeBlock: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsDaysPanel: React.ComponentType<{}>;
	export const TimeWidgetsWeeksAndYearsPanel: React.ComponentType<{}>;
	export const TimeWidgetsWithPerson: React.ComponentType<{
		fullDate: any;
		userRole: string;
		fio: string;
	}>;
	export const TimeWidgetsWithTextField1: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsWithTextField2: React.ComponentType<{
		fullDate: any;
	}>;
	export const TimeWidgetsWithTextField3: React.ComponentType<{
		fullDate: any;
	}>;
	export const Welcome: React.ComponentType<{
		children: React.ReactNode;
		buttons: any[];
	}>;
	export const WelcomeAuthButtons: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const WelcomeButton: React.ComponentType<{
		title: string;
		onClick: () => {};
	}>;
	export const FourImagesBg: React.ComponentType<{
		imagesUrls: { id: number; url: string }[];
		children: React.ReactNode;
	}>;
	export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.ReactNode;
	}>;
}
