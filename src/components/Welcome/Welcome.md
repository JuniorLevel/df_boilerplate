```jsx
import { FourImagesBg as Background } from './FourImagesBg/FourImagesBg';
import { WelcomeButton as Button } from './WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome as Card } from './Welcome';
import { WelcomeAuthButtons as ButtonsContainer } from './WelcomeAuthButtons/WelcomeAuthButtons';

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

<Background>
	<Card buttons={buttons}>
		<ButtonsContainer>
			<Button title="VC" onClick={() => alert('VC click')} />
			<Button title="G" onClick={() => alert('G click')} />
			<Button title="R" onClick={() => alert('R click')} />
		</ButtonsContainer>
	</Card>
</Background>;
```

```jsx noeditor
import Image1 from '../../assets/Welcome/welcome-img1.png';
<img src={Image1} />;
```

```jsx
import { SingleImageBg as Background } from './SingleImageBg/SingleImageBg';
import { WelcomeButton as Button } from './WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome as Card } from './Welcome';
import { WelcomeAuthButtons as ButtonsContainer } from './WelcomeAuthButtons/WelcomeAuthButtons';

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

<Background>
	<Card buttons={buttons}>
		<ButtonsContainer>
			<Button title="VC" onClick={() => alert('VC click')} />
			<Button title="G" onClick={() => alert('G click')} />
			<Button title="R" onClick={() => alert('R click')} />
		</ButtonsContainer>
	</Card>
</Background>;
```

```jsx noeditor
import Image2 from '../../assets/Welcome/welcome-img2.png';
<img src={Image2} />;
```

```jsx
import { SingleImageBg as Background } from './SingleImageBg/SingleImageBg';
import { WelcomeButton as Button } from './WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome as Card } from './Welcome';
import { WelcomeAuthButtons as ButtonsContainer } from './WelcomeAuthButtons/WelcomeAuthButtons';

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

<Background>
	<Card buttons={buttons}>
		<ButtonsContainer>
			<Button title="VC" onClick={() => alert('VC click')} />
			<Button title="G" onClick={() => alert('G click')} />
			<Button title="R" onClick={() => alert('R click')} />
		</ButtonsContainer>
	</Card>
</Background>;
```

```jsx noeditor
import Image3 from '../../assets/Welcome/welcome-img3.png';
<img src={Image3} />;
```
