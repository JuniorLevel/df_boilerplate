import { Flex, Row, Col, Badge, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import { OrderPage } from '../OrderPage/OrderPage';
import { Layout } from './components/Layout/Layout';
import { OrderVersion } from './components/OrderTabs/OrderVersion/OrdersVersion';
import { OrderPreview } from './components/OrderTabs/OrderPreview/OrderPreview';
import { OrderTabs } from './components/OrderTabs/OrderTabs';
import { OrderContainer } from './components/OrderTabs/OrderContainer/OrderContainer';
import { ThemeWrapper } from './components/ThemeWrapper/ThemeWrapper';
import { GlobalStyle } from '../global.styles';
import { Footer } from './components/Footer/Footer';
import { OrdersFilterClosed } from './components/OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListProvider } from './components/context/OrderListContext/OrderListContext';
import { FiltersSearchListContainer } from './components/FiltersSearchList/FiltersSearchListContainer/FiltersSearchListContainer';
import { FiltersSearchListItem } from './components/FiltersSearchList/FiltersSearchListItem/FiltersSearchListItem';
import { OrderListPreviewContainer } from './components/OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { OrderListContainer } from './components/OrderListPreview/OrderListContainer/OrderListContainer';
import { Order } from './components/OrderListPreview/Order/Order';
import { OrdersFilterOpened } from './components/OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { TimeWidgetsPanel } from './components/TimeWidgetsPanel/TimeWidgetsPanel';
import { PersonWidget } from './components/TimeWidgetsPanel/PersonWidget/PersonWidget';
import { TextFieldWidget } from './components/TimeWidgetsPanel/TextFieldWidget/TextFieldWidget';
import { TimeWidgets1 } from './components/TimeWidgetsPanel/TimeWidgets1/TimeWidgets1';
import { TimeWidgets2 } from './components/TimeWidgetsPanel/TimeWidgets2/TimeWidgets2';
import { TimeWidgets3 } from './components/TimeWidgetsPanel/TimeWidgets3/TimeWidgets3';
import { TimeWidgets4 } from './components/TimeWidgetsPanel/TimeWidgets4/TimeWidgets4';
import { TimeWidgets5 } from './components/TimeWidgetsPanel/TimeWidgets5/TimeWidgets5';
import { TimeWidgets6 } from './components/TimeWidgetsPanel/TimeWidgets6/TimeWidgets6';
import { TimeWidgets7 } from './components/TimeWidgetsPanel/TimeWidgets7/TimeWidgets7';
import { TimeWidgets8 } from './components/TimeWidgetsPanel/TimeWidgets8/TimeWidgets8';
import { TimeWidgetsCustomClock } from './components/TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from './components/TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsDaysPanel } from './components/TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import { TimeWidgetsWeeksAndYearsPanel } from './components/TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsWithPerson } from './components/TimeWidgetsPanel/TimeWidgetsWithPerson/TimeWidgetsWithPerson';
import { TimeWidgetsWithTextField1 } from './components/TimeWidgetsPanel/TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import { TimeWidgetsWithTextField2 } from './components/TimeWidgetsPanel/TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import { TimeWidgetsWithTextField3 } from './components/TimeWidgetsPanel/TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';
import { WelcomeAuthButtons } from './components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from './components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { FourImagesBg } from './components/Welcome/FourImagesBg/FourImagesBg';
import { SingleImageBg } from './components/Welcome/SingleImageBg/SingleImageBg';
import { TimeWidgetsPage } from '../TimeWidgetsPage/TimeWidgetsPage';
import { WelcomePage1 } from '../WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from '../WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from '../WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from '../WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from '../WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from '../WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from '../WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from '../WelcomePages/WelcomePage8/WelcomePage8';
import { DiffOpenedCardsPage } from '../DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from '../DiffClosedCardsPage/DiffClosedCardsPage';
import { Welcome } from './components/Welcome/Welcome';
import { HomeDev } from './components/HomeDev/HomeDev';
import { OrdersFilterOpenedPage } from '../OrdersFilterOpenedPage/OrdersFilterOpenedPage';
import { OrderListPreviewPage } from '../OrderListPreviewPage/OrderListPreviewPage';
import { OrdersFilterClosedPage } from '../OrdersFilterClosedPage/OrdersFilterClosedPage';
import { OrderListItem } from './components/OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';

export {
	Flex,
	Row,
	Col,
	Badge,
	Pagination,
	MediaQuery,
	OrderPage,
	Layout,
	OrderVersion,
	OrderPreview,
	OrderTabs,
	OrderContainer,
	OrderListItem,
	ThemeWrapper,
	GlobalStyle,
	Footer,
	OrdersFilterClosed,
	OrderListProvider,
	FiltersSearchListContainer,
	FiltersSearchListItem,
	OrderListPreviewContainer,
	OrderListContainer,
	Order,
	OrdersFilterOpened,
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
	WelcomeAuthButtons,
	WelcomeButton,
	FourImagesBg,
	SingleImageBg,
	TimeWidgetsPage,
	WelcomePage1,
	WelcomePage2,
	WelcomePage3,
	WelcomePage4,
	WelcomePage5,
	WelcomePage6,
	WelcomePage7,
	WelcomePage8,
	DiffOpenedCardsPage,
	DiffClosedCardsPage,
	Welcome,
	HomeDev,
	OrdersFilterOpenedPage,
	OrderListPreviewPage,
	OrdersFilterClosedPage,
};
