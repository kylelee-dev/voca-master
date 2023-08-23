import axios from "axios";

import { useSubjectDispatch } from "../context/subjectContext";
import { useNavigate } from "react-router-dom";
import { useAuthSelector } from "../context/authContext";
const useGetSubjects = () => {
    const state = useAuthSelector();
    const id = state.user._id
    const baseUrl = "http://localhost:8000/subject"
    const dispatch = useSubjectDispatch()
    const navigate = useNavigate();
    const getSubjects = async () => {
        dispatch({ type: "PENDING" })
        try {
            const response = await axios.get(baseUrl + "/getAll/" + id)
            dispatch({ type: "GET_SUBJECTS", payload: response.data })
            navigate("/study");
            console.log(response)
        } catch (error) {
            dispatch({ type: "REJECTED", payload: error.response.data })
        }


    }

    return getSubjects;


}






export default useGetSubjects;