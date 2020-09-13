import { connect } from 'react-redux'
import { toggleTodo, visibilityFilter } from '../../store/action/index'
import TodoList from '../../components/TodoList/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilter.SHOW_ALL:
            return todos
        case visibilityFilter.SHOW_COMPLETED:
            return todos.filter((t) => t.completed)
        case visibilityFilter.SHOW_ACTIVE:
            return todos.filter((t) => !t.completed)
        default:
             return todos
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)
