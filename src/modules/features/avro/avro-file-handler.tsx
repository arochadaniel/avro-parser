import { FC, useState } from "react";

import { AvroFileContextProvider } from "./context";
import { AvroFileParser } from "./parser";
import { AvroSchema } from "./types";
import { SelectAvroSchemaFile } from "./select-schema-file";
import classes from "./avro-file-handler.module.css";
import { useAvroFieldParseResult } from "./parser/results/hooks";

interface Props {}

export const AvroFileHandler: FC<Props> = () => {
  const [schema, setSchema] = useState<AvroSchema | undefined>();
  const { result, appendField, removeField, removeResults } =
    useAvroFieldParseResult();

  return (
    <AvroFileContextProvider
      value={{ setSchema, appendField, removeField, result, removeResults }}
    >
      <div className={classes.container}>
        {!schema ? (
          <SelectAvroSchemaFile />
        ) : (
          <AvroFileParser schema={schema} />
        )}
      </div>
    </AvroFileContextProvider>
  );
};
