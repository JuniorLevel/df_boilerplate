```jsx
import { FourImagesBg } from '../../components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeButton } from '../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome } from '../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import Image4 from '../../assets/Image4.jpg';

const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

const buttons = [
	{
		title: 'email',
		onClick: () => alert('email'),
	},
	{
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

<FourImagesBg imagesUrls={images}>
	<Welcome buttons={buttons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="VC" onClick={() => alert('VC click')} />
			<WelcomeButton title="G" onClick={() => alert('G click')} />
			<WelcomeButton title="R" onClick={() => alert('R click')} />
		</WelcomeAuthButtons>
	</Welcome>
</FourImagesBg>;
```

```jsx noeditor
import Image1 from '../../assets/Welcome/welcome-img1.png';
<img src={Image1} />;
```

```jsx
import { SingleImageBg } from '../../components/Welcome/SingleImageBg/SingleImageBg';
import { WelcomeButton } from '../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome } from '../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import Image1 from '../../assets/Image1.jpg';

const buttons = [
	{
		title: 'email',
		onClick: () => alert('email'),
	},
	{
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

<SingleImageBg imageUrl={Image1}>
	<Welcome buttons={buttons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="VC" onClick={() => alert('VC click')} />
			<WelcomeButton title="G" onClick={() => alert('G click')} />
			<WelcomeButton title="R" onClick={() => alert('R click')} />
		</WelcomeAuthButtons>
	</Welcome>
</SingleImageBg>;
```

```jsx noeditor
import Image2 from '../../assets/Welcome/welcome-img2.png';
<img src={Image2} />;
```

```jsx
import { WelcomeButton } from '../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome } from '../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';

const buttons = [
	{
		title: 'email',
		onClick: () => alert('email'),
	},
	{
		title: 'LogIn',
		onClick: () => alert('LogIn'),
	},
	{
		title: 'CreateAccount',
		onClick: () => alert('CreateAccount'),
	},
];

<Welcome buttons={buttons}>
	<WelcomeAuthButtons>
		<WelcomeButton title="VC" onClick={() => alert('VC click')} />
		<WelcomeButton title="G" onClick={() => alert('G click')} />
		<WelcomeButton title="R" onClick={() => alert('R click')} />
	</WelcomeAuthButtons>
</Welcome>;
```

```jsx noeditor
import Image3 from '../../assets/Welcome/welcome-img3.png';
<img src={Image3} />;
```
