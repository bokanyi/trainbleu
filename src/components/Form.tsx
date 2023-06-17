import { useState } from "react";
import { CustomButton } from "./CustomButton";
import { Card } from "./Card";
import emailjs from "emailjs-com";

const defaultInputValues = {
  user: "trainbleukft@gmail.com",
  name: "",
  email: "",
  text: "",
};

export const Form = () => {
  const [values, setValues] = useState(defaultInputValues);
  const [valid, setValid] = useState(false);
  const [open, setOpen] = useState(false);

  const [helperText, setHelperText] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [errorMsg, setErrorMsg] = useState(helperText);

  const validation = (name: string, email: string, text: string): void => {
    setHelperText({ name: "", email: "", text: "" });
    setValid(true);

    if (name.length < 3) {
      setHelperText((prevState) => {
        return { ...prevState, name: "Adja meg nevét!" };
      });
      setValid(false);
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setHelperText((prevState) => {
        return { ...prevState, email: "Érvénytelen e-mail!" };
      });
      setValid(false);
    }
    if (text.length < 5) {
      setHelperText((prevState) => {
        return { ...prevState, text: "Töltse ki az üzenet mezőt!" };
      });
      setValid(false);
    }
  };

  const sendMail = () => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        values,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setOpen(false);
          setValues({ user: "trainbleukft@gmail.com", name: "", email: "", text: "" });
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const sendData = () => {
    validation(values.name, values.email, values.text);
    if (valid) {
      sendMail();
      //   console.log("message sent", values);
    } else return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(helperText);
    sendData();
  };

  return (
    <div className="relative py-20 items-center">
      {open && (
        <Card custom="max-w-xs md:max-w-lg mb-10">
          <form
            className="flex flex-col gap-4 align-middle "
            onChange={() => {
              validation(values.name, values.email, values.text);

              console.log(helperText);
            }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col md:flex-row gap-4 align-middle justify-between ">
              <div className="flex flex-col md:gap-4 align-middle">
                <label htmlFor="name">Név:</label>
                <input
                  id="name"
                  className="bg-stone-200 rounded-md"
                  value={values.name}
                  onChange={(e) => {
                    setValues({ ...values, name: e.target.value });
                    setErrorMsg((prevState) => {
                      return { ...prevState, name: "" };
                    });
                  }}
                />
                {errorMsg.name.length > 0 && (
                  <p className="text-red-500 underline">{errorMsg.name}</p>
                )}
              </div>
              <div className="flex flex-col md:gap-4 align-middle">
                <label htmlFor="email">E-mail:</label>
                <input
                  id="email"
                  className="bg-stone-200 rounded-md"
                  value={values.email}
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value });
                    setErrorMsg((prevState) => {
                      return { ...prevState, email: "" };
                    });
                  }}
                />
                {errorMsg.email.length > 0 && (
                  <p className="text-red-500 underline">{errorMsg.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:gap-4 align-middle">

            <label htmlFor="last-name">Üzenet:</label>
            <textarea
              className="bg-stone-200 rounded-md"
              value={values.text}
              onChange={(e) => {
                setValues({ ...values, text: e.target.value });
                setErrorMsg((prevState) => {
                  return { ...prevState, text: "" };
                });
              }}
            />
            {errorMsg.text.length > 0 && (
              <p className="text-red-500 underline">{errorMsg.text}</p>
            )}
            </div>

            <CustomButton
              custom="bg-sky-300 w-20"
              type="submit"
              //   onPress={(e) => handleSubmit(e)}
              //   style={{ marginTop: 10 }}
            >
              Küldés
            </CustomButton>
          </form>
        </Card>
      )}

      <h2
        className="inline-block cursor-pointer shadow-none px-4 transition-all  duration-700 hover:shadow-inner underline text-red-00  border-stone-500 italic"
        onClick={() => setOpen(true)}
      >
        Kérjen árajánlatot
      </h2>
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:inline hidden md:w-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:inline hidden  md:w-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      )}
    </div>
  );
};
