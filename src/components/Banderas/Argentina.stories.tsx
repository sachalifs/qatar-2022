import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Argentina from "./Argentina";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Qatar 2022/Banderas/Argentina",
  component: Argentina,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Argentina>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Argentina> = (args) => (
  <Argentina {...args} />
);

export const BanderaArgentina = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
