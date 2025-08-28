"use client"
import React from 'react'
import Input from './input'
import { NoteContextProvider } from '../context/noteContext'
const Navbar = () => {
  return (
    <NoteContextProvider>
    <div className="navbar bg-base-100 shadow-sm mb-3">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">NotePulse</a>
        </div>
        <div className="flex-none">
            <button>
                
            </button>
            <a href='https://github.com/ganzabruce/NotePulse' target='_blank' className='mr-6 font-bold'>
                <i className="fa-brands fa-github m-2"></i>
                code
            </a>
            
        </div>
    </div>
    </NoteContextProvider>
  )
}

export default Navbar