import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        margin: 0,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};
