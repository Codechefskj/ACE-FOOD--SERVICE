import { createContext, useContext } from "react"

const usercontext = createContext({
  user :{
    name: "SAMXXXXXXX",
    email: "xxxxxxxxxxx@gmail.com"
  }
})
export default usercontext; 