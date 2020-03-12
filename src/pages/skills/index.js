import React from 'react'
import './index.less'

import SkillProgress from '@components/skill-progress'

class Skill extends React.PureComponent {
  state = {
    data: [
      1,2,3,4,5
    ]
  }

  render() {
    const { onSkill } = this.props
    return (
      <div id='skill' className='wrapper-skill' style={{opacity: `${onSkill ? 1 : 0}`}}>
        <div className='box-title'>
          <p>Skills</p>
        </div>
        <div className='progress'>
          {
            this.state.data.map((item, index )=> {
              return <SkillProgress index={index} key={index} onSkill={onSkill} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Skill