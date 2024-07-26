```jsx
import React from 'react';
import { Container } from '../../components/Container/Container';
import TimeWidgetsPanel from '../../components/TimeWidgetsPanel/TimeWidgetsPanel';
import { buttons } from '../../components/Container/buttons';

<Container
	buttons={buttons}
	title="Caption"
	theme="light"
	avatar={{ title: 'AV' }}
>
	<TimeWidgetsPanel />
</Container>;
```
