import {
  ENCRYPTED_CHECKBOX_FIELD_TEST_ID,
  MASKED_CHECKBOX_FIELD_TEST_ID,
} from "../avro-named-type-item";
import { RenderResult, act, fireEvent } from "@testing-library/react";

import { AvroFieldResultType } from "@features/avro/context/types";

export const testSelectNamedFieldCheckbox = (
  wrapper: RenderResult,
  type: AvroFieldResultType
) => {
  return act(async () => {
    const toCheckId =
      type === "encrypted"
        ? ENCRYPTED_CHECKBOX_FIELD_TEST_ID
        : MASKED_CHECKBOX_FIELD_TEST_ID;
    const checkbox = wrapper.getByTestId(toCheckId);

    fireEvent.click(checkbox);
  });
};
