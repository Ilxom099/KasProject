import styled from 'styled-components'

export const Fluid = styled.div`
 
`

export const Center = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 5px;
  border: 1px solid #d6d3d3;
  background-color: #ffffff;
  margin: 50px auto;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 100px auto;
    width: 300px;
    height: 400px;
  }

  .errors {
    color: #e75f5f;
    font-size: 18px;
  }

  .but {
    border: none;
    color: white;
    letter-spacing: 1px;
    background-color: #aeafd9;
    padding: .5rem 2.3rem;
    margin-top: 10%;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: white;
      color: #7678ac;
      border: 1px solid #89aeb5;
      transition-duration: 0.6s;
    }
  }

  .form-group {
    margin: 20px auto;
    width: 80%;
    text-align: left;

    input {
      width: 100%;
      padding: .4rem;
      border-radius: 5px;
      display: block;
      margin: 0 auto;
      border: 1px solid #d4d0d0;
      outline: none;

      &:hover {
        box-shadow: 0 0 1px cornflowerblue;
      }
    }

    label {
      margin-bottom: 5px;
      color: #0b454c;
      font-size: 22px;
      font-family: 'Montserrat', sans-serif !important;
      font-weight: bold;
    }


  }

`
