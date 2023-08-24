import React from 'react'
import { GiBlackBook } from "react-icons/gi"
import { IoIosMore } from 'react-icons/io'
import { BiEdit } from "react-icons/bi"
import { RiDeleteBinLine } from "react-icons/ri"
import { IoCloseOutline } from "react-icons/io5"
import Popover from '@mui/material/Popover';
import ModalForm from './ModalForm'

export default function Subject({ subject }) {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="h-12 rounded-md mb-0.5 bg-slate-100 flex items-center justify-between hover:bg-slate-200" >
            <div className='ml-8 mr-4 flex items-center hover:font-bold hover:text-bold hover:cursor-pointer' onClick={() => { alert("Handle words") }}>
                <div className="mr-4"><GiBlackBook /></div>
                <h1 className='mx-4 text-md'>
                    {subject.title}
                </h1>
            </div>
            <div className='mr-4 text-2xl hover:text-3xl hover:cursor-pointer' aria-describedby={id} onClick={handleClick}>
                <IoIosMore />
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >   <div className='flex justify-between m-3 w-fit items-center'>
                    <div className='ml-2 mr-2 text-xl hover:cursor-pointer hover:text-2xl' onClick={() => alert("Clicked A")}><BiEdit /></div>
                    <div className='ml-2 mr-8 text-xl hover:cursor-pointer  hover:text-2xl'><RiDeleteBinLine /></div>
                    <div className=' text-xl absolute top-2 right-2 hover:cursor-pointer  hover:text-2xl' onClick={handleClose}><IoCloseOutline /></div>

                </div>
            </Popover>
        </div>
    )
}
