import { AvroParsedResults } from "./results";
import { AvroSchema } from "../types";
import { AvroSchemaView } from "./mapper";
import { FC } from "react";
import { useAvroFileContext } from "../context";

interface Props {
  schema: AvroSchema;
}

export const AvroFileParser: FC<Props> = ({ schema }) => {
  const { setSchema } = useAvroFileContext();
  return (
    <div>
      <AvroSchemaView schema={schema} />
      <br />
      <button onClick={() => setSchema(undefined)}>Clear schema</button>
      <br />
      <AvroParsedResults />
    </div>
  );
};
