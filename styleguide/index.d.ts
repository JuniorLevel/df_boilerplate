import React from 'react';

declare module 'df_boilerplate-library' {
	export const FiltersSearchListWithPreview: React.ComponentType<{}>;
	export const MediaQuery: React.ComponentType<{}>;
	export const Flex: React.ComponentType<{}>;
	export const Badge: React.ComponentType<{}>;
	export const Row: React.ComponentType<{}>;
	export const Col: React.ComponentType<{}>;
	export const Layout: React.ComponentType<{
		children: React.ReactNode;
		buttons: any[];
		title: string;
		theme?: string;
		avatar: any;
	}>;
	export const FiltersClosed: React.ComponentType<{
		isOpen: boolean;
		filtersList: any;
	}>;
	export const Footer: React.ComponentType<{}>;
	export const OrderVersion: React.ComponentType<{
		filters: any;
	}>;
	export const Order: React.ComponentType<{}>;
	export const OrderTabs: React.ComponentType<{
		items: any;
	}>;
	export const OrderContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const ThemeWrapper: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersOpened: React.ComponentType<{
		isOpen: boolean;
		filtersCards: any[];
	}>;
	export const FiltersClosedListProvider: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListItem: React.ComponentType<{
		listData: any | null;
	}>;
	export const FiltersSearchListWithPreviewContainer: React.ComponentType<{
		children: React.ReactNode;
		height: number;
	}>;
	export const FiltersSearchListWithPreviewLeft: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListWithPreviewRight: React.ComponentType<{}>;
	export const FiltersSearchListWithPreviewLeftItem: React.ComponentType<{
		listData: any | null;
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
		imagesUrls: any[];
		children: React.ReactNode;
	}>;
	export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.ReactNode;
	}>;
	export const DiffClosedCardsPage: React.ComponentType<{}>;
	export const DiffOpenedCardsPage: React.ComponentType<{}>;
	export const FiltersClosedPage: React.ComponentType<{}>;
	export const FiltersClosedPreviewPage: React.ComponentType<{}>;
	export const FiltersOpenedPage: React.ComponentType<{}>;
	export const OrderPage: React.ComponentType<{}>;
	export const TimeWidgetsPage: React.ComponentType<{}>;
	export const WelcomePage1: React.ComponentType<{}>;
	export const WelcomePage2: React.ComponentType<{}>;
	export const WelcomePage3: React.ComponentType<{}>;
	export const WelcomePage4: React.ComponentType<{}>;
	export const WelcomePage5: React.ComponentType<{}>;
	export const WelcomePage6: React.ComponentType<{}>;
	export const WelcomePage7: React.ComponentType<{}>;
	export const WelcomePage8: React.ComponentType<{}>;
}

declare module '@juniorlevel/df_boilerplate-library' {
	export const FiltersSearchListWithPreview: React.ComponentType<{}>;
	export const MediaQuery: React.ComponentType<{}>;
	export const Flex: React.ComponentType<{}>;
	export const Badge: React.ComponentType<{}>;
	export const Row: React.ComponentType<{}>;
	export const Col: React.ComponentType<{}>;
	export const Layout: React.ComponentType<{
		children: React.ReactNode;
		buttons: any[];
		title: string;
		theme?: string;
		avatar: any;
	}>;
	export const FiltersClosed: React.ComponentType<{
		isOpen: boolean;
		filtersList: any;
	}>;
	export const Footer: React.ComponentType<{}>;
	export const OrderVersion: React.ComponentType<{
		filters: any;
	}>;
	export const Order: React.ComponentType<{}>;
	export const OrderTabs: React.ComponentType<{
		items: any;
	}>;
	export const OrderContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const ThemeWrapper: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersOpened: React.ComponentType<{
		isOpen: boolean;
		filtersCards: any[];
	}>;
	export const FiltersClosedListProvider: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListContainer: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListItem: React.ComponentType<{
		listData: any | null;
	}>;
	export const FiltersSearchListWithPreviewContainer: React.ComponentType<{
		children: React.ReactNode;
		height: number;
	}>;
	export const FiltersSearchListWithPreviewLeft: React.ComponentType<{
		children: React.ReactNode;
	}>;
	export const FiltersSearchListWithPreviewRight: React.ComponentType<{}>;
	export const FiltersSearchListWithPreviewLeftItem: React.ComponentType<{
		listData: any | null;
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
		imagesUrls: any[];
		children: React.ReactNode;
	}>;
	export const SingleImageBg: React.ComponentType<{
		imageUrl: string;
		children: React.ReactNode;
	}>;
	export const DiffClosedCardsPage: React.ComponentType<{}>;
	export const DiffOpenedCardsPage: React.ComponentType<{}>;
	export const FiltersClosedPage: React.ComponentType<{}>;
	export const FiltersClosedPreviewPage: React.ComponentType<{}>;
	export const FiltersOpenedPage: React.ComponentType<{}>;
	export const OrderPage: React.ComponentType<{}>;
	export const TimeWidgetsPage: React.ComponentType<{}>;
	export const WelcomePage1: React.ComponentType<{}>;
	export const WelcomePage2: React.ComponentType<{}>;
	export const WelcomePage3: React.ComponentType<{}>;
	export const WelcomePage4: React.ComponentType<{}>;
	export const WelcomePage5: React.ComponentType<{}>;
	export const WelcomePage6: React.ComponentType<{}>;
	export const WelcomePage7: React.ComponentType<{}>;
	export const WelcomePage8: React.ComponentType<{}>;
}
