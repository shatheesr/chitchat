const STORAGE_KEY = 'chatMessages';

export const saveMessages = (messages) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

export const getMessages = () => {
  const storedMessages = localStorage.getItem(STORAGE_KEY);
  return storedMessages ? JSON.parse(storedMessages) : [];
};
