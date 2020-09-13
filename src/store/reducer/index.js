import { combineReducers } from "redux"
import todos from "./todos.js"
import visibilityFilter from './visibilityFIlter'

export default combineReducers({
    todos,
    visibilityFilter,
})