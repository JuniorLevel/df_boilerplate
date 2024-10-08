// @flow
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Col, Row } from 'antd';
import { ThemeWrapper } from './ThemeWrapper/ThemeWrapper';
import { TextTimeRange3 } from './TimeWidgetsPanel/TextTimeRange3/TextTimeRange3';
import { WidgetContainer } from './CardElement/WidgetContainer/WidgetContainer';
import { CardTitle } from './CardElement/CardTitle/CardTitle';
import { CardElement } from './CardElement/CardElement';
import { SelectPersonRange } from './TimeWidgetsPanel/SelectPersonRange/SelectPersonRange';
import { TimeRangeWidget } from './TimeWidgetsPanel/TimeRangeWidget/TimeRangeWidget';
import { TextWidget } from './TimeWidgetsPanel/TextWidget/TextWidget';
import { TimeWidget } from './TimeWidgetsPanel/TimeWidget/TimeWidget';
import { SelectAndPerson } from './TimeWidgetsPanel/SelectAndPerson/SelectAndPerson';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<ThemeWrapper>
			<CardElement title={<CardTitle />}>
				<Row>
					<Col span={24}>
						<WidgetContainer>
							<TextTimeRange3
								text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf"
								fullDate={{ date: '13.08.99', time: '20:55:55' }}
							/>
						</WidgetContainer>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<WidgetContainer>
							<TimeRangeWidget
								fullDate={{ date: '13.08.99', time: '20:55:55' }}
							>
								<TextWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
							</TimeRangeWidget>
						</WidgetContainer>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<WidgetContainer>
							<SelectPersonRange
								fullDate={{ date: '13.08.99', time: '20:55:55' }}
								userRole="Assigned"
								fio="FIO FIO FIO FIO"
							/>
						</WidgetContainer>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<WidgetContainer>
							<TimeWidget fullDate={{ date: '13.08.99', time: '20:55:55' }}>
								<SelectAndPerson userRole="Assigned" fio="FIO FIO FIO FIO" />
							</TimeWidget>
						</WidgetContainer>
					</Col>
				</Row>
			</CardElement>
		</ThemeWrapper>
	</StrictMode>
);
