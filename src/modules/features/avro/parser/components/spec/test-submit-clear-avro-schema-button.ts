import { RenderResult, act, fireEvent } from "@testing-library/react";

export const testSubmitClearAvroSchemaButton = (wrapper: RenderResult) => {
  return act(async () => {
    const button = wrapper.getByRole("button");
    fireEvent.click(button);
  });
};
