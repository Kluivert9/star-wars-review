import React from 'react'
import Loadable from 'react-loadable'
import {connect} from 'react-redux'
import Spinner from '../../components/Spinner'

const LoadableMain = Loadable({
  loader: () => import('../Main'),
  loading: Spinner
})

const LoadableForm = Loadable({
  loader: () => import('../Form'),
  loading: Spinner
})

const LoadableFinalScreen = Loadable({
  loader: () => import('../FinalScreen'),
  loading: Spinner
})

function App({step}) {
  return (
    <div className="container">
      {
        step === 1 && <LoadableMain /> ||
        step === 2 && <LoadableForm /> ||
        step === 3 && <LoadableFinalScreen />
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    step: state.step.step
  }
}

export default connect(mapStateToProps, null)(App)
