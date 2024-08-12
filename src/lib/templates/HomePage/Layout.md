```jsx
import { Container as Layout } from '../../components/Container/Container';

const buttons = [
	{
		title: 'Orders',
		onClick: () => {},
	},
	{
		title: 'Compare',
		onClick: () => {},
	},
	{
		title: 'Admin',
		onClick: () => {},
	},
];

<Layout
	title="Caption"
	buttons={buttons}
	theme="light"
	avatar={{ title: 'AV' }}
>
	<div />
</Layout>;
```

```jsx noeditor
import Image1 from '../../assets/Layout/layout.png';
<img src={Image1} />;
```
