import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Greeting from './components/Greeting';
import getGreetingsFromApi from './redux/greetings/greeting-action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetingsFromApi());
  }, []);

  const random = useSelector((state) => state.greeting.greetingsData);

  return <>{random.length > 0 && <Greeting message={random[0].message} />}</>;
}

export default App;
