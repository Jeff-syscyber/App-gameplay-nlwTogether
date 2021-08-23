import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = 'https://iconape.com/wp-content/files/bn/380462/svg/380462.png';
  return (
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
  )
}
