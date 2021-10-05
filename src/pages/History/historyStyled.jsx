import styled from 'styled-components'

export const HistoryBlock = styled.div`
  width: calc(100%);
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  flex-wrap: wrap;
  
`
export const CardHeder = styled.div`
  padding: 3px 6px;
  box-shadow: 0 0 3px #4e4c4c;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  width: calc(100% - 73%);
  border-radius: 10px;
  
  @media only screen and (max-width: 600px) {
    width: calc(100% - 10%);
    margin: 10px auto;
    &:hover{
      transform: scale(1);
      transition-duration: 0.5s;
    }
  }
  @media only screen and (min-width: 600px) and (max-width:840px){
    width: calc(100% - 55%);
  }
`
export const CardHistory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #d7e0ee;
  border: 1px solid #ecf3f3;
  border-radius: 5px;
  margin-bottom: 20px;

`
export const CardItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 10px;

  b {
    color: #727272;
  }
`
export const CardBoxx = styled.div`
   width: calc(100%);
   border: 1px solid blue;
   display: flex;
   justify-content: space-between;
   font-size: 15px;
`
export const CardImage = styled.div`
  width: calc(100%);
  color: #aeabab;
  font-size: 65px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
`
export const Bolder = styled.span`
  font-weight: 700;
  color: #2b3758;
   
`
export const Poisk = styled.span`
  font-weight: 700;
  color: #00437a;
  font-size: 20px;
  margin-right: 15px;
  font-family: 'Montserrat', sans-serif !important;

  @media only screen and (max-width: 600px) {
    
    display:block;
    margin: 0 auto;
  }

`

export const Div = styled.div`
width: 100%;
  margin-left: 33px;
  @media only screen and (max-width: 600px){
    .Date{
      width: 80%;
      margin: 15px auto;
    }
  }
  @media only screen and (min-width: 600px) and (max-width:840px){
    .Date{
      width: 45%;
    }


    @media only screen and (min-width: 768px) and (max-width: 992px){
      .Date{
       width:  50%;
      }
  
     }

`

export const Pokupka = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 17px;
  margin-top:30px;
  margin-bottom: 10px;

  .PokupLeng {
    color: #345262;
    font-weight: 700;
    font-size: 18px;
  }

  .total {
    font-weight: 700;
    color: #49c45a;
    letter-spacing: 1px;
  }

  .summa {
    font-weight: 600;
    font-size: 17px;
    color: #224060;
  }
`