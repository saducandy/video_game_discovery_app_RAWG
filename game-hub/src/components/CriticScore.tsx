import React, { useEffect, useState } from "react";
import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface MetaC {
  score: number;
}

const CriticScore = ({ score }: MetaC) => {
  let color = "";

  color = score > 90 ? "green" : score > 60 ? "yellow" : "";

  return (
    <div>
      <Badge fontSize="0.8em" colorScheme={color}>
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
