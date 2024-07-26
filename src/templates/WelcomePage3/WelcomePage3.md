```jsx
import React from 'react';
import { WelcomeButton } from '../../components/Welcome/WelcomeAuthButtons/WelcomeButton/WelcomeButton';
import MediaQuery from 'react-responsive';
import { Welcome } from '../../components/Welcome/Welcome';
import { WelcomeAuthButtons } from '../../components/Welcome/WelcomeAuthButtons/WelcomeAuthButtons';
import { FourImagesBg } from '../../components/Welcome/FourImagesBg/FourImagesBg';
import { buttons } from '../../components/Welcome/buttons';

<FourImagesBg>
	<Welcome buttons={buttons}>
		<MediaQuery minWidth={361}>
			<WelcomeAuthButtons>
				<WelcomeButton title="G" onClick={() => {}} />
				<WelcomeButton title="VK" onClick={() => {}} />
				<WelcomeButton title="G" onClick={() => {}} />
				<WelcomeButton title="VK" onClick={() => {}} />
				<WelcomeButton title="G" onClick={() => {}} />
				<WelcomeButton title="VK" onClick={() => {}} />
				<WelcomeButton title="G" onClick={() => {}} />
				<WelcomeButton title="VK" onClick={() => {}} />
				<WelcomeButton title="G" onClick={() => {}} />
				<WelcomeButton title="VK" onClick={() => {}} />
			</WelcomeAuthButtons>
		</MediaQuery>
		<MediaQuery maxWidth={360}>
			<WelcomeAuthButtons>
				<WelcomeButton title="G" onClick={() => {}} />
				<WelcomeButton title="VK" onClick={() => {}} />
			</WelcomeAuthButtons>
		</MediaQuery>
	</Welcome>
</FourImagesBg>;
```