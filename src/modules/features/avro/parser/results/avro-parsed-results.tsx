import { FC, useMemo } from "react";

import { AvroFieldResultType } from "@features/avro/context/types";
import { useAvroFileContext } from "@features/avro/context";

interface Props {}

export const AvroParsedResults: FC<Props> = () => {
  const { result } = useAvroFileContext();

  const { list, keys } = useMemo(() => {
    if (!result) return { list: [], keys: [] };
    return { list: Object.values(result), keys: Object.keys(result) };
  }, [result]);

  if (!list.length) {
    return null;
  }

  return (
    <div>
      {list.map((r, i) => {
        const type = keys[i] as AvroFieldResultType;

        if (!r.length) {
          return null;
        }

        return (
          <div key={type}>
            <p>
              You have selected below columns for{" "}
              <b>{type === "encrypted" ? "Encryption" : "Masking"}</b>
            </p>
            <ul>
              {r.map((m, i) => {
                return <li key={m.path + `${i}`}>{m.path}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
