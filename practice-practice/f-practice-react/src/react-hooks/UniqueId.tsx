/* eslint-disable react/react-in-jsx-scope */
import { useId } from "react";

function UniqueId() {
  const id = useId();
  console.log(id); //:r0: //:r1: ......
  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </div>
  );
}

export default UniqueId;
