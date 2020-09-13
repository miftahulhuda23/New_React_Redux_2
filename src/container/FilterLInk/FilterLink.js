import { connect } from "react-redux"
import { setVisibilityFilter } from "../../store/action/index"
import Link from "../../components/TodoList/Link/Link"

const mapStateToProps = (state, ownProps) => ({
    active : ownProps.filter === state.setVisibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})


export default connect(mapStateToProps, mapDispatchToProps) (Link)