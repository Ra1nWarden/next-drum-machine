'use client';
import React from 'react';

export const DrumSwitchContext = React.createContext();

export const DrumSwitchProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <DrumSwitchContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </DrumSwitchContext.Provider>
  );
}

