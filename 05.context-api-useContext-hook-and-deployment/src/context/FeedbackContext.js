import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeddbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 9,
      text: 'This is feedback item 1',
    },
    {
      id: 2,
      rating: 8,
      text: 'This is feedback item 2',
    },
    {
      id: 3,
      rating: 10,
      text: 'This is feedback item 3',
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeddbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeddbackContext.Provider>
  );
};

export default FeddbackContext;
