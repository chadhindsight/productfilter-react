vi.mock("../../context/globalState", () => ({
    useAppContext: vi.fn(),
    AppProvider: ({ children }) => <div>{children}</div>
  }));

import { describe, expect, it } from "vitest";
