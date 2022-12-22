import { Box } from "@chakra-ui/react";
import { IEquipo } from "../../types";
import { Equipo } from "../Equipo/Equipo";
import { Tiempo } from "../Tiempo/Tiempo";

interface Props {
  minutos: number;
  segundos: number;
  equipo1: IEquipo;
  equipo2: IEquipo;
}

export const Marcador = ({ minutos, segundos, equipo1, equipo2 }: Props) => (
  <Box display="flex" alignItems="center">
    <Box px="6">
      <Tiempo minutos={minutos} segundos={segundos} />
    </Box>
    <Box mr="6">
      <Equipo
        nombre={equipo1.nombre}
        bandera={equipo1.bandera}
        colorEquipo={equipo1.colorEquipo}
        goles={equipo1.goles}
        alineacion="izquierda"
      />
    </Box>
    <Equipo
      nombre={equipo2.nombre}
      bandera={equipo2.bandera}
      colorEquipo={equipo2.colorEquipo}
      goles={equipo2.goles}
      alineacion="derecha"
    />
  </Box>
);
