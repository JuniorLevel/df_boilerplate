import { Flex, Row, Col, Badge } from 'antd';
import OrderPage from './templates/OrderPage/OrderPage';
import { Container as Layout } from './components/Container/Container';
import OrderVersion from './components/OrderTabs/OrderVersion/OrdersVersion';
import Order from './components/OrderTabs/Order/Order';
import OrderTabs from './components/OrderTabs/OrderTabs';
import OrderContainer from './components/OrderTabs/OrderContainer/OrderContainer';
import ThemeWrapper from './components/ThemeWrapper/ThemeWrapper';
import { GlobalStyle } from './components/global.styles';
import Footer from './components/Footer/Footer';
import FiltersClosed from './components/FiltersClosed/FiltersClosed';
import { FiltersClosedListProvider } from './context/FiltersClosedListContext/FiltersClosedListContext';
import FiltersSearchContainer from './components/FiltersSearch/FiltersSearchContainer/FiltersSearchContainer';
import FiltersSearchListItem from './components/FiltersSearch/FiltersSearchListItem/FiltersSearchListItem';
import FiltersSearchWithPreviewContainer from './components/FiltersSearchWithPreview/FiltersSearchWithPreviewContainer/FiltersSearchWithPreviewContainer';
import FiltersSearchListWithPreviewLeft from './components/FiltersSearchWithPreview/FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeft';
import FiltersSearchListWithPreviewRight from './components/FiltersSearchWithPreview/FiltersSearchWithPreviewRight/FiltersSearchWithPreviewRight';
import FiltersSearchListWithPreviewLeftItem from './components/FiltersSearchWithPreview/FiltersSearchWithPreviewLeft/FiltersSearchWithPreviewLeftItem/FiltersSearchWithPreviewLeftItem';
import FiltersOpened from './components/FiltersOpened/FiltersOpened';
import TimeWidgetsPanel from './components/TimeWidgetsPanel/TimeWidgetsPanel';
import PersonWidget from './components/TimeWidgetsPanel/PersonWidget/PersonWidget';
import TextFieldWidget from './components/TimeWidgetsPanel/TextFieldWidget/TextFieldWidget';
import TimeWidgets1 from './components/TimeWidgetsPanel/TimeWidgets1/TimeWidgets1';
import TimeWidgets2 from './components/TimeWidgetsPanel/TimeWidgets2/TimeWidgets2';
import TimeWidgets3 from './components/TimeWidgetsPanel/TimeWidgets3/TimeWidgets3';
import TimeWidgets4 from './components/TimeWidgetsPanel/TimeWidgets4/TimeWidgets4';
import TimeWidgets5 from './components/TimeWidgetsPanel/TimeWidgets5/TimeWidgets5';
import TimeWidgets6 from './components/TimeWidgetsPanel/TimeWidgets6/TimeWidgets6';
import TimeWidgets7 from './components/TimeWidgetsPanel/TimeWidgets7/TimeWidgets7';
import TimeWidgets8 from './components/TimeWidgetsPanel/TimeWidgets8/TimeWidgets8';
import TimeWidgetsCustomClock from './components/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsDateWithTimeBlock from './components/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import TimeWidgetsDaysPanel from './components/TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import TimeWidgetsWeeksAndYearsPanel from './components/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsWithPerson from './components/TimeWidgetsPanel/TimeWidgetsWithPerson/TimeWidgetsWithPerson';
import TimeWidgetsWithTextField1 from './components/TimeWidgetsPanel/TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import TimeWidgetsWithTextField2 from './components/TimeWidgetsPanel/TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import TimeWidgetsWithTextField3 from './components/TimeWidgetsPanel/TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';
import { WelcomeAuthButtons } from './components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from './components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { FourImagesBg } from './components/Welcome/FourImagesBg/FourImagesBg';
import { SingleImageBg } from './components/Welcome/SingleImageBg/SingleImageBg';
import TimeWidgetsPage from './templates/TimeWidgetsPage/TimeWidgetsPage';
import WelcomePage1 from './templates/WelcomePages/WelcomePage1/WelcomePage1';
import WelcomePage2 from './templates/WelcomePages/WelcomePage2/WelcomePage2';
import WelcomePage3 from './templates/WelcomePages/WelcomePage3/WelcomePage3';
import WelcomePage4 from './templates/WelcomePages/WelcomePage4/WelcomePage4';
import WelcomePage5 from './templates/WelcomePages/WelcomePage5/WelcomePage5';
import WelcomePage6 from './templates/WelcomePages/WelcomePage6/WelcomePage6';
import WelcomePage7 from './templates/WelcomePages/WelcomePage7/WelcomePage7';
import WelcomePage8 from './templates/WelcomePages/WelcomePage8/WelcomePage8';
import FiltersOpenedPage from './templates/FiltersOpenedPage/FiltersOpenedPage';
import FiltersClosedPreviewPage from './templates/FiltersClosedPreviewPage/FiltersClosedPreviewPage';
import FiltersClosedPage from './templates/FiltersClosedPage/FiltersClosedPage';
import DiffOpenedCardsPage from './templates/DiffOpenedCardsPage/DiffOpenedCardsPage';
import DiffClosedCardsPage from './templates/DiffClosedCardsPage/DiffClosedCardsPage';
import { Welcome } from './components/Welcome/Welcome';

export {
	DiffClosedCardsPage,
	DiffOpenedCardsPage,
	FiltersClosedPage,
	FiltersClosedPreviewPage,
	FiltersOpenedPage,
	OrderPage,
	TimeWidgetsPage,
	WelcomePage1,
	WelcomePage2,
	WelcomePage3,
	WelcomePage4,
	WelcomePage5,
	WelcomePage6,
	WelcomePage7,
	WelcomePage8,
	Layout,
	Footer,
	Flex,
	Row,
	Col,
	Badge,
	OrderVersion,
	Order,
	OrderTabs,
	OrderContainer,
	ThemeWrapper,
	GlobalStyle,
	FiltersOpened,
	FiltersClosed,
	FiltersClosedListProvider,
	FiltersSearchContainer,
	FiltersSearchListItem,
	FiltersSearchWithPreviewContainer,
	FiltersSearchListWithPreviewLeft,
	FiltersSearchListWithPreviewRight,
	FiltersSearchListWithPreviewLeftItem,
	TimeWidgetsPanel,
	PersonWidget,
	TextFieldWidget,
	TimeWidgets1,
	TimeWidgets2,
	TimeWidgets3,
	TimeWidgets4,
	TimeWidgets5,
	TimeWidgets6,
	TimeWidgets7,
	TimeWidgets8,
	TimeWidgetsCustomClock,
	TimeWidgetsDateWithTimeBlock,
	TimeWidgetsDaysPanel,
	TimeWidgetsWeeksAndYearsPanel,
	TimeWidgetsWithPerson,
	TimeWidgetsWithTextField1,
	TimeWidgetsWithTextField2,
	TimeWidgetsWithTextField3,
	Welcome,
	WelcomeAuthButtons,
	WelcomeButton,
	FourImagesBg,
	SingleImageBg,
};
