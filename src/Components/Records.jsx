import React, { Component } from 'react';
import fetchRecordsAction from '../fetchRecords';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getError, getPending, getRecords} from '../reducer'

class Records extends Component {
    componentWillMount() {
        this.props.fetchRecords();
    }

    shouldComponentRender() {
        // const {pending} = this.props;
        // if(pending === false) return false;
        // return true;
    }
    render() {
    return (
        <div>Toto</div>
    )
  }
}

const mapStateToProps = state => ({
    error: getError(state),
    pending: getPending(state),
    records: getRecords(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRecords: fetchRecordsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Records);

