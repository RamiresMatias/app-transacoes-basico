import { useContext } from "react"
import AppContext from "../context/AppContext";

export function useApp(){
    const value = useContext(AppContext)
    return value
}