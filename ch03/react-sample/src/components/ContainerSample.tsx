type ContainerProps = {
  title: string;
  children: React.ReactElement;
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;
  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

export const ContainerSample = (): JSX.Element => {
  return (
    <Container title="hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  );
};
