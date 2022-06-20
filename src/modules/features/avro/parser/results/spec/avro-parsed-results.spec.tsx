import { AvroFileContextProvider } from "@features/avro/context";
import { AvroNamedTypeItem } from "../../mapper/named-type-item";
import { AvroParsedResults } from "../avro-parsed-results";
import { FC } from "react";
import { mockAvroNamedType } from "@features/avro/spec/fixtures";
import { render } from "@testing-library/react";
import { testSelectNamedFieldCheckbox } from "../../mapper/named-type-item/spec/test-select-named-field-checkbox";
import { useAvroFieldParseResult } from "@features/avro/parser/results/hooks";

describe("<AvroParsedResults />", () => {
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
        <AvroParsedResults />
      </AvroFileContextProvider>
    );
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });

  describe("business rules", () => {
    it("should show selected field result when checkbox is clicked", async () => {
      const wrapper = render(<Component />);

      const initialState = wrapper.queryAllByText(mockAvroNamedType.name);
      expect(initialState.length).toEqual(1);

      await testSelectNamedFieldCheckbox(wrapper, "encrypted");

      const success = wrapper.queryAllByText(mockAvroNamedType.name);
      expect(success.length).toEqual(2);
    });

    it("should remove selected field result when clicked again", async () => {
      const wrapper = render(<Component />);

      const initialState = wrapper.queryAllByText(mockAvroNamedType.name);
      expect(initialState.length).toEqual(1);

      await testSelectNamedFieldCheckbox(wrapper, "encrypted");

      const midState = wrapper.queryAllByText(mockAvroNamedType.name);
      expect(midState.length).toEqual(2);

      await testSelectNamedFieldCheckbox(wrapper, "encrypted");

      const failure = wrapper.queryAllByText(mockAvroNamedType.name);
      expect(failure.length).toEqual(1);
    });
  });
});
