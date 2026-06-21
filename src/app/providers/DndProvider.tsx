import type { PropsWithChildren } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const AppDndProvider = ({ children }: PropsWithChildren) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

export { AppDndProvider };
