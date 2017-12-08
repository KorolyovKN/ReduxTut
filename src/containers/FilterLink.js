import { connect } from 'react-redux';
import { SetVilibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = ( state, ownProps ) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapdispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapdispatchToProps
)(Link)

export default FilterLink;