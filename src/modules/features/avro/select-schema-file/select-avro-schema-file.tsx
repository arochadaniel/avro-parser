import { FC } from "react";
import { SelectAvroSchemaFileInput } from "./input";
import classes from "./select-avro-schema-file.module.css";

interface Props {}

export const SELECT_AVRO_SCHEMA_FILE_TEST_ID = "select-avro-schema-file";

export const SelectAvroSchemaFile: FC<Props> = () => {
  return (
    <div
      className={classes.container}
      data-testid={SELECT_AVRO_SCHEMA_FILE_TEST_ID}
    >
      <h1>1. Select Schema File</h1>
      <p>Select a local schema file to load</p>
      <SelectAvroSchemaFileInput />
    </div>
  );
};
