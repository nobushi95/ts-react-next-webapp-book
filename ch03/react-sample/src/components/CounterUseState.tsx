import { useState } from 'react';

type CounterUseStateProps = {
  initialValue: number;
};

export const CounterUseState = (props: CounterUseStateProps) => {
  const { initialValue } = props;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button
        onClick={() =>
          setCount((current) => {
            return current - 2;
          })
        }
      >
        --
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() =>
          setCount((current) => {
            return current + 2;
          })
        }
      >
        ++
      </button>
    </div>
  );
};
