import React,{Component} from 'react';
import {
  HeaderWrapper,Logo,Nav,NavItem,Pic,Navsearch,Addition, Button
} from './style'
import Piclogo from './logo.png'

class Header extends Component{
  render(){
    return (
      <HeaderWrapper>
       <Logo href='/'><Pic src={Piclogo} /></Logo>
       <Nav>
         <NavItem className='left active'>Homepage</NavItem>
         <NavItem className='left'>App download</NavItem>
         <NavItem className='right login'>login</NavItem>
         <NavItem className='right'>Aa</NavItem>
         <Navsearch />
       </Nav>
       <Addition>
          <Button className='writting'>writing</Button>
          <Button className='reg'>rigister</Button>
       </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;
