import React from "react";
import Memories from "../MemoriesData";
import MemoryItem from "./MemoryItem";

export default function MemoryList() {
  const list = Memories.map((memory) => <MemoryItem incedent={memory} />);
  return <div class="memories">{list}</div>;
}
