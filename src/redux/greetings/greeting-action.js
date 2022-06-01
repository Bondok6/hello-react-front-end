import { getGreetings } from './greeting-slice';

const getGreetingsFromApi = () => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3000/greetings.json');
  const data = await response.json();

  dispatch(getGreetings(data));
};

export default getGreetingsFromApi;
