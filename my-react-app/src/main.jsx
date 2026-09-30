import { createRoot } from "react-dom/client";

import MySection from "./MySection";
import MyButton from "./MyButton";

createRoot(document.getElementById("root")).render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
); 
