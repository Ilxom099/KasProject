import styled from 'styled-components'

export const Block = styled.div`
    width: calc(100%);
  
  .story{
    transform: translateY(-20px);
  }
`
export const Pronum = styled.p`
  width: calc(100% - 10%);
  margin: 5px auto;
  color: #036281;
  font-family: 'Montserrat', sans-serif !important;
  letter-spacing: 1px;
  font-size: 25px;
  font-weight: 600;
  
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`
export const SelectCaregory = styled.div`
    width: calc(100% );
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

   .selectForm{
     width: 100%;
   }
  .selectForm .ant-select-selector {
    width: 100% !important;
  }
  .ant-select-selector{
    height: 51px !important;
    padding-top: 10px !important;
    padding-left: 10px !important;
  }

  @media only screen and (max-width: 600px){

    .ant-select-selector{
      
      height: 40px !important;
      padding-top: 5px !important;
      padding-left: 10px !important;
      border-radius: 10px!important;
    }
  }
  
 
   
`

export const SelectCaregoryHomeS = styled.div`
  width: calc(100% - 10% );
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  .ant-select-selector{
    height: 42px !important;
    padding-top: 5px !important;
    padding-left: 20px !important;
  }
  
  
  .selects {
    width: 30% !important;
  }
  &:hover{
    background-color: white !important;
  }
`



export const Select = styled.select`
  width: calc(100% - 60%);
  height: 30px;
  padding-left: 10px;
  outline: none;
  font-family: 'Nunito', sans-serif;
  border-radius: 8px;
  border: none;
  color: grey;
  background: rgb(245, 248, 248);
  box-shadow: 0 0 3px rgb(137, 198, 189);
  transition: .3s;
  cursor: pointer;

  
  

  @media only screen and (max-width: 600px) {
    width: 100px;
    font-size: 12px;
  }
`
export const SearchInput = styled.input`
  width: calc(100% - 70%);
  height: 32px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif !important;
  outline: none;
  font-size: 14px;
  border-radius: 8px;
  background: rgb(255, 255, 255);
  border: 1px solid #d5d9d9;
  transition: .3s;
  cursor: pointer;


  &:hover {
    border: 1px solid #2ddbec;
  }

  &:focus {
    border: 1px solid #2ddbec;
    box-shadow: 0 0 2px #56d8e5;
  }

  &::placeholder {
    color: darkgrey;
    letter-spacing: 1px;
    
  }

  @media only screen and (max-width: 600px) {
    width: 100px;
    font-size: 12px;
    height: 30px;
  }

`
export const ImgProduct = styled.img`
  margin: 5px 0; 
   width: 60px;
  height: 60px;
   border-radius: 8px;
   @media only screen and (max-width: 600px) { width: 50px;}
`
export const Tables = styled.div`
  width: calc(100% - 10%);
  text-align: center;
  padding-bottom: 2rem;
  margin:   30px auto;
  border-radius: 10px;
  box-shadow: 0 0 3px rgb(217, 209, 236);
  overflow-x: auto;
  
  @media only screen and (max-width: 600px) {
    width: calc(100% - 10px);
    border-radius: 2px;
    box-shadow: none
  }
`
export const ProductTable = styled.table`
   width: calc(100%);
`
export const Head = styled.thead`
  background-color: #ebf3f6;
  color: #0c4f6e;

  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold;
  letter-spacing: 0.5px;

`
export const Th = styled.td`
  font-size: 17px;
  padding: 8px;
 
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    padding: 4px
  }
`
export const Td = styled.td`
  border-bottom: 1px solid #f5f5f5;
  
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    
  }
`
export const TdPrice = styled.td`
  color: #000000;
  font-weight: 600;
  border-bottom: 1px solid #f5f5f5;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`
export const BodyTable = styled.tbody`
   background-color: white;
`
export const TdInfo = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 30px;
  display: flex;
  padding-left: 1rem;
  align-items: center;
  text-align: center;
  background-color: #f6f6fa;
  border-radius: 5px;
  cursor: pointer;
`
export const ProductName = styled.div`
   font-size:16px;
   @media only screen and (max-width: 600px) { font-size: 16px; }
