// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  font-weight: 400;
`;

type TLayoutProps = {
  children: React$Node,
};

function Layout({ children }: TLayoutProps): React$Node {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
