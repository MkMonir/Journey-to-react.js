import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check If Function
    const valueToStore = value instanceof Function ? value(localStorageValue) : value;

    // Set To State
    setLocalStorageValue(value);

    // Set To localStorage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);

  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
