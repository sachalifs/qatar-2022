import { Box } from "@chakra-ui/react";

import { SIZE } from "./constants";

interface Props {
  color: string;
}

export const ColorEquipo = ({ color }: Props) => (
  <Box
    bg={color}
    style={{ height: SIZE, width: SIZE, transform: "rotate(45deg)" }}
  />
);
