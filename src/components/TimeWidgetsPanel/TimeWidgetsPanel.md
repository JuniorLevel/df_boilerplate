Данный компонент включает себя различные варианты виджетов.
<br>
<br>
Пример использования TimeWidgetsPanel

```jsx static
// @flow

import React from 'react';
import styled from 'styled-components';
import TextFieldWidget from './TextFieldWidget/TextFieldWidget';
import TimeWidgets1 from './TimeWidgets1/TimeWidgets1';
import TimeWidgets2 from './TimeWidgets2/TimeWidgets2';
import TimeWidgets3 from './TimeWidgets3/TimeWidgets3';
import TimeWidgets4 from './TimeWidgets4/TimeWidgets4';
import TimeWidgets5 from './TimeWidgets5/TimeWidgets5';
import TimeWidgets6 from './TimeWidgets6/TimeWidgets6';
import TimeWidgets7 from './TimeWidgets7/TimeWidgets7';
import TimeWidgetsWithTextField1 from './TimeWidgetsWithTextField1/TimeWidgetsWithTextField1';
import TimeWidgetsWithTextField2 from './TimeWidgetsWithTextField2/TimeWidgetsWithTextField2';
import TimeWidgetsWithTextField3 from './TimeWidgetsWithTextField3/TimeWidgetsWithTextField3';
import PersonWidget from './PersonWidget/PersonWidget';
import TimeWidgetsWithPerson from './TimeWidgetsWithPerson/TimeWidgetsWithPerson';

const StyledDiv = styled.div`
	margin-bottom: 20px;
`;

const TimeWidgetsPanel = (): React$MixedElement => (
	<div style={{ padding: '10px' }}>
		<StyledDiv>
			<TimeWidgets1 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets2 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets3 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets4 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets5 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets6 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgets7 />
		</StyledDiv>
		<StyledDiv
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithTextField1 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithTextField2 />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithTextField3 />
		</StyledDiv>
		<StyledDiv>
			<PersonWidget />
		</StyledDiv>
		<StyledDiv>
			<TimeWidgetsWithPerson />
		</StyledDiv>
	</div>
);

export default TimeWidgetsPanel;
```

<br>
<br>
Компонент TimeWidgets1
<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Flex, Progress, Typography } from 'antd';
import MediaQuery from 'react-responsive';

const TimeWidgets1XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={640}>
			<Flex
				wrap
				style={{
					border: '1px solid black',
				}}
				gap={5}
			>
				<Flex
					gap={10}
					align="center"
					style={{
						border: '1px solid black',
						padding: '15px',
						fontSize: '2em',
					}}
				>
					<Text>13</Text>
					<Text>августа</Text>
					<Text>1999</Text>
				</Flex>
				<Flex
					style={{
						border: '1px solid black',
						padding: '5px',
					}}
				>
					<Flex
						style={{
							border: '1px solid black',
							padding: '5px',
						}}
					>
						<Progress
							size={{ width: 10, height: 50 }}
							percent={100}
							steps={31}
							showInfo={false}
						/>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets1XL;
```

<br>
<br>

```
// @flow

import React from 'react';
import { Flex, Progress, Typography } from 'antd';

const { Text } = Typography;
<Flex
	wrap
	style={{
		border: '1px solid black',
	}}
	gap={5}
>
	<Flex
		gap={10}
		align="center"
		style={{
			border: '1px solid black',
			padding: '15px',
			fontSize: '2em',
		}}
	>
		<Text>13</Text>
		<Text>августа</Text>
		<Text>1999</Text>
	</Flex>
	<Flex
		style={{
			border: '1px solid black',
			padding: '5px',
		}}
	>
		<Flex
			style={{
				border: '1px solid black',
				padding: '5px',
			}}
		>
			<Progress
				size={{ width: 10, height: 50 }}
				percent={100}
				steps={31}
				showInfo={false}
			/>
		</Flex>
	</Flex>
</Flex>;
```

<br>
<br>
Компонент TimeWidgets2
<br>
<br>

```jsx static
// @flow
import React, { useState } from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDaysPanel from '../../TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidgets2XL = (): React$MixedElement => {
	const { Text } = Typography;
	const [isShowWeeksPanel] = useState(false);

	return (
		<MediaQuery minWidth={865}>
			<Flex wrap style={{ border: '1px solid black' }} gap={5}>
				<Flex wrap gap={10} align="center" style={{ padding: '5px' }}>
					<Flex gap={10}>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							13
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							08
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							99
						</Text>
					</Flex>
					<Flex gap={10}>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							20
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							55
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							55
						</Text>
					</Flex>
				</Flex>
				<Flex align="center" style={{ padding: '5px' }}>
					<Flex wrap align="center" gap={10}>
						<div style={{ border: '1px solid black', padding: '5px' }}>
							{isShowWeeksPanel ? (
								<TimeWidgetsWeeksAndYearsPanel />
							) : (
								<TimeWidgetsDaysPanel />
							)}
						</div>
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets2XL;
```

<br>
<br>

```
import React, { useState } from 'react';
import { Flex, Typography } from 'antd';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TimeWidgetsDaysPanel from '../TimeWidgetsPanel/TimeWidgetsDaysPanel/TimeWidgetsDaysPanel';
import TimeWidgetsCustomClock from '../TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const { Text } = Typography;
const [isShowWeeksPanel] = useState(false);

<Flex wrap style={{ border: '1px solid black' }} gap={5}>
	<Flex wrap gap={10} align="center" style={{ padding: '5px' }}>
		<Flex gap={10}>
			<Text
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				13
			</Text>
			<Text
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				08
			</Text>
			<Text
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				99
			</Text>
		</Flex>
		<Flex gap={10}>
			<Text
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				20
			</Text>
			<Text
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				55
			</Text>
			<Text
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				55
			</Text>
		</Flex>
	</Flex>
	<Flex align="center" style={{ padding: '5px' }}>
		<Flex wrap align="center" gap={10}>
			<div style={{ border: '1px solid black', padding: '5px' }}>
				{isShowWeeksPanel ? (
					<TimeWidgetsWeeksAndYearsPanel />
				) : (
					<TimeWidgetsDaysPanel />
				)}
			</div>
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
</Flex>;
```

<br>
<br>
Компонент TimeWidgets3
<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Flex, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';

const TimeWidgets3 = (): React$MixedElement => {
	const { Text } = Typography;
	const isMobile = useMediaQuery({
		query: '(max-width: 375px)',
	});
	return (
		<Flex
			wrap
			gap={10}
			align="center"
			justify={isMobile ? 'center' : 'start'}
			style={{
				padding: '5px',
				border: '1px solid black',
			}}
		>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
	);
};

export default TimeWidgets3;
```

<br>
<br>

```
import React from 'react';
import { Flex, Typography } from 'antd';

const { Text } = Typography;
<Flex
	wrap
	gap={10}
	align="center"
	style={{
		padding: '5px',
		border: '1px solid black',
	}}
>
	<Flex gap={10}>
		<Text
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			13
		</Text>
		<Text
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			08
		</Text>
		<Text
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			99
		</Text>
	</Flex>
	<Flex gap={10}>
		<Text
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			20
		</Text>
		<Text
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			55
		</Text>
		<Text
			style={{
				border: '1px solid black',
				padding: '10px',
			}}
		>
			55
		</Text>
	</Flex>
</Flex>;
```

<br>
<br>
Компонент TimeWidgets4
<br>
<br>

```jsx static
// @flow

import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';

import React from 'react';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets4XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={1003}>
			<Flex wrap justify="space-between" style={{ border: '1px solid black' }}>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<Flex wrap gap={10}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
				<Flex
					wrap
					gap={10}
					align="center"
					justify="space-between"
					style={{ padding: '5px', flex: '0 1 50%' }}
				>
					<TimeWidgetsWeeksAndYearsPanel />
					<Flex wrap gap={10}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								23
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								09
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets4XL;
```

<br>
<br>

```jsx
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';

import React from 'react';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;
<Flex wrap justify="space-between" style={{ border: '1px solid black' }}>
	<Flex
		wrap
		gap={10}
		align="center"
		justify="space-between"
		style={{ padding: '5px', flex: '0 1 50%' }}
	>
		<Flex wrap gap={10}>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
		<TimeWidgetsWeeksAndYearsPanel />
	</Flex>
	<Flex
		wrap
		gap={10}
		align="center"
		justify="space-between"
		style={{ padding: '5px', flex: '0 1 50%' }}
	>
		<TimeWidgetsWeeksAndYearsPanel />
		<Flex wrap gap={10}>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					23
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					09
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
	</Flex>
</Flex>;
```

<br>
<br>
Компонент TimeWidgets5
<br>
<br>

```jsx static
// @flow

import { Flex, Typography } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets5SmToLG = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery maxWidth={1389}>
			<Flex
				wrap
				gap={10}
				justify="space-evenly"
				style={{ border: '1px solid black' }}
			>
				<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
					<Flex vertical gap={10} wrap justify="center">
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
				</Flex>
				<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
					<Flex wrap gap={10} justify="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsWeeksAndYearsPanel />
					</Flex>
					<Flex vertical gap={10} style={{ order: -1 }} wrap justify="center">
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								23
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								09
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets5SmToLG;
```

<br>
<br>

```jsx
// @flow
import { Flex, Typography } from 'antd';
import React from 'react';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;
<Flex
	wrap
	gap={10}
	justify="space-evenly"
	style={{ border: '1px solid black' }}
>
	<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
		<Flex vertical gap={10} wrap justify="center">
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
		<Flex wrap gap={10} justify="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsWeeksAndYearsPanel />
		</Flex>
	</Flex>
	<Flex vertical gap={10} align="center" style={{ padding: '5px' }}>
		<Flex wrap gap={10} justify="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsWeeksAndYearsPanel />
		</Flex>
		<Flex vertical gap={10} style={{ order: -1 }} wrap justify="center">
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					23
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					09
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
	</Flex>
</Flex>;
```

<br>
<br>
Компонент TimeWidgets6
<br>
<br>

```jsx static
// @flow

import React from 'react';
import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const StyledDivYears = styled.div`
	background-color: blue;
`;

const TimeWidgets6XL = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={854}>
			<Flex
				wrap
				justify="space-between"
				align="center"
				style={{ border: '1px solid black', marginBottom: '20px' }}
			>
				<Flex wrap align="center" style={{ padding: '5px' }}>
					<Flex wrap gap={10}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex style={{ padding: '5px', border: '1px solid black' }}>
					<Flex gap={10}>
						<StyledDivYears
							style={{
								width: '30px',
								height: '30px',
								border: '1px solid black',
							}}
						/>
						<StyledDivYears
							style={{
								width: '30px',
								height: '30px',
								border: '1px solid black',
							}}
						/>
						<StyledDivYears
							style={{
								width: '30px',
								height: '30px',
								border: '1px solid black',
							}}
						/>
					</Flex>
				</Flex>
				<Flex wrap align="center" style={{ padding: '5px' }}>
					<Flex wrap gap={10}>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets6XL;
```

<br>
<br>

```jsx
import React from 'react';
import { Flex, Typography } from 'antd';
import styled from 'styled-components';

const StyledDivYears = styled.div`
	background-color: blue;
`;

const { Text } = Typography;
<Flex
	wrap
	justify="space-between"
	align="center"
	style={{ border: '1px solid black', marginBottom: '20px' }}
>
	<Flex wrap align="center" style={{ padding: '5px' }}>
		<Flex wrap gap={10}>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
	</Flex>
	<Flex style={{ padding: '5px', border: '1px solid black' }}>
		<Flex gap={10}>
			<StyledDivYears
				style={{
					width: '30px',
					height: '30px',
					border: '1px solid black',
				}}
			/>
			<StyledDivYears
				style={{
					width: '30px',
					height: '30px',
					border: '1px solid black',
				}}
			/>
			<StyledDivYears
				style={{
					width: '30px',
					height: '30px',
					border: '1px solid black',
				}}
			/>
		</Flex>
	</Flex>
	<Flex wrap align="center" style={{ padding: '5px' }}>
		<Flex wrap gap={10}>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
	</Flex>
</Flex>;
```

<br>
<br>
Компонент TimeWidgets7
<br>
<br>

```jsx static
// @flow

import { Flex, Progress, Typography } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const TimeWidget7LG = (): React$MixedElement => {
	const { Text } = Typography;
	return (
		<MediaQuery minWidth={710} maxWidth={1164}>
			<Flex
				vertical
				gap={10}
				align="center"
				style={{
					border: '1px solid black',
					marginBottom: '20px',
					padding: '5px',
				}}
			>
				<Flex gap={50}>
					<Flex
						vertical
						justify="center"
						align="center"
						gap={10}
						style={{ padding: '5px' }}
					>
						<Flex gap={10}>
							<Flex gap={10}>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									13
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									08
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									99
								</Text>
							</Flex>
							<Flex gap={10}>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									20
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									55
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									55
								</Text>
							</Flex>
						</Flex>
						<Flex wrap align="center" gap={10}>
							<Flex wrap gap={10}>
								<Flex gap={10}>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										23
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										08
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										99
									</Text>
								</Flex>
								<Flex gap={10}>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										20
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										55
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										55
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<TimeWidgetsCustomClock />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
				<Flex style={{ padding: '5px' }}>
					<Progress
						style={{ border: '1px solid black', padding: '5px' }}
						size={{ width: 17, height: 50 }}
						percent={100}
						steps={31}
						showInfo={false}
					/>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidget7LG;
```

<br>
<br>

```jsx
import { Flex, Progress, Typography } from 'antd';
import React from 'react';
import TimeWidgetsCustomClock from '../TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';

const { Text } = Typography;
<Flex
	vertical
	gap={10}
	align="center"
	style={{
		border: '1px solid black',
		marginBottom: '20px',
		padding: '5px',
	}}
>
	<Flex gap={50}>
		<Flex
			vertical
			justify="center"
			align="center"
			gap={10}
			style={{ padding: '5px' }}
		>
			<Flex gap={10}>
				<Flex gap={10}>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						13
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						08
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						99
					</Text>
				</Flex>
				<Flex gap={10}>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						20
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						55
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						55
					</Text>
				</Flex>
			</Flex>
			<Flex wrap align="center" gap={10}>
				<Flex wrap gap={10}>
					<Flex gap={10}>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							23
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							08
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							99
						</Text>
					</Flex>
					<Flex gap={10}>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							20
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							55
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							55
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
		<Flex vertical gap={10}>
			<TimeWidgetsCustomClock />
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
	<Flex style={{ padding: '5px' }}>
		<Progress
			style={{ border: '1px solid black', padding: '5px' }}
			size={{ width: 17, height: 50 }}
			percent={100}
			steps={31}
			showInfo={false}
		/>
	</Flex>
</Flex>;
```

Компонент TimeWidgets8
<br>
<br>

```jsx static
// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import { Flex, Typography } from 'antd';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgets8LG = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={1585} maxWidth={1423}>
			<Flex
				justify="space-between"
				align="center"
				style={{
					border: '1px solid black',
					padding: '5px',
				}}
			>
				<Flex gap={50}>
					<Flex vertical justify="center" gap={10} style={{ padding: '5px' }}>
						<Flex gap={10}>
							<Flex gap={10}>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									13
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									08
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									99
								</Text>
							</Flex>
							<Flex gap={10}>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									20
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									55
								</Text>
								<Text
									style={{
										border: '1px solid black',
										padding: '10px',
									}}
								>
									55
								</Text>
							</Flex>
						</Flex>
						<Flex wrap align="center" gap={10}>
							<Flex wrap gap={10}>
								<Flex gap={10}>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										23
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										08
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										99
									</Text>
								</Flex>
								<Flex gap={10}>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										20
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										55
									</Text>
									<Text
										style={{
											border: '1px solid black',
											padding: '10px',
										}}
									>
										55
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex vertical gap={10}>
						<TimeWidgetsCustomClock />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
				<Flex
					style={{
						border: '1px solid black',
						padding: '5px',
						margin: '0 50px',
					}}
				>
					<TimeWidgetsWeeksAndYearsPanel />
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgets8LG;
```

<br>
<br>

```jsx
// @flow

import React from 'react';
import { Flex, Typography } from 'antd';
import TimeWidgetsCustomClock from '../TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;

<Flex
	justify="space-between"
	align="center"
	style={{
		border: '1px solid black',
		padding: '5px',
	}}
>
	<Flex gap={50}>
		<Flex vertical justify="center" gap={10} style={{ padding: '5px' }}>
			<Flex gap={10}>
				<Flex gap={10}>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						13
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						08
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						99
					</Text>
				</Flex>
				<Flex gap={10}>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						20
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						55
					</Text>
					<Text
						style={{
							border: '1px solid black',
							padding: '10px',
						}}
					>
						55
					</Text>
				</Flex>
			</Flex>
			<Flex wrap align="center" gap={10}>
				<Flex wrap gap={10}>
					<Flex gap={10}>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							23
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							08
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							99
						</Text>
					</Flex>
					<Flex gap={10}>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							20
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							55
						</Text>
						<Text
							style={{
								border: '1px solid black',
								padding: '10px',
							}}
						>
							55
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
		<Flex vertical gap={10}>
			<TimeWidgetsCustomClock />
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
	<Flex
		style={{
			border: '1px solid black',
			padding: '5px',
			margin: '0 50px',
		}}
	>
		<TimeWidgetsWeeksAndYearsPanel />
	</Flex>
</Flex>;
```

Компонент TextFieldWidget
<br>
<br>

```jsx static
// @flow

import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface ITextFieldWidgetProps {
	text: string;
}

const { Paragraph } = Typography;
const StyledParagraph = styled(Paragraph)`
	border: 1px solid black;
	padding: 20px;
	background-color: white;
	color: black;
	height: 100%;
	margin: 0 !important;
`;

const TextFieldWidget = ({
	text,
}: ITextFieldWidgetProps): React$MixedElement => (
	<div
		style={{
			border: '1px solid black',
			padding: '10px',
			backgroundColor: 'grey',
			height: '100%',
		}}
	>
		<StyledParagraph>{text}</StyledParagraph>
	</div>
);

export default TextFieldWidget;
```

<br>
<br>

```jsx
import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Paragraph } = Typography;
const StyledParagraph = styled(Paragraph)`
	border: 1px solid black;
	padding: 20px;
	background-color: white;
	color: black;
	height: 100%;
	margin: 0 !important;
`;

<div
	style={{
		border: '1px solid black',
		padding: '10px',
		backgroundColor: 'grey',
		height: '100%',
	}}
>
	<StyledParagraph>
		Lorem safasfsafasf adsgfasfasfasf adsgfdhsfdhfd fdhfdhdfhdfhdf
	</StyledParagraph>
</div>;
```

Компонент TimeWidgetsWithTextField1
<br>
<br>

```jsx static
// @flow

import { Flex, Typography } from 'antd';
import MediaQuery from 'react-responsive';
import React from 'react';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const TimeWidgetsWithTextField1MD = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={658} maxWidth={834}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<Flex style={{ width: '100%', alignSelf: 'stretch' }}>
					<div style={{ width: '100%', alignSelf: 'stretch' }}>
						<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
					</div>
				</Flex>
				<Flex gap={10} vertical>
					<Flex gap={10} vertical align="center">
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
					<Flex gap={10} vertical align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgetsWithTextField1MD;
```

<br>
<br>

```jsx
// @flow

import { Flex, Typography } from 'antd';
import React from 'react';
import TextFieldWidget from '../TimeWidgetsPanel/TextFieldWidget/TextFieldWidget';
import TimeWidgetsCustomClock from '../TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';

const { Text } = Typography;

<Flex
	gap={10}
	align="center"
	style={{ border: '1px solid black', padding: '10px' }}
>
	<Flex style={{ width: '100%', alignSelf: 'stretch' }}>
		<div style={{ width: '100%', alignSelf: 'stretch' }}>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</div>
	</Flex>
	<Flex gap={10} vertical>
		<Flex gap={10} vertical align="center">
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
		<Flex gap={10} vertical align="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
</Flex>;
```

Компонент TimeWidgetsWithTextField2
<br>
<br>

```jsx static
// @flow

import MediaQuery from 'react-responsive';
import React from 'react';
import { Flex, Typography } from 'antd';
import TimeWidgetsCustomClock from '../../TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../../TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';

const TimeWidgetsWithTextField2MD = (): React$MixedElement => {
	const { Text } = Typography;

	return (
		<MediaQuery minWidth={658} maxWidth={834}>
			<Flex
				gap={10}
				align="center"
				style={{ border: '1px solid black', padding: '10px' }}
			>
				<Flex style={{ width: '100%', alignSelf: 'stretch', order: 3 }}>
					<div style={{ width: '100%' }}>
						<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
					</div>
				</Flex>
				<Flex gap={10} vertical>
					<Flex gap={10} vertical align="center">
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								13
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								08
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								99
							</Text>
						</Flex>
						<Flex gap={10}>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								20
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
							<Text
								style={{
									border: '1px solid black',
									padding: '10px',
								}}
							>
								55
							</Text>
						</Flex>
					</Flex>
					<Flex gap={10} vertical align="center">
						<TimeWidgetsWeeksAndYearsPanel />
						<TimeWidgetsCustomClock />
					</Flex>
				</Flex>
			</Flex>
		</MediaQuery>
	);
};

export default TimeWidgetsWithTextField2MD;
```

<br>
<br>

```jsx
import React from 'react';
import { Flex, Typography } from 'antd';
import TimeWidgetsCustomClock from '../TimeWidgetsPanel/TimeWidgetsCustomClock/TimeWidgetsCustomClock';
import TimeWidgetsWeeksAndYearsPanel from '../TimeWidgetsPanel/TimeWidgetsWeeksAndYearsPanel/TimeWidgetsWeeksAndYearsPanel';
import TextFieldWidget from '../TimeWidgetsPanel/TextFieldWidget/TextFieldWidget';

const { Text } = Typography;

<Flex
	gap={10}
	align="center"
	style={{ border: '1px solid black', padding: '10px' }}
>
	<Flex style={{ width: '100%', alignSelf: 'stretch', order: 3 }}>
		<div style={{ width: '100%' }}>
			<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
		</div>
	</Flex>
	<Flex gap={10} vertical>
		<Flex gap={10} vertical align="center">
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					13
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					08
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					99
				</Text>
			</Flex>
			<Flex gap={10}>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					20
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
				<Text
					style={{
						border: '1px solid black',
						padding: '10px',
					}}
				>
					55
				</Text>
			</Flex>
		</Flex>
		<Flex gap={10} vertical align="center">
			<TimeWidgetsWeeksAndYearsPanel />
			<TimeWidgetsCustomClock />
		</Flex>
	</Flex>
</Flex>;
```

Компонент TimeWidgetsWithTextField3
<br>
<br>

```jsx static
// @flow

import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TextFieldWidget from '../../TextFieldWidget/TextFieldWidget';
import TimeWidgets8 from '../../TimeWidgets8/TimeWidgets8';

const TimeWidgetsWithTextField3LG = (): React$MixedElement => (
	<MediaQuery minWidth={968} maxWidth={1423}>
		<Flex
			align="center"
			gap={20}
			style={{ border: '1px solid black', padding: '10px' }}
			justify="center"
		>
			<div style={{ width: '50%', alignSelf: 'stretch' }}>
				<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
			</div>
			<TimeWidgets8 />
		</Flex>
	</MediaQuery>
);

export default TimeWidgetsWithTextField3LG;
```

<br>
<br>

```jsx
import { Flex } from 'antd';
import React from 'react';
import MediaQuery from 'react-responsive';
import TextFieldWidget from '../TimeWidgetsPanel/TextFieldWidget/TextFieldWidget';
import TimeWidgets8 from '../TimeWidgetsPanel/TimeWidgets8/TimeWidgets8LG/TimeWidgets8LG';

<Flex
	align="center"
	gap={20}
	style={{ border: '1px solid black', padding: '10px' }}
	justify="center"
>
	<div style={{ width: '50%', alignSelf: 'stretch' }}>
		<TextFieldWidget text="Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf. Lorem asdasdas asdasdasd asdasdasd asdasdasdas sadasdasdasd asfdsdfsdfs sdfsdfsd fsdfsdahfd adfhfasdhgasdfg asfdhadffsdafs afdshadfgsadf" />
	</div>
	<TimeWidgets8 />
</Flex>;
```
