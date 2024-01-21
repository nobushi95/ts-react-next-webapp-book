import { NextPage } from 'next';
import styled from 'styled-components';

const Text = styled.p`
  color: #1e90ff;
  font-size: 2em;
`;

const AsProperty: NextPage = () => {
  return (
    <div>
      <Text>World</Text>
      <Text as="a" href="/">
        Go to index
      </Text>
    </div>
  );
};

export default AsProperty;
