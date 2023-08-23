import { createContext, useContext, useEffect, useReducer } from "react"

type ISubject = {
    title: string,
    words: string[]
}
type ISubjects = {
    subjects: ISubject[],
    isLoading: boolean,
    isError: boolean,
    error: object
}
const SubjectContext = createContext(null)
const SubjectDispatchContext = createContext(null)



const initialState: ISubjects = {
    subjects: localStorage.getItem("subjects") ? JSON.parse(localStorage.getItem("subjects")) : [],
    isLoading: true,
    isError: false,
    error: {}
}

const subjectReducer = (state, { type, payload }) => {
    switch (type) {
        case "PENDING":
            return { ...state, isLoading: true, isError: false, error: {} }
        case "GET_SUBJECTS":
            return { ...state, isLoading: false, isError: false, error: {}, subjects: payload }
        case "ADD_SUBJECT":
            return {
                ...state, isLoading: false, isError: false, error: {}, subjects: [...state.subjects, payload]
            }
        case "REMOVE_SUBJECT":
            return {
                ...state, isLoading: false, isError: false, error: {}, subjects: state.subjects.filter(subject => {
                    subject._id !== payload._id
                })
            }
        case "UPDATE_SUBJECT":
            return null;
        case "EMPTY_SUBJECTS":
            return {
                ...state, isLoading: false, isError: false, error: {}, subjects: payload
            }
        case "REJECTED":
            return { ...state, isLoading: false, isError: true, error: payload ? { payload } : {} }
        default:
            return { ...state }
    }
}

export const SubjectContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(subjectReducer, initialState);
    useEffect(() => {
        localStorage.setItem('subjects', JSON.stringify(state.subjects))
    }, [state])
    return (
        <SubjectContext.Provider value={state}>
            <SubjectDispatchContext.Provider value={dispatch}>
                {children}</SubjectDispatchContext.Provider>
        </SubjectContext.Provider>)
}




export const useSubjectSelector = () => useContext(SubjectContext);
export const useSubjectDispatch = () => useContext(SubjectDispatchContext);