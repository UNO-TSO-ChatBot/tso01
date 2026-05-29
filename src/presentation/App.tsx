import React from 'react';
import { ChatWidgetContainer } from './containers/ChatWidgetContainer';

interface AppProps {
  initialConfig?: any;
}

const App: React.FC<AppProps> = () => {
  // In a real application, initialConfig could be passed to the store
  // or a context to configure colors, API endpoints, etc.
  
  return (
    <>
      <ChatWidgetContainer />
    </>
  );
};

export default App;
