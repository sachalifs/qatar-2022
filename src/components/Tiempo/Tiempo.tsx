import { Text } from "@chakra-ui/react";

import { pad } from "../../utils/numbers";

interface Props {
  minutos: number;
  segundos: number;
}

export const Tiempo = ({ minutos, segundos }: Props) => (
  <div>
    <Text>
      {pad(minutos)}:{pad(segundos)}
    </Text>
  </div>
);
