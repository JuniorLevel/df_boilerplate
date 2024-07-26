```jsx
import React from 'react';
import { WelcomeButton } from '../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import { GoogleOutlined } from '@ant-design/icons';
import { Welcome } from '../../components/Welcome/Welcome';
import { FourImagesBg } from '../../components/Welcome/FourImagesBg/FourImagesBg';
import { WelcomeAuthButtons } from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { buttons } from '../../components/Welcome/buttons';

<FourImagesBg>
	<Welcome buttons={buttons}>
		<WelcomeAuthButtons>
			<WelcomeButton title="G" onClick={() => {}} />
			<WelcomeButton title="VK" onClick={() => {}} />
		</WelcomeAuthButtons>
	</Welcome>
</FourImagesBg>;
```