`
export const AllButton = styled.div`
   @media only screen and (max-width: 600px) {
   display: flex;
   justify-content: center;
   align-items: center;
   }
`
export const Edit = styled.button`
  border: none;
  background-color: rgb(202, 236, 222);
  color: rgb(56, 162, 126);
  padding: 0px 10px;
  border-radius: 5px;
  transition: .2s;
  margin-left: 20px;
  width: 35px;
  height: 35px;
  transform: translateY(2px);

  &:hover {
    transform: scale(1.1);
    background-color: #ffffff;
    color: #237e23;
    box-shadow: 0 0 3px #98ff98;
    transition-duration: 0.4s;
  }

  @media only screen and (max-width: 600px) {
    span {
      display: none
    }
  }
`
export const DelectButton = styled.button`
  border: none;
  background-color: #fccbcb;
  color: #fc4b4b;
  border-radius: 5px;
  box-shadow: 0 0 3px rgb(212, 196, 222);
  margin-left: 15px;
  transition: .2s;
  width: 35px;
  height: 35px;
  text-align: center;

  &:hover {
    transform: scale(1.1);
    color: #fc4b4b;
    background-color: #ffffff;
    box-shadow: 0 0 3px #fc4b4b;
    transition-duration: 0.4s;
  }

  @media only screen and (max-width: 600px) {
    span {
      display: none
    }

    padding: 2px 5px;
    margin-top: 3px;
  }
`
export const DelMod = styled.div`
  width: calc(500px);
  height: 250px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;

  @media only screen and (max-width: 600px){
    width: 80%;
  }
  
`
export const Div = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #163567;
  transform: translateY(60px);

  @media only screen and (max-width: 600px){
    font-size: 17px;
     width: 95%;
    padding-left: 15px;
    padding-right: 10px;
  }
`

export const DivOne = styled.div`
  width: 50px;
  transform: translateY(20px);
  margin: 0 auto;

  i {
    font-size: 50px;
    color: #f84b4b;
  }
`

export const BtnDel = styled.div`
  text-align: center;

   
`
export const Yes = styled.button`
  width: 120px;
  margin-top: 100px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  background-color: #f1dcdc;
  color: #f84b4b;
  text-align: center;
  transition: 0.3s;
  border: none;

  &:hover {
    background-color: #e4f1ef;
    border: 1px solid #0d76a7;
  }
`
export const No = styled.button`
  
  margin-right: 10px;
  margin-top: 10px;
  color: #d43f43;
  background-color: white;
  font-size: 18px;
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  transition: 0.3s;
  border: none;

  
`
export const DivPag = styled.div`
  width: 30%;
  
  margin-left: 70%;

  @media only screen and (max-width: 600px){
    text-align: center;
    transform: translateX(-40px);
    .page-texts{
      display: flex;
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 500px) and (max-width: 768px){
    width: 100%;
    margin-left: 50%;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px){
    width: 50%;
    margin-left: 60%;
  }
`

export const Pagination = styled.div`
  width: 95%;
  margin-top: 10px;

  li {
    cursor: pointer;
    border-radius: 7px !important;
    font-weight: 600 !important;
    color: #00616e;
    padding: 5px 20px !important;
  }

  @media only screen and (max-width: 600px){
    width: 100%;
    
    nav{
       width: 90%;
      
      ul{
        
        font-size: 12px !important;
         
        li{
          padding:0.3rem 0.5rem !important;
        }
      }
    }
    
  }
  
  
`

export const Pag = styled.div`
  height: 50px;
  @media only screen and (max-width: 600px){
    margin-bottom: 80px;
  }
  @media only screen and (min-width: 500px) and (max-width: 768px){
    margin-bottom: 80px;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px){
    margin-bottom: 80px;
  }
`


export const ImgShopping = styled.div`
 width: 100%;
  .Imgshop{
    width: 90%;
  }
  @media only screen and (max-width: 600px){
    .Imgshop{
      width: 90%;
    }
  }
`

export const Sale = styled.div`
   text-align: center;
  font-size: 20px;
  color: #036281;
  font-weight: 600;
  letter-spacing: 1px;

  @media only screen and (min-width: 900px) and (max-width: 2000px){
    display: none;
  }
  
`