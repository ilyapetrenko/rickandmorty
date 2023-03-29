import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {ramActions} from "../store/reducers/ramSlice";

const actions = {
    ...ramActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}