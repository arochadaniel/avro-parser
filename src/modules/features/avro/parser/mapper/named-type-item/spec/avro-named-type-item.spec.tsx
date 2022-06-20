import {
  AvroNamedTypeItem,
  ENCRYPTED_CHECKBOX_FIELD_TEST_ID,
  MASKED_CHECKBOX_FIELD_TEST_ID,
} from "../avro-named-type-item";

import { AvroFileContextProvider } from "@features/avro/context";
import { FC } from "react";
import { mockAvroNamedType } from "@features/avro/spec/fixtures";
import { render } from "@testing-library/react";
import { testSelectNamedFieldCheckbox } from "./test-select-named-field-checkbox";
import { useAvroFieldParseResult } from "@features/avro/parser/results/hooks";

describe("<AvroNamedTypeItem />", () => {
  const Component: FC = () => {
    const { appendField, removeField, removeResults, result } =
      useAvroFieldParseResult();
    return (
      <AvroFileContextProvider
        value={{
          appendField,
          removeField,
          removeResults,
          result,
          setSchema: jest.fn(),
        }}
      >
        <AvroNamedTypeItem
          field={mockAvroNamedType}
          path={mockAvroNamedType.name}
        />
      </AvroFileContextProvider>
    );
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });

  describe("business rules", () => {
    it("should disable masked checkbox when encrypted is clicked", async () => {
      const wrapper = render(<Component />);

      await testSelectNamedFieldCheckbox(wrapper, "encrypted");

      const masked = wrapper.getByTestId(MASKED_CHECKBOX_FIELD_TEST_ID);
      expect(masked.outerHTML).toContain("disabled");
    });

    it("should enable masked checkbox when encrypted is not selected", async () => {
      const wrapper = render(<Component />);

      await testSelectNamedFieldCheckbox(wrapper, "encrypted");

      const masked = wrapper.getByTestId(MASKED_CHECKBOX_FIELD_TEST_ID);
      expect(masked.outerHTML).toContain("disabled");

      await testSelectNamedFieldCheckbox(wrapper, "encrypted");

      const maskedEnabled = wrapper.getByTestId(MASKED_CHECKBOX_FIELD_TEST_ID);
      expect(maskedEnabled.outerHTML).not.toContain("disabled");
    });

    it("should disable encrypted checkbox when masked is clicked", async () => {
      const wrapper = render(<Component />);

      await testSelectNamedFieldCheckbox(wrapper, "masked");

      const encrypted = wrapper.getByTestId(ENCRYPTED_CHECKBOX_FIELD_TEST_ID);
      expect(encrypted.outerHTML).toContain("disabled");
    });

    it("should enable encrypted checkbox when masked is not selected", async () => {
      const wrapper = render(<Component />);

      await testSelectNamedFieldCheckbox(wrapper, "masked");

      const encrypted = wrapper.getByTestId(ENCRYPTED_CHECKBOX_FIELD_TEST_ID);
      expect(encrypted.outerHTML).toContain("disabled");

      await testSelectNamedFieldCheckbox(wrapper, "masked");

      const encryptedEnabled = wrapper.getByTestId(
        ENCRYPTED_CHECKBOX_FIELD_TEST_ID
      );
      expect(encryptedEnabled.outerHTML).not.toContain("disabled");
    });
  });
});
