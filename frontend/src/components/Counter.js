import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

function Counter({counter, inc, dec, rnd}) {
  return (
    <Fragment>
      <h2 id="counter">{counter}</h2>
       <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>DEC</button> 
       <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>INC</button> 
       <button id="rnd" className="btn btn-primary btn-lg" onClick={rnd}>RND</button> 
    </Fragment>
  )
}

const mapStateToProps = (st) => {
  return {
    counter: st
  }
}

const mapDispatchToProps = (dispatch) => {
  const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
  return {
    inc,
    dec,
    rnd: () => {
      let randomValue = Math.floor(Math.random() * 10)
      rnd(randomValue)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
