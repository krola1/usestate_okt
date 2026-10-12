import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["lars er en fisk"]);

  const onAdd = (e) => {
    e.preventDefault();

    if (text.trim()) {
      setList((prev) => [...prev, text]);
      setText("");
    }
  };

  return (
    <>
      <form onSubmit={onAdd} action="">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>
      <h3>{text}</h3>
      <h3>liste</h3>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
