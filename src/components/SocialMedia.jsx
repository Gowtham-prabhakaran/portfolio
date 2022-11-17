import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/gowtham-prabhakaran-9a2ab4246/'>
        <AiOutlineLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/Gowtham-prabhakaran'>
        <AiOutlineGithub />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/gowtham_0511/'>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
