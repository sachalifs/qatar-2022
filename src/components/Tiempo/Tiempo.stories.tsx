import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tiempo } from "./Tiempo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Qatar 2022/Tiempo",
  component: Tiempo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Tiempo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tiempo> = (args) => <Tiempo {...args} />;

export const InicioDePartido = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InicioDePartido.args = {
  minutos: 0,
  segundos: 0,
};

export const FinalDelPrimerTiempo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FinalDelPrimerTiempo.args = {
  minutos: 45,
  segundos: 0,
};

export const FinalDelSegundoTiempo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FinalDelSegundoTiempo.args = {
  minutos: 90,
  segundos: 0,
};
