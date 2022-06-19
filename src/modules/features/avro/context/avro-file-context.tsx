import { createContext, useContext } from "react";

import { AvroFileContextData } from "./types";

const Context = createContext<AvroFileContextData>({
  schema: undefined,
  setSchema: () => {},
});

export const AvroFileContextProvider = Context.Provider;

export const useAvroFileContext = () => useContext(Context);
