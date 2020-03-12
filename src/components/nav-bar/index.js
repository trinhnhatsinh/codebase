import React from 'react'

class NavBar extends React.PureComponent {
  handleSelectNavItem = (e) => {
    this.refs['box-active'].style.top = e.currentTarget.offsetTop + 'px'
    this.refs['circle'].style.top = e.currentTarget.offsetTop + 16 + 'px'

    const elementTarget = document.getElementById(e.currentTarget.dataset.element)
    this.props.handleScrolling(true, elementTarget.offsetTop, function() {
      elementTarget.scrollIntoView({behavior: "smooth"})
    })
  }

  render() {
    return (
      <div className='nav-bar'>
        <ul>
          <div id='nav-active' className='box-active' ref='box-active'></div>
          <li className='nav-item' data-element='introduce' onClick={this.handleSelectNavItem}>About Me</li>
          <li className='nav-item' data-element='experience' onClick={this.handleSelectNavItem}>Experience</li>
          <li className='nav-item' data-element='skill' onClick={this.handleSelectNavItem}>Skills</li>
          <li className='nav-item' data-element='interest' onClick={this.handleSelectNavItem}>Interest</li>
          <li className='nav-item' data-element='contact' onClick={this.handleSelectNavItem}>Contact</li>
        </ul>
        <div className='line-menu'>
          <div id='circle' className='circle' ref='circle'>
            <div className='sub-circle'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar