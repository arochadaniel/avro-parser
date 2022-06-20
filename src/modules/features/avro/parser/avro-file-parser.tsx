import { AvroParsedResults } from "./results";
import { AvroSchema } from "../types";
import { AvroSchemaView } from "./mapper";
import { ClearAvroSchemaButton } from "./components";
import { FC } from "react";

interface Props {
  schema: AvroSchema;
}

export const AVRO_FILE_PARSER_TEST_ID = "avro-schema-view";

export const AvroFileParser: FC<Props> = ({ schema }) => {
  return (
    <div data-testid={AVRO_FILE_PARSER_TEST_ID}>
      <AvroSchemaView schema={schema} />
      <br />
      <ClearAvroSchemaButton />
      <br />
      <AvroParsedResults />
    </div>
  );
};
