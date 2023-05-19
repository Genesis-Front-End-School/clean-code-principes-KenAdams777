type Props = {
  error: string;
};

export default function ErrorContainer(props: Props) {
  const { error } = props;

  return (
    <div role="alert" aria-label="Error message" className="ErrorContainer">
      {error}...
    </div>
  );
}
