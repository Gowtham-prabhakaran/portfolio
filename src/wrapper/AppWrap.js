import React from 'react';
import {NavigationDots, SocialMedia} from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className=''>
            <Component />

            {/* <div className='copyright'>
                <p>@2022 GOWTHAM PRABHAKARAN</p>
                <p>All rights reserved</p>
            </div> */}
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap