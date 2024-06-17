import { useContext } from "react"
import AuthContext from "../authContext/AuthContext"

export const useAuth = ()=> {return useContext(AuthContext)}
