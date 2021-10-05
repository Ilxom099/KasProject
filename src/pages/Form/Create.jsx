import styled from 'styled-components'

export const BlockCreate = styled.div`
  width: calc(105%);
  background-color: #F3F5F4;
  margin-top: -85px;
  margin-left: -2.5%;
  border-radius: 30px;


  @media only screen and (max-width: 600px) {
    border-bottom: 120px;
  }
`

export const Forms = styled.div`
  width: 100%;
  padding: 3rem ;
  border-radius: 15px;
  background-color:white ;
  margin: 0 auto;

  

`

export const HederText = styled.div`
  width: calc(100% - 50%);
  margin: 20px auto; 
  text-align: center;
  font-size: 30px;
  color: #495088;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 600;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 20px;
  }
  @media only screen and (min-width: 600px) and (max-width:840px){
    width: 100%;
    font-size: 24px;
  }
`
export const InputForms = styled.div`
   width: calc(100% - 40%);
   margin: 50px auto;
   
  @media only screen and (max-width: 600px){
    width: 98%;
   margin-bottom: 30px !important;
  }
  @media only screen and (min-width: 600px) and (max-width:840px){
    width: 90%;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px){
    width: 90%;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px){
    width: 80%;
  }
`
export const Inputs = styled.div`
 width: calc(100%);
  
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px){
    display: block;
    .InputAmount{
      width: 100%;
      margin-bottom: 15px;
    }
    .creatInput{
      width: 100%;
      margin-top: 20px;
    }
    
  }
`

export const LabelAv = styled.label`
  font-size: 18px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 600;
  color: #5d7388;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    letter-spacing: 1px;
     
  }
`
export const ImgLabel = styled.label`
  width: 100%;
  height: 250px;
  font-family: 'Montserrat', sans-serif !important;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  .imgIcon {
    margin-top: 30px;
    color: #5d7388;
  }

  @media only screen and (max-width: 600px) {
    .imgForma{
      width: 30px;
    }
    font-size: 12px;
  }
`
export const Img = styled.img`
  width: 250px;
  height: 250px;
  transform: translateY(-15px);

  @media only screen and (max-width: 600px){
    width: 110px;
    height: 100px;
    transform: translateY(-25px);
  }
  
`
export const SubmitButton = styled.div`
  width: calc(98%);
  text-align: right;

  button {
    width: 40%;
    height: 45px;
    border: none;
    outline: none;
    background-color: #6cecbc;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif !important;
    margin-top: 20px;
    color: #475c70;
    padding: 3px 0;
    border-radius: 5px;
    margin-bottom: 40px;

    &:hover {
      background: #f7f7fa;
      color: #1b3964;
      border: 1px solid #76e3da;
      transition-duration: 0.7s;
    }
  }

  @media only screen and (max-width: 600px) {
    text-align: center;

  }


`


export const ExitButton = styled.button`
background: transparent;
  border: none;
  position: relative;

`

export const InputName = styled.div`
 
  background-color: white;
  padding: 0.8rem;
  border-radius: 10px;
  
`

export const InputPrice = styled.div`
  
  background-color: white;
  
  padding: 0.8rem;
  border-radius: 8px;
  margin-top: 15px;
`

export const InputAmount = styled.div`
  width: calc(100% - 50% );
  background-color: white;
 
  
  padding: 0.8rem;
  border-radius: 8px;

  @media only screen and (max-width: 600px){
    width: 100%;
  }
  
`

export const InputAbout = styled.div`
  width: calc(100% - 50% );
  background-color: white;
  padding: 0.8rem;
  border-radius: 8px;

  @media only screen and (max-width: 600px){
    width: calc(100%);
    background-color: white;
    padding: 0.8rem;
    border-radius: 8px;
  }
`

export const InputCateg = styled.div`
  width: calc(97% );
  background-color: white;
  
  
  border-radius: 8px;
  margin: 15px auto;

  @media only screen and (max-width: 600px){
    width: 93%;
    margin: 10px auto;
  }
`



export const InputAdd = styled.div`
  width: 97%;
  
  background-color: white;
  border: 1px solid #d7d4d4;
  padding: 0.8rem;
  border-radius: 8px;
 margin: 25px auto;
 

  @media only screen and (max-width: 600px){
    width: 93%;
    height: 140px;
    .imgIcon{
      transform: translateY(-40px);
    }
    .addPhoto{
      font-size: 13px;
      transform: translateY(30px);
    }
  }
`
export const Upload = styled.img`
    width: 200px;
    height: 200px;
  @media only screen and (max-width: 600px){
    width: 80px;
    height: 80px;
  }
`
export const DivForms = styled.div`
 display: flex;
`

export const FormsName = styled.div`
  text-align: center;
  font-size: 20px;
  color: #036281;
  font-weight: 600;
  letter-spacing: 1px;
  transform: translateY(-20px);

  @media only screen and (min-width: 900px) and (max-width: 2000px){
    display: none;
  }
`