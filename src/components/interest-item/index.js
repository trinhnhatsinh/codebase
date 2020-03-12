import React from 'react'
import './index.less'

import soccerIcon from '@misc/images/svg/sport.svg'

class InterestItem extends React.PureComponent {

  componentDidUpdate() {
    const { index, onInterest } = this.props

    if(this.refs['interest-item'] && onInterest) {
      setTimeout(this.handleDisplay, index * 1 * 1000)
      setTimeout(this.handleChangeBackground, (index * 1 + 0.6) * 1000)
    }
  }

  handleDisplay = () => {
    this.refs['interest-item'].style.opacity = 1
  }

  handleChangeBackground = () => {
    this.refs['interest-item'].style.backgroundColor = '#FAFAFA'
  }

  render() {
    return (
      <div className='wrapper-interest-item' ref='interest-item'>
        <img src={soccerIcon} alt='icon' />
      </div>
    )
  }
}

export default InterestItem