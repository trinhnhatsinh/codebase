import React from 'react'
import './index.less'

import NavBar from '@components/nav-bar'

class Menu extends React.PureComponent {
  render() {
    return (
      <div className='section-left'>
        <div className='introduce-summary'>
          <p className='name-title'>Trịnh Nhất Sinh</p>
          <p className='job-title'>Web Developer</p>
        </div>
        <NavBar handleScrolling={this.props.handleScrolling} />
      </div>
    )
  }
}

export default Menu