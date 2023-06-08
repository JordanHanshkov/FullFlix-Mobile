import { Image, Pressable } from "react-native";
import { styles } from "./styles";
import { StyleSheet } from "react-native";

interface Movie {
    id: number;
    poster_path: string;
}

interface Props {
    data: Movie;
    onPress?: () => void;
}

export function Card({ data, ...rest }: Props) {
    return (
      <Pressable {...rest} style={styles.cardMovies}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          }}
          style={styles.cardImage}
        />
      </Pressable>
    );
  }


  const styles = StyleSheet.create({
    cardImage: {
      width: 100,
      height: 145,
      borderRadius: 15,
    },
    cardMovies: {
      width: 100,
      height: 145,
      borderRadius: 15,
      marginHorizontal: 5,
      marginBottom: 10,
      backgroundColor: "#424242",
    },
  });

  export default Card;