import { NextPage } from 'next';
import { DelayInput } from '../components/DelayInput';

const ComponentsTest: NextPage = () => {
  return (
    <div>
      <DelayInput onChange={() => console.log('changed')} />
    </div>
  );
};

export default ComponentsTest;
