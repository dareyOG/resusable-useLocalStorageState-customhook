import { useLocalStorageState } from './useLocalStorageState';

function App() {
  const [value, setValue] = useLocalStorageState([], 'localStorageKey');
  return;
}

export default App;
