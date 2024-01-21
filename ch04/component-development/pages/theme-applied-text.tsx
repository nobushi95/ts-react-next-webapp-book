import { NextPage } from 'next';
import styled from 'styled-components';

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`;

const ThemeAppliedText: NextPage = () => {
  return (
    <div>
      <Text>Theme Applied Text Color</Text>
    </div>
  );
};

export default ThemeAppliedText;
