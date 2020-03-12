import React from 'react'
import './index.less'

class TimeLine extends React.PureComponent {

  componentDidUpdate() {
    const { index, onExperience } = this.props
    if(this.refs['job'] && onExperience) {
      setTimeout(this.handleDisplayJob, (index * 1.4 + 0.6) * 1000)
    }

    if(this.refs['name'] && onExperience) {
      setTimeout(this.handleDisplayName, (index * 1.4 + 1) * 1000)
    }

    if(this.refs['summary'] && onExperience) {
      setTimeout(this.handleDisplaySummary, (index * 1.4 + 1.4) * 1000)
    }

    if(this.refs['timeline'] && onExperience) {
      setTimeout(this.handleTimeLine, (index * 1.4) * 1000)
    }
  }

  handleDisplayJob = () => {
    this.refs['job'].style.marginLeft = '0px';
    this.refs['job'].style.opacity = 1;
  }

  handleDisplayName = () => {
    this.refs['name'].style.marginLeft = '0px';
    this.refs['name'].style.opacity = 1;
  }

  handleDisplaySummary = () => {
    this.refs['summary'].style.marginLeft = '0px';
    this.refs['summary'].style.opacity = 1;
  }

  handleTimeLine = () => {
    this.refs['timeline'].style.opacity = 1;
  }

  render() {
    return(
      <div className='wrapper-timeline' ref='timeline'>
        <div className='circle'>
        </div>
        <p className='time'>2016 - 2020</p>
        <div className='content'>
          <p className='job' ref='job'>Web Developer</p>
          <p className='name' ref='name'>Acexis Company</p>
          <p className='summary' ref='summary'>A resume summary statement is a short paragraph at 
          the beginning of a resume that highlights a job seeker’s professional skills and experience. 
          It gives hiring managers a glimpse into the job seeker’s expertise before diving into their resume.</p>
        </div>
      </div>
    )
  }
}

export default TimeLine