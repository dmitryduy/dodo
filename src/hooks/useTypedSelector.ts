import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../redux/reducers";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;