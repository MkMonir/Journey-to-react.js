import { createContext, useState } from 'react';

const FeddbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState();
  return (
    <FeddbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeddbackContext.Provider>
  );
};

export default FeddbackContext;
