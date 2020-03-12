import React from 'react'
import './index.less'

class LogoRotate extends React.PureComponent {
  render() {
    return (
      <div className='wrapper-logo' style={{width: this.props.width, height: this.props.width}}>
        <div className='border-logo' style={{width: this.props.width, height: this.props.width}}>
          <div className='border-1' style={{width: this.props.width, height: this.props.width}}></div>
          <div className='border-2' style={{width: this.props.width * 0.8, height: this.props.width * 0.8}}></div>
          <div className='border-3' style={{width: this.props.width * 0.6, height: this.props.width * 0.6}}></div>
        </div>
      </div>
    )
  }
}

export default LogoRotate