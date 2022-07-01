import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultKey) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultKey
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
