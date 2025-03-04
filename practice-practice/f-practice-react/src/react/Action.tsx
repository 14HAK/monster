import React, { useState } from "react";

const Action = (): React.ReactElement => {
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    "use server"; // Marks this function as a server action
    const name = formData.get("name") as string;
    setMessage(`Hello, ${name}! Form submitted successfully.`);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(new FormData(e.currentTarget));
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="enter your name..."
          required
        />
        <button type="submit">submit</button>
        <br />
        <p>{message}</p>
      </form>
    </>
  );
};

export default Action;
