import React from 'react'
import './index.less'

class Intro extends React.PureComponent {
  componentDidMount () {
    var idTimeout = setTimeout(() => {
      this.handleHideIntro()
      clearTimeout(idTimeout)
    }, 2000)
  }

  handleHideIntro = () => {
    if(this.refs['wrapper-intro']) {
      this.refs['wrapper-intro'].style.display = 'none'
    }
  }

  render() {
    return (
      <div className='wrapper-intro' ref='wrapper-intro'>
        <div className='border-intro'>
          <div className='border-1'></div>
          <div className='border-2'></div>
          <p className='text'>S</p>
        </div>
      </div>
    )
  }
}

export default Intro