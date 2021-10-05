import styled from 'styled-components'


export const NavPanel = styled.div`
   width: calc(100% - 10%);
   margin: 20px auto;
   display: flex;
  justify-content: space-between;

  .ant-select-selector{
    height: 42px !important;
    padding-top: 5px !important;
    padding-left: 20px !important;
  }
  @media only screen and (max-width: 600px){
     
    .ant-select-selector{
      padding: 5px !important;
       
    }
  }
  
`

export const SelectSale = styled.select`
  width: calc(100% - 60%);
  height: 30px;
  padding-left: 10px;
  outline: none;
  font-family: sans-serif;
  border-radius: 8px;
  border: none;
  background: rgb(245, 248, 248);
  box-shadow: 0 0 3px rgb(137, 198, 189);
  transition: .3s;
  color: grey;
  cursor: pointer;
  option{
    color: grey;
    background-color: #b6d4fe;
    
  }
  
  
  &:hover {
    background-color: #f6fbfc
  }

  @media only screen and (max-width: 600px) {
    width: 100px;
    font-size: 12px;
  }
`

export const InputSale = styled.input`
  width: calc(100% - 70%);
  border-radius: 9px;
  outline: none;
  background: rgb(255, 255, 255);
  border: 1px solid #d5d9d9;
  transition: .3s;
  cursor: pointer;
  padding-right: 1.6rem;
  padding-top: 5px !important;
  padding-left: 20px !important;

  &::placeholder {
    padding-right:  0.7rem;
   
    font-size: 14px;
    color:darkgrey;
  }
  &:focus {
    border: 1px solid #2ddbec;
    box-shadow: 0 0 2px #56d8e5;
  }
  &:hover {
    border: 1px solid #2ddbec;
  }

  @media only screen and (max-width: 600px) {
    width: 140% !important;
    padding-right: 30px;
   padding-left: 8px !important;
   
  }
`
export const TableHeader = styled.thead`
  background-color: #ebf3f6;
  color: #0c4f6e;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: 'Montserrat', sans-serif !important;
`

export const Cheks = styled.div`
  width: 35px;
  height: 35px;
  color: #81ee8e;
  box-shadow: 0 0 2px rgb(25, 169, 82);
  background-color: #fdfdfd;
  transition: .5s;
  padding: 7px 2px 0 5px;
  margin: 3px auto;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #68c0c8;
    box-shadow: 0 0 2px rgb(96, 150, 150);
    transition: .5s;
  }

  i {
    font-size: 16px;
     
  }

  @media only screen and (max-width: 600px) {
    padding-top: 15%;
    font-size: 12px
   
  }

`
export const PlusShop = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: #ffdcf1;
  color: #a855db;
  transition: .5s;
  box-shadow: 0 0 3px #d3fac7;
  margin: 3px auto;
  text-align: center;
  border-radius: 5px;

  &:hover {
    color: #a855db;
    background-color: #ffffff;
    box-shadow: 0 0 3px #ffdcf1;
    transition-duration: 0.4s;
    transform: scale(1.1);
  }

  i {
    font-size: 16px;

  }


  @media only screen and (max-width: 600px) {
    
    font-size: 12px
  }
`


export const Div = styled.div`
width: 430px;    
    
`
