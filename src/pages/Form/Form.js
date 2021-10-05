import React, {useEffect, useRef, useState} from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { getProduct, getPost } from "../../store/product_reducer";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import AddBlue from '../Images/addblue.jpg'
import {BlockCreate,
    ImgLabel,
    InputForms,
    LabelAv,
    SubmitButton,
    Inputs,
    InputName,
    InputPrice,
    InputAmount,
    InputCateg,
    InputAbout,
    InputAdd,
    Forms,
    Upload,
    DivForms,
    Img,
    FormsName,

} from './Create'
import {Block, No, SearchInput, SelectCaregory} from "../Home/product";
import {Select} from "antd";


import 'antd/dist/antd.css';

function Form({ getProduct, getPost}) {

    const toggle = useRef(null);
    const [img,setImg] = useState(null);
    const [load,setLoad] = useState(true);


    function Handel(e) {
        setLoad(true)
        const onload = e.target.files[0];
        const formData = new FormData();
        formData.append("image", onload);
        axios({
            url: "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
            method: "POST",
            data: formData,
        }).then((res) => {
            setImg(res.data)
            setLoad(false)
        }).catch((err)=>{
            console.log(err);
        });
    }

    const { Option } = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    const history = useHistory();
    function SubmitProduct(event, values) {
        let val = values;
        getPost();
        getProduct({...val,imageId:img});
        history.push("/");
    }
    useEffect(()=>{
        setLoad(false)
    },[img])
    return (

        <BlockCreate>

            <InputForms>

                  <Forms>
                      <FormsName>
                          Добавить
                      </FormsName>
                  <AvForm id={"Avform"} onValidSubmit={SubmitProduct}>

                      <InputName>
                          <LabelAv>
                              Имя товара
                          </LabelAv>
                          <AvField type={"text"} name={"productName"}
                                   className={'createInput'}
                                   placeholder={'Имя товара'}
                                   required  />
                      </InputName>
                      <InputPrice>
                          <LabelAv>
                              Цена товара
                          </LabelAv>
                          <AvField type={"number"}
                                   name={"price"}
                                   className={'createInput'}
                                   placeholder={'Цена товара'}
                                   required/>
                      </InputPrice>


                      <Inputs>
                          <InputAmount className={'InputAmount'}>
                              <LabelAv className={'amount'}>
                                  Количество
                              </LabelAv>
                              <AvField type={"number"}
                                       name={"amount"}
                                       className={'createInput'}
                                       placeholder={'Количество'}
                                       required />
                          </InputAmount>
                          <InputAbout className={'creatInput'}>
                              <LabelAv>
                                  Категория
                              </LabelAv>
                              <SelectCaregory>

                                  <Select
                                      className={'selectForm'}
                                      showSearch
                                      placeholder="Категория"
                                      optionFilterProp="children"
                                      onChange={onChange}
                                      onFocus={onFocus}
                                      onBlur={onBlur}
                                      onSearch={onSearch}
                                      filterOption={(input, option) =>
                                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                      }
                                  >
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="tom">Tom</Option>
                                  </Select>



                              </SelectCaregory>

                          </InputAbout>
                      </Inputs>
                      <InputCateg>
                          <LabelAv> О товаре </LabelAv>
                          <AvField type={"textarea"}
                                   name={"description"}
                                   className={'createInput'}
                                   placeholder={'О товаре'}
                                   required />
                      </InputCateg>
                  </AvForm>
             <InputAdd>
                      {
                          img ? <i className="bi bi-x-lg float-end" onClick={()=>setImg('')}> </i> : ''
                      }
                      <ImgLabel htmlFor={"Input"}>
                          {
                              img ? <Img  src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`}

                                         />
                                         :
                                  <div>
                                  {load === true ? <div
                                      className={'loaders'}>
                                  </div> :
                                    <DivForms>
                                      <Upload src={AddBlue}/>
                                      <div className={'addPhoto'}>Загрузить изображение</div>
                                    </DivForms>}
                              </div>
                          }
                      </ImgLabel>
                      <input type="file" ref={toggle}
                             onChange={Handel}
                             className={"m-5 d-none"}
                             id={"Input"}/>
                  </InputAdd>

                  <SubmitButton>
                      <button form={"Avform"} className={'Formbut'}> Добавить </button>
                  </SubmitButton>
                  </Forms>
              </InputForms>

        </BlockCreate>

    );
}
export default connect(null, { getProduct,getPost }) (Form);
