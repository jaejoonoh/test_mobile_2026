import { createRoot } from "react-dom/client";

import WithoutFragments from "./WithoutFragments";
import WithFragments from "./WithFragments";

createRoot(document.getElementById("root")).render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>
); 
