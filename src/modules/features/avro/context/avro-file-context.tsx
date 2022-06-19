import { createContext, useContext } from "react";

import { AvroFileContextData } from "./types";

const Context = createContext<AvroFileContextData>({
  setSchema: () => {},
  appendField: () => {},
  removeField: () => {},
});

export const AvroFileContextProvider = Context.Provider;

export const useAvroFileContext = () => useContext(Context);
