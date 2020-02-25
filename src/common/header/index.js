import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {
  HeaderWrapper,Logo,Nav,NavItem,Pic,SearchWrapper,Navsearch,Addition, Button
} from './style';
import Piclogo from './logo.png';
import {connect} from 'react-redux';
import {actionCreators} from './header_store'

const Header = (props)=>{
  return(
      <HeaderWrapper>
       <Logo href='/'><Pic src={Piclogo} /></Logo>
       <Nav>
         <NavItem className='left active'>Homepage</NavItem>
         <NavItem className='left'>App download</NavItem>
         <NavItem className='right login'>login</NavItem>
         <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
         <SearchWrapper>
           <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
           >
           <Navsearch
             onFocus={props.handelInputFocus}
             onBlur={props.handelInputBlur}
             className={props.focused ? 'focused' : ""}>
           </Navsearch>
            </CSSTransition>
         <i className={props.focused ? 'focused iconfont' : "iconfont"}>&#xe63c;</i>
         </SearchWrapper>
       </Nav>
       <Addition>
          <Button className='writting'><i className='iconfont'>&#xe63d;</i> writing</Button>
          <Button className='reg'>register</Button>
       </Addition>
      </HeaderWrapper>
)
}

const mapStateToProps=(state)=>{
  return{
  focused : state.header.get('focused')
 }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handelInputFocus(){
      const action=actionCreators.input_focus();
      dispatch(action);
    },
    handelInputBlur(){
      const action=actionCreators.input_blur();
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);
