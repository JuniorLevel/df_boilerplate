```jsx
import React from 'react';
import { Layout } from '../lib/components/Layout/Layout';
import { TimeWidgetsPanel } from '../lib/components/TimeWidgetsPanel/TimeWidgetsPanel';
import { sidebarButtons } from './data';

<Layout buttons={sidebarButtons} title="Caption" avatar={{ title: 'AV' }}>
	<TimeWidgetsPanel />
</Layout>;
```
