import { AvroParsedResults } from "./results";
import { AvroSchema } from "../types";
import { AvroSchemaView } from "./mapper";
import { ClearAvroSchemaButton } from "./components";
import { FC } from "react";

interface Props {
  schema: AvroSchema;
}

export const AvroFileParser: FC<Props> = ({ schema }) => {
  return (
    <div>
      <AvroSchemaView schema={schema} />
      <br />
      <ClearAvroSchemaButton />
      <br />
      <AvroParsedResults />
    </div>
  );
};
