import React from 'react'
import './index.less'

import Intro from '@components/intro'
import Menu from './menu'
import Introduce from './introduce'
import Skill from './skills'
import Interest from './interest'
import Experience from './experience'
import Contact from './contact'

class Wrapper extends React.PureComponent {
  state = {
    onSkill: false,
    onExperience: false,
    onInterest: false,
    onContact: false,
    loading: true,
    isScrolling: false,
    scrollY: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(this.handleShowDesign, 0.6*1000)
  }

  handleShowDesign = () => {
    this.setState({loading: false})
  }

  handleScrolling = (arg1, arg2, callback) => {
    this.setState({isScrolling: arg1, scrollY: arg2}, callback())
  }

  handleScroll = (e) => {
    const elementIntroduce = document.getElementById('introduce')
    const elementSkill = document.getElementById('skill')
    const elementExperience = document.getElementById('experience')
    const elementInterest = document.getElementById('interest')
    const elementContact = document.getElementById('contact')

    const elementNavActive = document.getElementById('nav-active')
    const elementCircle = document.getElementById('circle')
    if(window.scrollY === this.state.scrollY) {
      this.setState({isScrolling: false, scrollY: 0})
    }

    if(window.innerHeight + window.scrollY >= elementSkill.offsetTop + 400) {
      this.setState({onSkill: true})
    }

    if(window.innerHeight + window.scrollY >= elementExperience.offsetTop + 400) {
      this.setState({onExperience: true})
    }

    if(window.innerHeight + window.scrollY >= elementInterest.offsetTop + 400) {
      this.setState({onInterest: true})
    }

    if(window.innerHeight + window.scrollY >= elementInterest.offsetTop + 50) {
      this.setState({onContact: true})
    }

    if(!this.state.isScrolling) {
      if(window.innerHeight + window.scrollY >= elementIntroduce.offsetTop + 50) {
        const element = document.querySelector('[data-element~="introduce"]')
        elementNavActive.style.top = element.offsetTop + 'px'
        elementCircle.style.top = element.offsetTop + 16 + 'px'
        e.stopPropagation();
      }
  
      if(window.innerHeight + window.scrollY >= elementExperience.offsetTop + 50) {
        const element = document.querySelector('[data-element~="experience"]')
        elementNavActive.style.top = element.offsetTop + 'px'
        elementCircle.style.top = element.offsetTop + 16 + 'px'
        e.stopPropagation();
      }
  
      if(window.innerHeight + window.scrollY >= elementSkill.offsetTop + 50) {
        const element = document.querySelector('[data-element~="skill"]')
        elementNavActive.style.top = element.offsetTop + 'px'
        elementCircle.style.top = element.offsetTop + 16 + 'px'
        e.stopPropagation();
      }
  
      if(window.innerHeight + window.scrollY >= elementInterest.offsetTop + 50) {
        const element = document.querySelector('[data-element~="interest"]')
        elementNavActive.style.top = element.offsetTop + 'px'
        elementCircle.style.top = element.offsetTop + 16 + 'px'
        e.stopPropagation();
      }
  
      if(window.innerHeight + window.scrollY >= elementContact.offsetTop + 50) {
        const element = document.querySelector('[data-element~="contact"]')
        elementNavActive.style.top = element.offsetTop + 'px'
        elementCircle.style.top = element.offsetTop + 16 + 'px'
        e.stopPropagation();
      }
    }

  }

  render(){
    return (
      <div className='container'>
        {
          this.state.loading ? (
            <Intro />
          ) : (
            <>
              <Menu handleScrolling={this.handleScrolling} />
              <div className='section-right'>
                <Introduce />
                <Experience onExperience={this.state.onExperience} />
                <Skill onSkill={this.state.onSkill} />
                <Interest onInterest={this.state.onInterest} />
                <Contact onContact={this.state.onContact} />
              </div>
            </>
          )
        }
      </div>
    )
  }
}

export default Wrapper