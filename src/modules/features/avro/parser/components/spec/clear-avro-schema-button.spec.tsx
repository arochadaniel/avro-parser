import { FC, useEffect, useState } from "react";
import {
  mockAvroNamedType,
  mockAvscFileContent,
} from "@features/avro/spec/fixtures";

import { AvroFileContextProvider } from "@features/avro/context";
import { AvroParsedResults } from "../../results";
import { AvroSchema } from "@features/avro/types";
import { ClearAvroSchemaButton } from "../clear-avro-schema-button";
import { render } from "@testing-library/react";
import { testSubmitClearAvroSchemaButton } from "./test-submit-clear-avro-schema-button";
import { useAvroFieldParseResult } from "../../results/hooks";

describe("<ClearAvroSchemaButton  />", () => {
  const parsedSchema = JSON.parse(mockAvscFileContent) as AvroSchema;
  const Component: FC = () => {
    const [schema, setSchema] = useState<AvroSchema | undefined>(parsedSchema);
    const results = useAvroFieldParseResult();

    const { appendField } = results;

    useEffect(() => {
      appendField(
        { field: mockAvroNamedType, path: mockAvroNamedType.name },
        "encrypted"
      );
    }, [appendField]);

    return (
      <AvroFileContextProvider value={{ setSchema, ...results }}>
        <ClearAvroSchemaButton />
        {schema && <div>{schema.name}</div>}
        <AvroParsedResults />
      </AvroFileContextProvider>
    );
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });

  describe("business rules", () => {
    it("should remove schema on click", async () => {
      const wrapper = render(<Component />);

      const schemaName = wrapper.queryByText(parsedSchema.name);
      expect(schemaName).toBeTruthy();

      await testSubmitClearAvroSchemaButton(wrapper);

      const schemaNameRemoved = wrapper.queryByText(parsedSchema.name);
      expect(schemaNameRemoved).toBeFalsy();
    });

    it("should remove results on click", async () => {
      const wrapper = render(<Component />);

      const resultsVisible = wrapper.queryByText(mockAvroNamedType.name);
      expect(resultsVisible).toBeTruthy();

      await testSubmitClearAvroSchemaButton(wrapper);

      const resultsRemoved = wrapper.queryByText(mockAvroNamedType.name);
      expect(resultsRemoved).toBeFalsy();
    });
  });
});
