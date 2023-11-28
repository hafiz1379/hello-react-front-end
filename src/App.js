import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getRandomGreeting } from './redux/greetings/greetingsSlice';
import Greeting from './components/Greeting';

function App() {
  const dispatchActions = useDispatch();

  useEffect(() => {
    dispatchActions(getRandomGreeting());
  }, [dispatchActions]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
