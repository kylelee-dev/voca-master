import axios from "axios";
import { useSubjectDispatch } from "../context/subjectContext";
import { useAuthDispatch, useAuthSelector } from "../context/authContext";

const useAddSubject = () => {
    const dispatch = useSubjectDispatch()
    const authDispatch = useAuthDispatch();
    const baseUrl = "http://localhost:8000/subject"
    const authState = useAuthSelector()
    const addSubject = async ({ title }) => {
        dispatch({ type: "PENDING" })

        try {
            const response = await axios.post(baseUrl, { userId: authState.user._id, title });
            const subject = response.data
            console.log(subject)
            const id = subject._id;
            dispatch({ type: "ADD_SUBJECT", payload: subject })
            authDispatch({ type: "PUSH_SUBJECT", payload: [...(authState.user.subjects), id] })

        } catch (error) {

            dispatch({ type: "REJECTED", payload: error.response.data })
        }

    }
    return addSubject
}




export default useAddSubject;