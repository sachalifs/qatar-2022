import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColorEquipo } from "./ColorEquipo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Qatar 2022/ColorEquipo",
  component: ColorEquipo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof ColorEquipo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColorEquipo> = (args) => (
  <ColorEquipo {...args} />
);

export const ColorEquipoArgentina = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorEquipoArgentina.args = {
  color: "#58B0C8",
};

export const ColorEquipoFrancia = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorEquipoFrancia.args = {
  color: "#0020B7",
};
