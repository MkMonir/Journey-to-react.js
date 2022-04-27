import { createContext, useState } from 'react';

const FeddbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);
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
