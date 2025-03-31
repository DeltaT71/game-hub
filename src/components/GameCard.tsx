import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
