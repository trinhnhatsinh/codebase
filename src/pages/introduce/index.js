import React from 'react'
import './index.less'

import AboutMe from '@components/about-me'

class Introduce extends React.PureComponent {
  render() {
    return (
      <div id='introduce' className='wrapper-introduce'>
        <AboutMe />
      </div>
    )
  }
}

export default Introduce