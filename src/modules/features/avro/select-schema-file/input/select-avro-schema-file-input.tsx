import { ChangeEventHandler, FC, Fragment, useCallback, useRef } from "react";

import { useAvroFileContext } from "@features/avro/context/avro-file-context";

interface Props {}

export const SelectAvroSchemaFileInput: FC<Props> = () => {
  const { setSchema } = useAvroFileContext();
  const fileInput = useRef<HTMLInputElement>(null);

  const handleButtonClick = useCallback(() => {
    if (!fileInput.current) return;
    fileInput.current.click();
  }, []);

  const handleReceiveFile = useCallback<ChangeEventHandler<HTMLInputElement>>(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) {
        return;
      }

      const text = await file.text();
      if (!text) {
        return;
      }

      const data = JSON.parse(text);
      if (!data) {
        return;
      }

      setSchema(data);
    },
    [setSchema]
  );

  return (
    <Fragment>
      <button onClick={handleButtonClick}>Upload from disk</button>
      <input
        hidden
        type="file"
        ref={fileInput}
        accept=".avsc"
        onChange={handleReceiveFile}
      />
    </Fragment>
  );
};
