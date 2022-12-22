import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Marcador } from "./Marcador";
import { BanderaArgentina } from "../Banderas/Argentina.stories";
import { BanderaFrancia } from "../Banderas/Francia.stories";
import { IEquipo } from "../../types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Qatar 2022/Marcador",
  component: Marcador,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Marcador>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Marcador> = (args) => (
  <Marcador {...args} />
);

const argentina: IEquipo = {
  nombre: "ARG",
  bandera: <BanderaArgentina />,
  colorEquipo: "#58B0C8",
  goles: 0,
};

const francia: IEquipo = {
  nombre: "FRA",
  bandera: <BanderaFrancia />,
  colorEquipo: "#0020B7",
  goles: -10,
};

export const MarcadorInicioDePartido = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MarcadorInicioDePartido.args = {
  minutos: 0,
  segundos: 0,
  equipo1: argentina,
  equipo2: francia,
};
