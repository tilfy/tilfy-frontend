import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class SignOut extends Component {
  handleDestroySession = (e) => {
    console.log(this.props)
    this.props.dispatch({ type: 'DESTROY_SESSION' })
    this.props.history.push('/sign_in')
  }

  render(){
    return(
      <section className='SignOut'>
        <button
          onClick={this.handleDestroySession}
        >
          Cerrar sesion
        </button>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    baseUrl: state.data.baseUrl,
    auth: {
      ...state.data.auth
    }
  }
}

export default withRouter(connect(mapStateToProps)(SignOut));