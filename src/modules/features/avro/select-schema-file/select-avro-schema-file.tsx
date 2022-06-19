import { FC } from "react";
import { SelectAvroSchemaFileInput } from "./input";
import classes from "./select-avro-schema-file.module.css";

interface Props {}

export const SelectAvroSchemaFile: FC<Props> = () => {
  return (
    <div className={classes.container}>
      <h1>1. Select Schema File</h1>
      <p>Select a local schema file to load</p>
      <SelectAvroSchemaFileInput />
    </div>
  );
};
