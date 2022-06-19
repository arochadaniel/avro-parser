import { FC } from "react";
import { NamedType } from "@features/avro/types";
import classes from "./avro-named-type-item.module.css";
import { useHandleAvroNamedTypeItem } from "./hooks";

interface Props {
  field: NamedType;
  path: string;
}

export const MASKED_CHECKBOX_FIELD_TEST_ID = "masked-checkbox";
export const ENCRYPTED_CHECKBOX_FIELD_TEST_ID = "encrypted-checkbox";

export const AvroNamedTypeItem: FC<Props> = ({ field, path }) => {
  const { handleChange, isChecked } = useHandleAvroNamedTypeItem(field, path);

  return (
    <div className={classes.item}>
      <h6>{field.name}</h6>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          checked={isChecked("masked")}
          onChange={handleChange("masked")}
          disabled={isChecked("encrypted")}
          data-testid={MASKED_CHECKBOX_FIELD_TEST_ID}
        />
        <input
          type="checkbox"
          disabled={isChecked("masked")}
          checked={isChecked("encrypted")}
          onChange={handleChange("encrypted")}
          data-testid={ENCRYPTED_CHECKBOX_FIELD_TEST_ID}
        />
      </div>
    </div>
  );
};
