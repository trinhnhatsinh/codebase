import React from 'react'
import './index.less'

class SkillProgress extends React.PureComponent {
  state = {
    id: null
  }

  componentDidUpdate () {
    const { index, onSkill } = this.props
    if(this.refs['data-progress'] && onSkill) {
      setTimeout(this.handleData, (index * 1.2 + 0.6) * 1000)
    }

    if(this.refs['wrapper-progress'] && onSkill) {
      setTimeout(this.handleShow, index * 1.2 * 1000)
    }
  }


  handleData = () => {
    this.refs['data-progress'].style.strokeDashoffset = 440 - (440*50) / 100;
    const set = setInterval(this.handleCount, 0.6 / 50 * 1000)
    this.setState({id: set})
  }

  handleShow = () => {
    this.refs['wrapper-progress'].style.animation = 'opacity-progress 0.6s linear forwards';
  }

  handleCount = () => {
    const count = + this.refs['count'].innerHTML
    if(count === 50) {
      clearInterval(this.state.id)
    } else {
      this.refs['count'].innerHTML = count +1
    }
  }

  render() {
    const { index } = this.props
    return (
      <div className='wrapper-progress' ref='wrapper-progress'>
        <div className='persent'>
          <svg>
            <circle cx='60' cy='60' r='60'></circle>
            <circle cx='60' cy='60' r='60' ref='data-progress'></circle>
          </svg>
          <div className='number'>
            <p><span ref='count'>0</span><span>%</span></p>
          </div>
          <p className='text'>Progress</p>
        </div>
      </div>
    )
  }
}

export default SkillProgress