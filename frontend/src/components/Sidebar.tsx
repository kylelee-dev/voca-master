import { useSubjectSelector } from "../context/subjectContext";
import Subject from "./Subject";
import { IoLibraryOutline } from 'react-icons/io5'
import { IoMdAdd } from "react-icons/io"
import ModalForm from "./ModalForm";
import { useState } from "react";
import useAddSubject from "../hooks/useAddSubject";


export default function Sidebar() {

    const [title, setTitle] = useState("");
    const state = useSubjectSelector();
    const subjects = state.subjects;
    const addSubject = useAddSubject();
    const setTitleValue = (e) => (setTitle(e.target.value))
    return (
        <div className="w-1/3 rounded-md h-screen ">
            <div className="h-16 rounded-md mb-4 bg-slate-100 flex items-center pl-8  tracking-wider">
                <div className="mr-4"><IoLibraryOutline /></div>
                <h1 className="mx-4 text-2xl font-medium">Subjects</h1>
                <div className="ml-auto mr-4">
                    <ModalForm Btn={<div className='text-2xl hover:text-3xl hover:cursor-pointer'>
                        <IoMdAdd />
                    </div>}>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addSubject({ title })
                            setTitle("")
                        }}>
                            <div className='absolute top-1/2 sm:left-1/3 flex flex-col w-full h-fit sm:max-w-md bg-slate-50 border-white border-2 rounded-lg'>
                                <h1 className="mx-auto text-3xl my-10">Create a subject</h1>
                                <input className="mx-auto my-2 w-1/3 h-7 py-6 px-3 rounded-lg" type="text" name="title" id="title" value={title} onChange={setTitleValue} required placeholder="Subject Title" />
                                <button className="mx-auto mt-5 mb-10 w-1/4 h-fit p-2 border-2 rounded-lg bg-slate-100 hover:bg-slate-200" type="submit">Create</button>
                            </div>
                        </form>
                    </ModalForm>
                </div>
            </div>
            {subjects.map((subject) => {
                return <Subject subject={subject} />
            })}
        </div>

    )
}
