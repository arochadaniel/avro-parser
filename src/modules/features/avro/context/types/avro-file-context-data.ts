import { Dispatch, SetStateAction } from "react";

export type AvroFileContextData = {
  schema: Record<string, any> | undefined;
  setSchema: Dispatch<SetStateAction<undefined>>;
};
