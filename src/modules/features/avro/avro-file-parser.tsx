import { FC, useState } from "react";

import { AvroFileContextProvider } from "./context";
import { SelectAvroSchemaFile } from "./select-schema-file";
import classes from "./avro-file-parser.module.css";

interface Props {}

export const AvroFileParser: FC<Props> = () => {
  const [schema, setSchema] = useState(undefined);
  return (
    <AvroFileContextProvider value={{ schema, setSchema }}>
      <div className={classes.container}>
        {!schema ? <SelectAvroSchemaFile /> : null}
      </div>
    </AvroFileContextProvider>
  );
};
