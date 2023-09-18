import { useState, createContext, useContext } from 'react';

const NavigationContext = createContext();
const NavigationContextUpdate = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export function useNavigationUpdate() {
  return useContext(NavigationContextUpdate);
}

export default function NavigationProvider({ children }) {
  const [page, setPage] = useState('home');

  return (
    <NavigationContext.Provider value={page}>
      <NavigationContextUpdate.Provider value={setPage}>{children}</NavigationContextUpdate.Provider>
    </NavigationContext.Provider>
  );
}
