import { useSelector } from 'react-redux';

function Greeting() {
  const {
    greetings, isLoading, error,
  } = useSelector((state) => state.greetings);

  let loadMessage = null;

  if (isLoading) {
    loadMessage = 'Loading message...';
  }

  if (error) {
    loadMessage = 'Error loading data';
  }

  return (
    <section>
      {
      (isLoading || error)
        ? (<p className="status"><i>{loadMessage}</i></p>)
        : (<p className="greeting-message"><b>{greetings?.message}</b></p>)
    }
    </section>
  );
}

export default Greeting;
