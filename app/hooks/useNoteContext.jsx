"use client"
import { useContext } from "react"
import { noteContext } from "../context/noteContext"

export const useNoteContext = ()=>{
    const context = useContext(noteContext)
    if(!context){
        return console.log("the context must be provided")
    }
    return context
}