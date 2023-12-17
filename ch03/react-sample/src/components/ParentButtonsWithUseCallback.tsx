import React, { memo, useCallback, useState } from 'react';

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log('DecrementButtoが再描画されました');

  return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('IncrementButtoが再描画されました');

  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('DoubleButtoが再描画されました');

  return <button onClick={onClick}>Double</button>;
});

export const ParentButtonsWithUseCallback = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((c) => c - 1);
  const increment = () => setCount((c) => c + 1);
  const double = useCallback(() => setCount((c) => c * 2), []);

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
};
