import React from 'react';

declare module 'df_boilerplate-library' {
	export const OrdersFilterOpened: React.ComponentType<{
		open: boolean;
		dialog: boolean;
		filters: any[];
	}>;
	export const Layout: React.ComponentType<{
		children: React.ReactNode;
		buttons?: any[];
		title?: string;
		theme?: string;
		avatar?: { title: string };
		footer?: React.ReactNode;
	}>;
	export const OrdersFilterClosed: React.ComponentType<{
		open: boolean;
		filters: any;
		dialog: boolean;
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
	}>;
	export const OrderListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const OrderListDiffContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const TimeWidgetsPanel: React.ComponentType<{}>;
	export const SelectAndPerson: React.ComponentType<{
		userRole: string;
		fio: string;
	}>;
	export const TextWidget: React.ComponentType<{
		text: string;
	}>;
	export const TimeWidgets1: React.ComponentType<{
		date: string;
	}>;
	export const TimeWidgets2: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets3: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets4: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets5: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets6: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets7: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets8: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgetsCustomClock: React.ComponentType<{}>;
	export const TimeWidgetsDateWithTimeBlock: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgetsDaysPanel: React.ComponentType<{}>;
	export const TimeWidgetsWeeksAndYearsPanel: React.ComponentType<{}>;
	export const SelectPersonRange: React.ComponentType<{
		fullDate: { date: string; time: string };
		userRole: string;
		fio: string;
	}>;
	export const TextTimeRange1: React.ComponentType<{
		text: string;
		fullDate: { date: string; time: string };
	}>;
	export const TextTimeRange2: React.ComponentType<{
		text: string;
		fullDate: { date: string; time: string };
	}>;
	export const TextTimeRange3: React.ComponentType<{
		text: string;
		fullDate: { date: string; time: string };
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
		onClick: () => void;
	}>;
	export const FourImagesBg: React.ComponentType<{
		imagesUrls: { id: number; url: string }[];
		children: React.ReactNode;
	}>;
	export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.ReactNode;
	}>;
	export const OrdersFilterDesktopDialog: React.ComponentType<{}>;
	export const OrdersFilterMobileDialog: React.ComponentType<{}>;
}

declare module '@juniorlevel/df_boilerplate-library' {
	export const OrdersFilterOpened: React.ComponentType<{
		open: boolean;
		dialog: boolean;
		filters: any[];
	}>;
	export const Layout: React.ComponentType<{
		children: React.ReactNode;
		buttons?: any[];
		title?: string;
		theme?: string;
		avatar?: { title: string };
		footer?: React.ReactNode;
	}>;
	export const OrdersFilterClosed: React.ComponentType<{
		open: boolean;
		filters: any;
		dialog: boolean;
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
	}>;
	export const OrderListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const OrderListDiffContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const TimeWidgetsPanel: React.ComponentType<{}>;
	export const SelectAndPerson: React.ComponentType<{
		userRole: string;
		fio: string;
	}>;
	export const TextWidget: React.ComponentType<{
		text: string;
	}>;
	export const TimeWidgets1: React.ComponentType<{
		date: string;
	}>;
	export const TimeWidgets2: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets3: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets4: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets5: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets6: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets7: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgets8: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgetsCustomClock: React.ComponentType<{}>;
	export const TimeWidgetsDateWithTimeBlock: React.ComponentType<{
		fullDate: { date: string; time: string };
	}>;
	export const TimeWidgetsDaysPanel: React.ComponentType<{}>;
	export const TimeWidgetsWeeksAndYearsPanel: React.ComponentType<{}>;
	export const SelectPersonRange: React.ComponentType<{
		fullDate: { date: string; time: string };
		userRole: string;
		fio: string;
	}>;
	export const TextTimeRange1: React.ComponentType<{
		text: string;
		fullDate: { date: string; time: string };
	}>;
	export const TextTimeRange2: React.ComponentType<{
		text: string;
		fullDate: { date: string; time: string };
	}>;
	export const TextTimeRange3: React.ComponentType<{
		text: string;
		fullDate: { date: string; time: string };
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
		onClick: () => void;
	}>;
	export const FourImagesBg: React.ComponentType<{
		imagesUrls: { id: number; url: string }[];
		children: React.ReactNode;
	}>;
	export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.ReactNode;
	}>;
	export const OrdersFilterDesktopDialog: React.ComponentType<{}>;
	export const OrdersFilterMobileDialog: React.ComponentType<{}>;
}
