import { useSubjectSelector } from "../context/subjectContext";
import Subject from "./Subject";
import { IoLibraryOutline } from 'react-icons/io5'
import { IoMdAdd } from "react-icons/io"


export default function Sidebar() {

    const state = useSubjectSelector();
    const subjects = state.subjects;
    return (
        <div className="w-1/3 rounded-md h-screen ">
            <div className="h-16 rounded-md mb-4 bg-slate-100 flex items-center pl-8  tracking-wider"><div className="mr-4"><IoLibraryOutline /></div><h1 className="mx-4 text-2xl font-medium">Subjects</h1><div className="ml-auto mr-4 text-2xl hover:text-3xl hover:cursor-pointer" onClick={() => { alert("Handle create subject") }}>< IoMdAdd /></div></div>
            {subjects.map((subject) => {
                return <Subject subject={subject} />
            })}
        </div>
    )
}
