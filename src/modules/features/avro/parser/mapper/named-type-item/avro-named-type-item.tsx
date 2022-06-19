import { FC } from "react";
import { NamedType } from "@features/avro/types";
import classes from "./avro-named-type-item.module.css";
import { useHandleAvroNamedTypeItem } from "./hooks";

interface Props {
  field: NamedType;
  path: string;
}

export const AvroNamedTypeItem: FC<Props> = ({ field, path }) => {
  const { shouldBeDisabled, handleChange, isChecked } =
    useHandleAvroNamedTypeItem(field, path);

  return (
    <div className={classes.item}>
      <h6>{field.name}</h6>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          checked={isChecked("masked")}
          disabled={shouldBeDisabled("masked")}
          onChange={handleChange("masked")}
        />
        <input
          type="checkbox"
          checked={isChecked("encrypted")}
          disabled={shouldBeDisabled("encrypted")}
          onChange={handleChange("encrypted")}
        />
      </div>
    </div>
  );
};
