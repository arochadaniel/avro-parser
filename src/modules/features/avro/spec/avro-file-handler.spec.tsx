import { AvroFileHandler } from "../avro-file-handler";
import { FC } from "react";
import { render } from "@testing-library/react";

describe("<AvroFileHandler />", () => {
  const Component: FC = () => {
    return <AvroFileHandler />;
  };

  it("should render without crashing", () => {
    const wrapper = render(<Component />);
    wrapper.unmount();
  });
});
