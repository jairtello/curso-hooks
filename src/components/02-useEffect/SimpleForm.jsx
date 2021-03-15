import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambió");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="container mt-5">
      <h1>Use Effect</h1>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tú nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="emai@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </div>
  );
};

export default SimpleForm;
