import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    password: "",
    email: "",
  });

  const { name, password, email } = formValues;

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h1>FormWithCustomHook</h1>

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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
