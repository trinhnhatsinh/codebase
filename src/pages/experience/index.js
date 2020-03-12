import React from 'react'
import './index.less'

import Timeline from '@components/time-line'

class Experience extends React.PureComponent {
  state = {
    data: [1,2,3]
  }
  render() {
    const { onExperience } = this.props
    return (
      <div id='experience' className='wrapper-experience' style={{opacity: `${onExperience ? 1 : 0}`}}>
        <div className='box-title'>
          <p>Experience</p>
        </div>
        <div className='experience'>
        {
          this.state.data.map((item, index) => {
            return <Timeline key={index} index={index} onExperience={onExperience} /> 
          })
        }
        </div>
      </div>
    )
  }
}

export default Experience