export const fetchRandomGreeting = async () => {
  try {
    const response = await fetch('/api/v1/messages');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
