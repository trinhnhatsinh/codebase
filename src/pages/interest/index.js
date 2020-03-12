import React from 'react'
import './index.less'

import InterestItem from '@components/interest-item'

class Interest extends React.PureComponent {
  state = {
    data: [1, 2, 3, 4 ,5, 6]
  }
  render() {
    const { onInterest } = this.props
    return (
      <div id='interest' className='wrapper-interest' style={{opacity: `${onInterest ? 1 : 0}`}}>
        <div className='box-title'>
          <p>Interests</p>
        </div>
        <div className='interests'>
          {
            this.state.data.map((item, index) => {
              return <InterestItem key={index} index={index} onInterest={onInterest} /> 
            })
          }
        </div>
      </div>
    )
  }
}

export default Interest