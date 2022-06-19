import {
  AvroAppendFieldResult,
  AvroFieldResult,
  AvroFileParseResult,
  AvroRemoveFieldResult,
} from "@features/avro/context/types";
import { useCallback, useState } from "react";

export const useAvroFieldParseResult = () => {
  const [result, setResult] = useState<AvroFileParseResult | undefined>();
  const appendField = useCallback<AvroAppendFieldResult>((field, type) => {
    setResult((p) => {
      if (!p) {
        return { [type]: [field] };
      }

      if (!p[type]) {
        return { ...p, [type]: [field] };
      }

      const newTypeResult = [...(p[type] as AvroFieldResult[])];
      newTypeResult.push(field);

      return { ...p, [type]: newTypeResult };
    });
  }, []);

  const removeField = useCallback<AvroRemoveFieldResult>((path, type) => {
    setResult((p) => {
      if (!p || !p[type]) {
        return p;
      }
      const indexToRemove = (p[type] as AvroFieldResult[]).findIndex(
        (r) => r.path === path
      );

      if (indexToRemove === -1) {
        return p;
      }

      const newTypeResult = [...(p[type] as AvroFieldResult[])];
      newTypeResult.splice(indexToRemove, 1);

      return { ...p, [type]: newTypeResult };
    });
  }, []);

  return { result, appendField, removeField };
};
