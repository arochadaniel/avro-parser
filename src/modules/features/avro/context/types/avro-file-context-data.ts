/* eslint-disable no-unused-vars */
import { AvroSchema, NamedType } from "@features/avro/types";
import { Dispatch, SetStateAction } from "react";

export type AvroFieldResult = { field: NamedType; path: string };

export type AvroFieldResultType = "masked" | "encrypted";

export type AvroFileParseResult = {
  masked?: AvroFieldResult[];
  encrypted?: AvroFieldResult[];
};

export type AvroAppendFieldResult = (
  field: AvroFieldResult,
  type: AvroFieldResultType
) => void;

export type AvroRemoveFieldResult = (
  path: string,
  type: AvroFieldResultType
) => void;

export type AvroFileContextData = {
  setSchema: Dispatch<SetStateAction<AvroSchema | undefined>>;
  appendField: AvroAppendFieldResult;
  removeField: AvroRemoveFieldResult;
  result?: AvroFileParseResult;
};
