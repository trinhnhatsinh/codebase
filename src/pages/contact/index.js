import React from 'react'
import './index.less'

import faceIcon from '@misc/images/svg/facebook.svg'
import emailIcon from '@misc/images/svg/email.svg'
import phoneIcon from '@misc/images/svg/phone.svg'

class Contact extends React.PureComponent {
  render() {
    const { onContact } = this.props
    return(
      <div id='contact' className='wrapper-contact' style={{opacity: `${onContact ? 1 : 0}`}}>
        <div className='box-title'>
          <p>Contact</p>
        </div>
        <div className='contact'>
          <div className='contact-item'>
            <div className='wrapper-img'>
              <img src={faceIcon} alt='icon' />
            </div>
            <a href='https://www.facebook.com/profile.php?id=100009391918010'>Trinh Nhat Sinh</a>
          </div>
          <div className='contact-item'>
            <div className='wrapper-img'>
              <img src={emailIcon} alt='icon' />
            </div>
            <p>trinhnhatsinh123@gmail.com</p>
          </div>
          <div className='contact-item'>
            <div className='wrapper-img'>
              <img src={phoneIcon} alt='icon' />
            </div>
            <p>+84702426527</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact