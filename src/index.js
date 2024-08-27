import { Flex, Row, Col, Badge, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import { OrderListContainer } from './OrderListPreview/OrderListContainer/OrderListContainer';
import { OrderVersion } from './OrderTabs/OrderVersion/OrdersVersion';
import { OrderPreview } from './OrderTabs/OrderPreview/OrderPreview';
import { OrderTabs } from './OrderTabs/OrderTabs';
import { OrderContainer } from './OrderTabs/OrderContainer/OrderContainer';
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './global.styles';
import { Footer } from './Footer/Footer';
import { OrdersFilterClosed } from './OrdersFilter/OrdersFilterClosed/OrdersFilterClosed';
import { OrderListProvider } from './context/OrderListContext/OrderListContext';
import { FiltersSearchListContainer } from './FiltersSearchList/FiltersSearchListContainer/FiltersSearchListContainer';
import { FiltersSearchListItem } from './FiltersSearchList/FiltersSearchListItem/FiltersSearchListItem';
import { OrderListPreviewContainer } from './OrderListPreview/OrderListPreviewContainer/OrderListPreviewContainer';
import { Order } from './OrderListPreview/Order/Order';
import { OrdersFilterOpened } from './OrdersFilter/OrdersFilterOpened/OrdersFilterOpened';
import { TimeWidgetsPanel } from './TimeWidgetsPanel/TimeWidgetsPanel';
import { PersonWidget } from './TimeWidgetsPanel/PersonWidget/PersonWidget';
import { TextFieldWidget } from './TimeWidgetsPanel/TextFieldWidget/TextFieldWidget';
import { TimeWidgets1 } from './TimeWidgetsPanel/TimeWidgets1/TimeWidgets1';
import { TimeWidgets2 } from './TimeWidgetsPanel/TimeWidgets2/TimeWidgets2';
import { TimeWidgets3 } from './TimeWidgetsPanel/TimeWidgets3/TimeWidgets3';
import { TimeWidgets4 } from './TimeWidgetsPanel/TimeWidgets4/TimeWidgets4';
import { TimeWidgets5 } from './TimeWidgetsPanel/TimeWidgets5/TimeWidgets5';
import { TimeWidgets6 } from './TimeWidgetsPanel/TimeWidgets6/TimeWidgets6';
import { TimeWidgets7 } from './TimeWidgetsPanel/TimeWidgets7/TimeWidgets7';
import { TimeWidgets8 } from './TimeWidgetsPanel/TimeWidgets8/TimeWidgets8';
import { TimeWidgetsCustomClock } from './TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import { TimeWidgetsDateWithTimeBlock } from './TimeWidgetsPanel/TimeWidgetsDateWithTimeBlock/TimeWidgetsDateWithTimeBlock';
import { TimeWidgetsDaysPanel } from './TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import { TimeWidgetsWeeksAndYearsPanel } from './TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import { TimeWidgetsWithPerson } from './TimeWidgetsPanel/TimeWidgetsWithPerson/TimeWidgetsWithPerson';
import { TimeWidgetsWithTextField1 } from './TimeWidgetsPanel/TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import { TimeWidgetsWithTextField2 } from './TimeWidgetsPanel/TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import { TimeWidgetsWithTextField3 } from './TimeWidgetsPanel/TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';
import { WelcomeAuthButtons } from './Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from './Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { FourImagesBg } from './Welcome/FourImagesBg/FourImagesBg';
import { SingleImageBg } from './Welcome/SingleImageBg/SingleImageBg';
import { Welcome } from './Welcome/Welcome';
import { OrderListItem } from './OrderListPreview/OrderListContainer/OrderListItem/OrderListItem';

export {
	Flex,
	Row,
	Col,
	Badge,
	Pagination,
	MediaQuery,
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
	Welcome,
};
