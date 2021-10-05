import React, { useState} from 'react';
import { connect } from 'react-redux';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useHistory} from 'react-router-dom'
import SellModal from './SellModal'
import {getShop, ClearProduct, Dell, PlusDell,SetPrice} from "../../store/product_reducer";
import {ShopNav,SelsProduct,ClearProducts,Price,ItemPrice,HeadSales} from './shopCard'
import {
  Block,
  ProductTable,
  ProductName,
  Tables,
  Th,
  Td,
  BodyTable,
  TdInfo,
  ImgProduct,
  TdPrice,
  Pag,
  ImgShopping,
  Sale,
} from '../Home/product'
import Popup from "reactjs-popup";
import ShopImage from '../Images/pngaaa.com-293115.png'
import {toast} from "react-toastify";


function Shopping({card,PlusDell,Dell,getShop,ClearProduct,count,load,SetPrice,pric}){

  const [downland,setdownland] = useState(load);
  const [sellVisable,setSellVisable] = useState(false);
  const [counts,setCounts] = useState(count);
  const [alert,setAlert] = useState(false)

  const [img,setImg] = useState(null)


  function Toggle() {
    setSellVisable(prev => !prev)
  }

  // <span className={ `${downland === true ? 'spinner-border spinner-border-sm mx-1' :''}` }> </span>
  function Sell() {
    if (card.length === 0){
      toast.error('Корзина пусто')
    }else {
      Toggle(true)
      getShop(card);
      setdownland(true);
      setCounts(0)
    }
  }
  function Clear() {
    ClearProduct();
    setCounts(0)
  }
  function Minus(item) {
    Dell(item)
  }
  function ChangePrice(e,item) {
    SetPrice({...item,val:e.target.value});
  }
  const p = card.reduce((total,dev)=>{
    total += dev.price * dev.amount;
    return total
  },0);
  return(
      <Block>
        <Sale>
           Корзина
        </Sale>
        <ShopNav>
          <Price>{ new Intl.NumberFormat(['de-DE']).format(p)  + ' '}UZS</Price>
         <div className={'d-flex shopbtn'}>
           <SelsProduct onClick={Sell}>  Продавать </SelsProduct>
           <ClearProducts onClick={Clear}> Очистить </ClearProducts>
         </div>
        </ShopNav>
        <Tables>
          {
            card.length === 0 ?
                <ImgShopping>
                  <img className={'Imgshop'} src={ShopImage} />
                </ImgShopping> :
                <ProductTable>
                  <HeadSales>
                    <tr>
                      <Th>№</Th>
                      <Th>Изображение</Th>
                      <Th>Имя товара</Th>
                      <Th>Информация о товаре</Th>
                      {/*<Th>Количество</Th>*/}
                      <Th>Цена</Th>
                      <Th>Количество</Th>
                    </tr>
                  </HeadSales>
                  <BodyTable>
                    {
                      card ?
                          card.map((item,index)=><tr key={index}>
                                <Td> <b>{index + 1}</b> </Td>
                                <Td>
                                  <ImgProduct src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}/>
                                </Td>
                                <Td> <ProductName>{item.productName}</ProductName> </Td>
                                <Td>
                                  <TdInfo>
                                    <Popup   trigger={ <div className={'tdFont my-2'}  >{item.description.substr(0,6) }...  </div>
                                       } position=" center">
                                       {item.description}
                                 </Popup>
                                  </TdInfo>
                                </Td>

                                <TdPrice>{new Intl.NumberFormat().format(item.price) + ' - UZS'} </TdPrice>
                                <Td className={'Kol'}>
                                  <ItemPrice defaultValue={item.amount} onChange={(e)=>ChangePrice(e,item)} min={'0'} type={'number'} />
                                  <div style={{background:'none',border:'none'}} onClick={()=>Minus(item)} className={'btn btn-secondary'}>
                                    <HighlightOffIcon className={'Minus'} />
                                  </div>
                                </Td>
                              </tr>
                          ) :[]
                    }
                  </BodyTable>
                </ProductTable>
          }

        </Tables>

        <SellModal isOpen={sellVisable} toggle={Toggle}/>
        <Pag></Pag>
      </Block>
  )
}
export default connect(
    ({ProductPeducer:{card,count,load,pric}})=>({card,count,load,pric}),{getShop,ClearProduct,PlusDell,Dell,SetPrice}
) (Shopping)




