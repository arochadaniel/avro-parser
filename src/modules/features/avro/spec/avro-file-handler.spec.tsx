import { act, fireEvent, render } from "@testing-library/react";

import { AVRO_FILE_PARSER_TEST_ID } from "../parser";
import { AVRO_SCHEMA_UPLOAD_INPUT_TEST_ID } from "../select-schema-file/input";
import { AvroFileHandler } from "../avro-file-handler";
import { FC } from "react";
import { SELECT_AVRO_SCHEMA_FILE_TEST_ID } from "../select-schema-file";
import { mockAvscFileContent } from "./fixtures";

describe("<AvroFileHandler />", () => {
  const Component: FC = () => {
    return <AvroFileHandler />;
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });

  describe("business rules", () => {
    it("should show file upload handler when schema is not set", async () => {
      const wrapper = render(<Component />);

      const fileHandler = wrapper.queryByTestId(
        SELECT_AVRO_SCHEMA_FILE_TEST_ID
      );

      expect(fileHandler).toBeTruthy();
    });

    it("should show avro file parser when schema is set", async () => {
      File.prototype.text = async () => {
        return mockAvscFileContent;
      };

      const file = new File([mockAvscFileContent], "test-schema.avsc");

      const wrapper = render(<Component />);

      const fileInput = wrapper.getByTestId(AVRO_SCHEMA_UPLOAD_INPUT_TEST_ID);
      await act(async () => {
        fireEvent.change(fileInput, {
          target: { files: [file] },
        });
      });

      const fileHandler = wrapper.queryByTestId(
        SELECT_AVRO_SCHEMA_FILE_TEST_ID
      );

      expect(fileHandler).toBeFalsy();

      const schemaParser = wrapper.queryByTestId(AVRO_FILE_PARSER_TEST_ID);
      expect(schemaParser).toBeTruthy();
    });
  });
});
