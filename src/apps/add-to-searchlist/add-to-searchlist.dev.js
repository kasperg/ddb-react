import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import AddToSearchlist from "./add-to-searchlist.entry.js";

export default {
  title: "Apps|Add to Searchlist",
  decorators: [withKnobs]
};

export function entry() {
  return (
    <AddToSearchlist
      text={text("Button text", "Add search")}
      label={text("Field title", "Search title")}
      defaultTitle={text("Default title", "Harry Potter")}
      searchQuery={text("Search query", "harry potter")}
      addButtonLabel={text("Add button label", "Add")}
    />
  );
}