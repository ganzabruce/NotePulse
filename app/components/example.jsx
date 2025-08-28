// "use client"
import React from 'react'

const Listing = () => {
  return (
    <div>
        <ul className="list bg-base-100 rounded-box shadow-md">
  
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">your listing</li>
            
            <li className="list-row">
                <div>
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">Urgency</div>
                </div>
                <button className="btn btn-square btn-ghost">
                    <i className="fa-solid fa-pencil"></i>
                </button>
                <button className="btn btn-square btn-ghost">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>         
        </ul>
    </div>
  )
}

export default Listing