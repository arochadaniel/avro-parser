import { ChangeEventHandler, useCallback } from "react";

import { AvroFieldResultType } from "@features/avro/context/types";
import { NamedType } from "@features/avro/types";
import { useAvroFileContext } from "@features/avro/context";

export const useHandleAvroNamedTypeItem = (field: NamedType, path: string) => {
  const { appendField, removeField, result } = useAvroFileContext();

  const handleChange = useCallback(
    (type: AvroFieldResultType): ChangeEventHandler<HTMLInputElement> =>
      (event) => {
        const checked = event.target.checked;
        if (checked) {
          return appendField({ field, path }, type);
        }

        removeField(path, type);
      },
    [appendField, field, path, removeField]
  );

  const shouldBeDisabled = useCallback(
    (type: AvroFieldResultType) => {
      if (!result) {
        return false;
      }

      const typeToVerify: AvroFieldResultType =
        type === "encrypted" ? "masked" : "encrypted";

      const index = result[typeToVerify]?.findIndex((r) => r.path === path);
      if (typeof index === "undefined" || index === -1) {
        return false;
      }

      return true;
    },
    [path, result]
  );

  const isChecked = useCallback(
    (type: AvroFieldResultType) => {
      if (!result) {
        return false;
      }

      const index = result[type]?.findIndex((r) => r.path === path);
      if (typeof index === "undefined" || index === -1) {
        return false;
      }

      return true;
    },
    [path, result]
  );

  return { shouldBeDisabled, handleChange, isChecked };
};
