import React from 'react'
import './index.less'

import LogoRotate from '@components/logo-rotate'

import avatar from '@misc/images/jpg/avatar.jpg'


class AboutMe extends React.PureComponent {

  render() {
    return (
      <div className='wrapper-about-me'>
        <div className='box-about-me'>
          <div className='title'>
            <p>About Me</p>
          </div>
          <div className='wrapper-info'>
            <div className='info-left'>
              <div className='basic-info-item'>
                <div className='header-basic-info-item'>
                  <p>Birthday:</p>
                </div>
                <p>05/11/1998</p>
              </div>
              <div className='basic-info-item'>
                <div className='header-basic-info-item'>
                  <p>Gender:</p>
                </div>
                <p>Male</p>
              </div>
              <div className='basic-info-item'>
                <div className='header-basic-info-item'>
                  <p>Address:</p>
                </div>
                <p>Hoài Sơn, Hoài Nhơn, Bình Định, Việt Nam</p>
              </div>
            </div>
            <div className='info-right'>
              <div className='avatar-name'>
                <div className='wrapper-name'>
                  <LogoRotate width={80} />
                  <p className='name'>Trịnh Nhất Sinh</p>
                  <p className='job'>( Web Developer )</p>
                </div>
                <div className='wrapper-avatar'>
                  <img src={avatar} alt='avatar' />
                </div>
              </div>
              <div className='wrapper-summary'>
                <p>Hello! I'm Brittany, a software engineer based in Boston, 
                  MA who enjoys building things that live on the internet. 
                  I develop exceptional websites and web apps that provide intuitive, 
                  pixel-perfect user interfaces with efficient and modern backends.</p>
                <p>Shortly after graduating from Northeastern University, 
                  I joined the engineering team at Upstatement where 
                  I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe