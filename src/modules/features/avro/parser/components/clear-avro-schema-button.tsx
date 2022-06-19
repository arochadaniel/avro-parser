import { FC, useCallback } from "react";

import { useAvroFileContext } from "@features/avro/context";

interface Props {}

export const ClearAvroSchemaButton: FC<Props> = () => {
  const { setSchema, removeResults } = useAvroFileContext();

  const handleClick = useCallback(() => {
    setSchema(undefined);
    removeResults();
  }, [removeResults, setSchema]);

  return <button onClick={handleClick}>Clear schema</button>;
};
