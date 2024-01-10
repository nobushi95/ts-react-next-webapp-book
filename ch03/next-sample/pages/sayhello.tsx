import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Sayhello: NextPage<void> = (props) => {
  const [data, setData] = useState({ name: '' });
  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => setData(profile));
  }, []);

  return <div>hello {data.name}</div>;
};

export default Sayhello;
