import React from 'react'
import { GiBlackBook } from "react-icons/gi"
import { IoIosMore } from 'react-icons/io'
export default function Subject({ subject }) {
    return (
        <div className="h-12 rounded-md mb-0.5 bg-slate-100 flex items-center justify-between hover:bg-slate-200" >
            <div className='ml-8 mr-4 flex items-center hover:font-bold hover:text-bold hover:cursor-pointer' onClick={() => { alert("Handle words") }}>
                <div className="mr-4"><GiBlackBook /></div>
                <h1 className='mx-4 text-md'>
                    {subject.title}
                </h1>
            </div>
            <div className='mr-4 text-2xl hover:text-3xl hover:cursor-pointer' onClick={() => {
                alert("Handle edits")
            }}><IoIosMore /></div>
        </div>
    )
}
