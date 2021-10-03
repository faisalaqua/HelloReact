import React from "react";

export default function MemoryItem(props) {
  return (
    <div>
      <img class="memories-list" src={props.incedent.photo} />
      <p>{props.incedent.name}</p>
      <p>{props.incedent.date}</p>
    </div>
  );
}
