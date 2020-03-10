import React, {Component} from 'react';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writter from './components/Writter'
import {
  HomeWrapper,HomeRight,HomeLeft
} from './styled.js'

class Home extends Component{
  render(){
    return(
    <HomeWrapper>
      <HomeLeft>
      <img className='banner_img' src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
      </HomeLeft>
    <HomeRight></HomeRight>
    home</HomeWrapper>
  )
  }
}

export default Home;
