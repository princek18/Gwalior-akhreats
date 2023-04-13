import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy",
    email: "abc@gmail.com",
  },
});

export default userContext;
