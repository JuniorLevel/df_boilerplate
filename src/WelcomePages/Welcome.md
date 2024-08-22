```jsx
import React from 'react';
import { Welcome } from '../lib/components/Welcome/Welcome';
import { FourImagesBg } from '../lib/components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from '../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { WelcomeButton } from '../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import Image1 from '../lib/components/Welcome/pictures/Image1.jpg';
import Image2 from '../lib/components/Welcome/pictures/Image2.jpg';
import Image3 from '../lib/components/Welcome/pictures/Image3.jpg';
import Image4 from '../lib/components/Welcome/pictures/Image4.jpg';
import { welcomeButtons } from './WelcomePage1/data';

const images = [
	{ id: 1, url: Image1 },
	{ id: 2, url: Image2 },
	{ id: 3, url: Image3 },
	{ id: 4, url: Image4 },
];

<FourImagesBg imagesUrls={images}>
	<Welcome buttons={welcomeButtons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="VC" onClick={() => alert('VC click')} />
			<WelcomeButton title="G" onClick={() => alert('G click')} />
			<WelcomeButton title="R" onClick={() => alert('R click')} />
		</WelcomeAuthButtons>
	</Welcome>
</FourImagesBg>;
```

```jsx noeditor
import Image1 from './welcome-img1.png';
<img src={Image1} />;
```

```jsx
import { SingleImageBg } from '../lib/components/Welcome/SingleImageBg/SingleImageBg';
import { WelcomeButton } from '../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome } from '../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import Image1 from '../lib/components/Welcome/pictures/Image1.jpg';
import { welcomeButtons } from './WelcomePage5/data';

<SingleImageBg imageUrl={Image1}>
	<Welcome buttons={welcomeButtons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="VC" onClick={() => alert('VC click')} />
			<WelcomeButton title="G" onClick={() => alert('G click')} />
			<WelcomeButton title="R" onClick={() => alert('R click')} />
		</WelcomeAuthButtons>
	</Welcome>
</SingleImageBg>;
```

```jsx noeditor
import Image2 from './welcome-img2.png';
<img src={Image2} />;
```

```jsx
import { WelcomeButton } from '../lib/components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { Welcome } from '../lib/components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../lib/components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { welcomeButtons } from './WelcomePage1/data';

<Welcome buttons={welcomeButtons}>
	<WelcomeAuthButtons>
		<WelcomeButton title="VC" onClick={() => alert('VC click')} />
		<WelcomeButton title="G" onClick={() => alert('G click')} />
		<WelcomeButton title="R" onClick={() => alert('R click')} />
	</WelcomeAuthButtons>
</Welcome>;
```

```jsx noeditor
import Image3 from './welcome-img3.png';
<img src={Image3} />;
```
