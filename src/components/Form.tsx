import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors({});

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setName("");
    setEmail("");
    setAgree(false);

    alert("Thanks for subscribing!");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>
      <div className="flex flex-col ">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          placeholder="Enter your e-mail:"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>
      <div className="flex flex-col ">
        <a href="#" className="text-xs underline mb-2 ">
          Read the terms.
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            I agree to the terms.
          </label>
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
        )}
      </div>
      <button className="btn bg-slate-600 hover:bg-slate-500 text-sm py-2 px-4 rounded-3xl text-white">
        Register
      </button>
    </form>
  );
};

export default Form;
