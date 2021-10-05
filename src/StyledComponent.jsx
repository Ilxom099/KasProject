import styled from 'styled-components'


export const SideBar = styled.div`
  display: block;
  width: ${props => props.hide ? "250px" : "100px"};
  transition: all .5s cubic-bezier(0.6, -0.02, 0.29, 1.22);
  height: 100%;
  background-color: #ffffff;
  border-radius: 0 0 30px 0;
  
   
  @media only screen and (max-width: 900px) {
    display: none;
  }
  
`
export const Content= styled.div`
  width: calc(100%);
  height: calc(100vh - 50px);
  background-color: #f3f5f4;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
`

export const OvalContent = styled.div`
  width: calc(100% - 10%);
  background-color: #ffffff;
  margin: 3% auto;
  padding-top: 2rem;
  border-radius: 30px;
  box-shadow: 0 0 1px #bab6b6;

`


export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top:12vmax ;
    cursor: pointer;
    
    i{
    transition-duration: 0.4s;
      transform: rotate(${({toggle})=>toggle ? 0 : 180}deg);
    }
  @media only screen and (min-width: 600px) and (max-width:840px){
    margin-top: 23vh
  }
  @media only screen and (min-width: 768px) and (max-width: 992px){
    margin-top: 7vmax;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px){
    margin-top: 8vmax;
  }
  
`
export const TopNav = styled.div`
    width: 100%;
    padding: 0 !important;
  
`
export const LogoMenu = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 0;


 


  .logout {
    background-color: #c2dfea;
    border-radius: 5px;
    padding: 0.3rem 0.5rem;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 14px;
    font-weight: 600;
    color: #4a5a5a;
    cursor: pointer;

    

    &:hover {
      background-color: white;
      color: #2e7a92;
      transition-duration: 0.6s;
    }
  }

  .card {
    border: none !important;
    background-color: transparent !important;
  }

  @media only screen and (max-width: 900px) {
    .card {

    }
  }
`
export const NavLinks = styled.div`
  text-align: center;
  width: 50px;
 
  display: flex;
  
  i{
    font-size: 30px;
    color: #036281;
  }
 .cols{
   transform: translateX(-150px) translateY(40px);
   border: none !important;
 }
  

  @media only screen and (max-width: 600px) {


    i{
      font-size: 25px;
      color: #036281;
      margin-left: 10px;
    }
    .cols{
      transform: translateX(-0px) translateY(40px);
      border: none !important;
    }



  }

`
export const Num = styled.div`
  width: 50%;
  border-radius: 50%;
  color: #ec6666;
  font-size: 18px;
  font-weight: normal !important;
  
  
  @media only screen and (max-width: 900px) {
    font-size: 14px;
    position: absolute;
    
    padding: 1px 5px;
    border-radius: 50%;
    transform: translateX(22px);
  }
`
export const Nums = styled.div`
  width: 50%;
  border-radius: 50%;
  color: #ec6666;
  font-size: 18px;
  position: absolute;
  font-weight: normal !important;
  transform: translateY(-10px) translateX(-8px);


  @media only screen and (max-width: 900px) {
    font-size: 14px;
    position: absolute;
    background-color: #ffffff;
    padding: 1px 5px;
    border-radius: 50%;
     
  }
`

export const MobilNav = styled.span`
    width: calc(100%);
    position: fixed;
    height: 60px;
    display: none;
    bottom: -5px !important;
    justify-content: space-around;
    align-items: center;
    box-shadow:1px 0 1px grey; 
    background-color: #ffffff;
    @media only screen and (max-width: 900px){display: flex;}
`
export const LogoImg = styled.img`
  width: 80px;
  height: 40px;
  margin-left: 8px;
  @media only screen and (max-width: 900px) {
    width: 80px;
    height: 40px;
    margin-left: 5px;
    b
  }
`
export const ShopNumber = styled.span`
  position: relative;
  
`
export const PageInfo = styled.div`
  width: calc(100% - 50%);
  margin: 0 auto;
  color: #036281;
  transform: translateX(50px) translateY(10px);
  text-align: center;

  @media only screen and (max-width: 600px){
    width: 10%;
  }
  @media only screen and (max-width: 900px){
    
   p{
     display: none;
   }
    
  }
  
  
  p {
    font-size: 25px;
    font-weight: bold;
  }
`

export const Logouts = styled.div`
  background-color: #0b4248;
  @media only screen and (max-width: 600px){
     
  }
`