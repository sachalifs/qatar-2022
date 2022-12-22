import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Equipo } from "./Equipo";
import { BanderaArgentina } from "../Banderas/Argentina.stories";
import { BanderaFrancia } from "../Banderas/Francia.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Qatar 2022/Equipo",
  component: Equipo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Equipo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Equipo> = (args) => <Equipo {...args} />;

export const EquipoArgentina = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EquipoArgentina.args = {
  nombre: "ARG",
  bandera: <BanderaArgentina />,
  colorEquipo: "#58B0C8",
  goles: 0,
  alineacion: "izquierda",
};

export const EquipoFrancia = Template.bind({});

EquipoFrancia.args = {
  nombre: "FRA",
  bandera: <BanderaFrancia />,
  colorEquipo: "#0020B7",
  goles: 0,
  alineacion: "derecha",
};
