import styled from 'styled-components';

export const DivImageContainer = styled.div`
	position: relative;
	z-index: 10;
`;

export const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
