import styled from 'styled-components';


export const HeaderWrapper=styled.div`
  position:relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  `

export const Logo = styled.a`
  display: inline-block;
  height:58px;
  width:100px;
  top:0;
  left:0;
`
export const Pic = styled.img`
  display: inline-block;
  height:58px;
  width:100px;
  top:0;
  left:0;
`
export const Nav = styled.div`
   display:inline-block;
   margin-left: 40px;
   height: 100%;
   vertical-align: top;
`

export const NavItem = styled.div`
   line-height: 56px;
   padding: 0 15px;
   font-size : 17px;
   color: #333;
   &.left{
     float: left;
   }
   &.right{
     float: right;
     color: #969696;
   }
   &.active{
     color: #ea6f5a;
   }
`

export const SearchWrapper= styled.div`
  position:relative;
  float:left;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background: green;
      color: #fff;
    }
  `

export const Navsearch = styled.input.attrs({placeholder:'search'})`
   margin-top : 9px;
   margin-left: 20px;
   width: 160px;
   height: 38px;
   padding: 0 40px 0 20px;
   border: none;
   outline: none;
   border-radius: 19px;
   background:#eee;
   font-size: 14px;
   color:#666;
   &::placeholder{
     color: #999;
   }
   &.focused{
     width: 240px;
     }
   &.slide-enter{
       transition : all .2s ease-out;
     }
    &.slide-enter-active{
       width:240px;
     }
    &.slide-exit{
       transition : all .2s ease-out;
     }
    &.slide-exit-active{
       width:160px;
     }
`

export const Addition = styled.div`
   vertical-align: top;
   display: inline-block;
   float:right;
   top:0;
   height: 56px;

`

export const Button = styled.div`
   float:right;
   margin-top:9px;
   line-height:38px;
   border-radius:19px;
   border: 1px solid #ec6149;
   margin-right:20px;
   padding: 0 20px;
   &.reg{
     color:#ec6149;
   }
   &.writting{
     color:#fff;
     background: #ec6149;
   }
`
