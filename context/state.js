import { createContext, useContext } from "react";

const TestContext = createContext();

export const AppWrapper = ({ children }) => {
  let sharedState = true;

  const toggleContext = () => {
    sharedState = !sharedState;
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
