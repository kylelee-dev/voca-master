import { useSubjectDispatch } from "../context/subjectContext";

const useEmptySubjects = () => {
    const dispatch = useSubjectDispatch()

    const emptySubjects = () => {
        try {

            dispatch({ type: "EMPTY_SUBJECTS", payload: [] })
        } catch (error) {

            const { errorName, msg } = error.response.data
            dispatch({ type: "REJECTED", payload: { errorName, msg } })
        }
    }

    return emptySubjects;
}


export default useEmptySubjects;