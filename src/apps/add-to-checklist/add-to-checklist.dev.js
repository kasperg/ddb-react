import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import AddToChecklist from "./add-to-checklist.entry.js";

export default {
  title: "Apps|Add to Checklist",
  decorators: [withKnobs]
};

export function entry() {
  return (
    <AddToChecklist
      ddb-text={text("Text", "Tilføj til den bedste huskeliste")}
      ddb-id={text("Material ID", "870970-basis:54172613")}
    />
  );
}