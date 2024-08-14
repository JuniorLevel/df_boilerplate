import { Flex, Row, Col, Badge } from 'antd';
import { OrderPage } from '../styleguide/templates/OrderPage/OrderPage';
import { Layout } from './components/Layout/Layout';
import { OrderVersion } from './components/OrderTabs/OrderVersion/OrdersVersion';
import { Order } from './components/OrderTabs/Order/Order';
import { OrderTabs } from './components/OrderTabs/OrderTabs';
import { OrderContainer } from './components/OrderTabs/OrderContainer/OrderContainer';
import { ThemeWrapper } from './components/ThemeWrapper/ThemeWrapper';
import { GlobalStyle } from './components/global.styles';
import { Footer } from './components/Footer/Footer';
import { FiltersClosed } from './components/FiltersClosed/FiltersClosed';
import { FiltersClosedListProvider } from './context/FiltersClosedListContext/FiltersClosedListContext';
import { FiltersSearchListContainer } from './components/FiltersSearchList/FiltersSearchListContainer/FiltersSearchListContainer';
import { FiltersSearchListItem } from './components/FiltersSearchList/FiltersSearchListItem/FiltersSearchListItem';
import { FiltersSearchListWithPreviewContainer } from './components/FiltersSearchListWithPreview/FiltersSearchListWithPreviewContainer/FiltersSearchListWithPreviewContainer';
import { FiltersSearchListWithPreviewLeft } from './components/FiltersSearchListWithPreview/FiltersSearchListWithPreviewLeft/FiltersSearchListWithPreviewLeft';
import { FiltersSearchListWithPreviewRight } from './components/FiltersSearchListWithPreview/FiltersSearchListWithPreviewRight/FiltersSearchListWithPreviewRight';
import { FiltersSearchListWithPreviewLeftItem } from './components/FiltersSearchListWithPreview/FiltersSearchListWithPreviewLeft/FiltersSearchListWithPreviewLeftItem/FiltersSearchListWithPreviewLeftItem';
import { FiltersOpened } from './components/FiltersOpened/FiltersOpened';
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
import { TimeWidgetsPage } from '../styleguide/templates/TimeWidgetsPage/TimeWidgetsPage';
import { WelcomePage1 } from '../styleguide/templates/WelcomePages/WelcomePage1/WelcomePage1';
import { WelcomePage2 } from '../styleguide/templates/WelcomePages/WelcomePage2/WelcomePage2';
import { WelcomePage3 } from '../styleguide/templates/WelcomePages/WelcomePage3/WelcomePage3';
import { WelcomePage4 } from '../styleguide/templates/WelcomePages/WelcomePage4/WelcomePage4';
import { WelcomePage5 } from '../styleguide/templates/WelcomePages/WelcomePage5/WelcomePage5';
import { WelcomePage6 } from '../styleguide/templates/WelcomePages/WelcomePage6/WelcomePage6';
import { WelcomePage7 } from '../styleguide/templates/WelcomePages/WelcomePage7/WelcomePage7';
import { WelcomePage8 } from '../styleguide/templates/WelcomePages/WelcomePage8/WelcomePage8';
import { FiltersOpenedPage } from '../styleguide/templates/FiltersOpenedPage/FiltersOpenedPage';
import { FiltersClosedPreviewPage } from '../styleguide/templates/FiltersClosedPreviewPage/FiltersClosedPreviewPage';
import { FiltersClosedPage } from '../styleguide/templates/FiltersClosedPage/FiltersClosedPage';
import { DiffOpenedCardsPage } from '../styleguide/templates/DiffOpenedCardsPage/DiffOpenedCardsPage';
import { DiffClosedCardsPage } from '../styleguide/templates/DiffClosedCardsPage/DiffClosedCardsPage';
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
	FiltersSearchListContainer,
	FiltersSearchListItem,
	FiltersSearchListWithPreviewContainer,
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
