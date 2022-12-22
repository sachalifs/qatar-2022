import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import { ColorEquipo } from "../ColorEquipo/ColorEquipo";
import { IEquipo } from "../../types";

interface Props {
  alineacion: "izquierda" | "derecha";
}

export const Equipo = ({
  nombre,
  bandera,
  colorEquipo,
  goles,
  alineacion,
}: IEquipo & Props) =>
  alineacion === "izquierda" ? (
    <Box display="flex" alignItems="center">
      <Box mr="4">{bandera}</Box>
      <Box mr="2">
        <ColorEquipo color={colorEquipo} />
      </Box>
      <Box mr="6">{nombre}</Box>
      {goles}
    </Box>
  ) : (
    <Box display="flex" alignItems="center">
      {goles}
      <Box ml="6">{nombre}</Box>
      <Box ml="2">
        <ColorEquipo color={colorEquipo} />
      </Box>
      <Box ml="4">{bandera}</Box>
    </Box>
  );
