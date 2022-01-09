import { createContext, useContext, useState } from "react";

const TestContext = createContext();

export const AppWrapper = ({ children }) => {
  const [sharedState, setSharedState] = useState(true);

  const toggleContext = () => {
    setSharedState((prevState) => !prevState);
    console.log(sharedState);
  };

  return (
    <TestContext.Provider value={{ sharedState, toggleContext }}>
      {children}
    </TestContext.Provider>
  );
};

export function useTestContext() {
  return useContext(TestContext);
}
