import { get, onChange, set } from '@dank-style/color-mode';
import * as React from 'react';
import type { COLORMODES } from './types';
import { platformSpecificSpaceUnits } from './utils';
import { createContext, useContext } from 'solid-js';
type Config = any;

export const defaultConfig: { config: Config; colorMode: COLORMODES } = {
  config: {},
  colorMode: 'light',
};

// interface ConfigContextData {
//   config: Config;
//   setConfig: (config: Config) => void;
// }

const defaultContextData: Config = defaultConfig;

const StyledContext = createContext<Config>(defaultContextData);

// type IContext = {
//   config: Config;
//   colorMode?: COLORMODES;
// };
export const StyledProvider: React.FC<{
  config: Config;
  colorMode?: COLORMODES;
  children?: React.ReactNode;
}> = ({ config, colorMode, children }) => {
  const currentConfig = platformSpecificSpaceUnits(config, 'web');

  const currentColorMode = colorMode;

  React.useEffect(() => {
    set(currentColorMode === 'dark' ? 'dark' : 'light');

    onChange((currentColorMode: string) => {
      if (currentColorMode === 'dark') {
        document.documentElement.classList.remove(`gs-light`);
      } else {
        document.documentElement.classList.remove(`gs-dark`);
      }
      document.documentElement.classList.add(`gs-${currentColorMode}`);
    });

    document.documentElement.classList.add(`gs-${get()}`);
  }, [currentColorMode]);

  let contextValue = { config: currentConfig };

  return (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );
};

export const useStyled = () => useContext(StyledContext);
