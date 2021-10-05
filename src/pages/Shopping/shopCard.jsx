import styled from 'styled-components'

export const ShopNav = styled.div`
   width: calc(100% - 10%);
   margin: 30px auto;
   display: flex;
   justify-content: flex-end;
   
  @media only screen and (max-width: 900px){
    display: block;
   
    .shopbtn{
      margin-top: 3%;
       text-align: right;
      justify-content: right;
      
    }
  }
`
export const ClearProducts = styled.div`
  padding: 5px 15px;
  margin: 0 15px;
  border-radius: 5px;
  transition: .3s;
  background-color: #facece;
  box-shadow: 0 0 2px #f3ecec;
  color: #cf4d4d;
  font-weight: 500;
  cursor: pointer;

  &:hover {

    background: #fae9e9;
    color: #f35f5f;

    transition-duration: 0.6s;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 5px 7px;
    margin: 5px 5px;
    width: 50%;
    text-align: center;
  }
`
export const HeadSales = styled.thead`
  background-color: #ebf3f6;
  color:#0C4F83;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif !important;
`
export const SelsProduct = styled.div`
  padding: 5px 15px;
  margin: 0 15px;
  border-radius: 5px;
  transition: .3s;
  background-color: #c9e8f6;

  color: #108da9;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #e6ecef;
    color: #51a2ca;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 5px 7px;
    margin: 5px 5px;
    width: 50%;

    text-align: center;
  }
`
export const Price = styled.div`
  padding: 5px 15px;
  margin: 0 15px;
  border-radius: 5px;
  transition: .3s;
  box-shadow: 0 0 1px #a9a0a0;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 5px 7px;
    margin: 0 5px;
    text-align: right;
    
    
  }
`
export const ItemPrice = styled.input`
   width: 70px;
   border: 1px solid #c1d6cc;
   text-align: center;
   padding-left: 10px;
   outline: none;
   border-radius: 8px;

  @media only screen and (max-width: 600px){
    width: 50px !important;
    height: 30px;
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`
export const CheksProduct = styled.div`
  background-color: #ffffff;
  width: calc(100%);
  height: 230px;
  margin: 0 auto;
  
  text-align: center;
`
export const NextPage = styled.button`
  margin-top: 20px;
  font-size: 18px;
  width: 120px;
  border: none;
  background: #7a7fae;
  color: white;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;

  &:hover {
    background: #7acf83;
    transition-duration: 0.6s;
  }

`
export const Page = styled.div`
  margin-top: 5px;
  font-size: 28px;
  color: #000000;

`

export const CheckModal = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  width: 100px;
   
  font-size: 65px;
  color: #5df17c;
`