import axios from 'axios'
import {connect} from "react-redux";
import EditModal from "./component/EditModal";
import React,{useEffect,useState} from "react";
import DeleteModal from './component/DelectModal';
import {getPost,getProducts,DelectProduct} from "../../store/product_reducer";
import {Pronum,
  SelectCaregoryHomeS,
  TdPrice,
  Block,
  // Select,
  SearchInput,
  ImgProduct,
  Tables,
  ProductTable,
  Head,
  Th,
  Td,
  BodyTable,
  TdInfo,
  ProductName,
  Edit,
  AllButton,
  Pag,
  Pagination,
  DivPag
} from './product'
import Popup from "reactjs-popup";
import { Select } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function Home({backup,backupp,DelectProduct,loader,getProducts,getPost,}) {

  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [edit, setEdit] = useState('');
  const [modalVisable, setModalVisable] = useState(false);
  const [delModal, setDelModal] = useState(null);

  const [pages, setPages] = useState(10)
  const [pages1, setPages1] = useState(false)
  const [pageDisebled, setpageDisabled] = useState(false)
  const [pageDisable, setPageDisable] = useState(true)

  const [page,setPage] = useState(1)

  useEffect(() => {
      GetApp()
    getPost();
  }, []);

  useEffect(() => {
    getPost();
    }, [edit])

  function toggle(item) {
    setModalVisable(prev => !prev);
    setEdit(item)
  }
  function Deletess() {
    DelectProduct(delModal);
  }
  function delect(id) {
    setDelModal(id)
  }
  function Filters(val) {
    return product.filter((item) => item.category === val || val === '')
  }
  function Onselect(e) {

  }

  function filters (page){

      return product.filter((item,index)=> index>=(page-1)*10 && index<page*10)
  }

  useEffect(()=>{
    const res = filters(page)

    if (pages1 === true) {

      if (res.length !== 10) {
        setPages(prev => prev + res.length)
        setpageDisabled(true)
      } else {

        setPages(prev => prev + res.length)

      }
    } else {

      setPages(prev => prev - backupp.length)
    }

    getProducts(res)
  },[page])


    const { Option } = Select;

    function onChange(value) {
      const res = Filters(value)
      getProducts(res);
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


  function PaginationPrev() {
    setPages1(false)
    if (page === 1) {

      setPageDisable(true)
    } else {
      setPage(prev => prev - 1)
      setPageDisable(false)
    }
    setpageDisabled(false)
  }

  function PaginationNext() {
    setPages1(true)
    setPage(prev => prev + 1)

    setPageDisable(false)
  }


  function GetApp() {
      axios({
          url: 'https://store-management-backend-app.herokuapp.com/api/v1/product',
          method: 'GET'
      }).then((res) => {
          setProduct(res.data)
          setProduct1(res.data)
          getProducts(res.data.filter((item,index)=>index>=0 && index<10))
      }).catch((err) => {
          console.log(err)
      });
  }


  return (
      <Block>
        <Pronum>{ 'Все продукты: ' + backup.length}
        <i className="bi bi-search float-end posikOne"> </i>
        </Pronum>

        <SelectCaregoryHomeS>

          <Select
              className={'selects'}
              showSearch
              style={{ width: 200 }}
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
            <Option value="santexnika">santexa</Option>
            <Option value="">Все</Option>
            <Option value="tom"> </Option>
          </Select>


          <SearchInput type="text" value={search}   onChange={(e)=>setSearch(e.target.value)} placeholder={'Поиск'} />

        </SelectCaregoryHomeS>

        <Tables>

          <ProductTable>
            <Head>
            <tr>
              <Th> № </Th>
              <Th> Изображение </Th>
              <Th> Имя товара</Th>
              <Th> О товаре </Th>
              <Th> Количество </Th>
              <Th> Цена </Th>
              <Th> Изменить | Удалить </Th>
            </tr>
            </Head>
            <BodyTable>
            {loader ? backupp.
                  filter(item => {
                    if(item === ''){
                      return item
                    }else if (item.productName.toUpperCase().includes(search.toUpperCase())){
                      return item
                    }})
                    .map((item,index)=>
                      <tr key={index}  >
                        <Td> <b>{item.id}</b> </Td>
                        <Td> <ImgProduct
                            src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}/>
                        </Td>
                        <Td> <ProductName>{item.productName}</ProductName> </Td>
                        <Td> <TdInfo> <Popup   trigger={
                          <div className={'tdFont my-2'}  >
                             {item.description.substr(0,6) }...
                          </div>} position=" center">
                             {item.description}
                        </Popup> </TdInfo>
                        </Td>
                        <Td> <b>{item.amount}</b> </Td>
                        <TdPrice> {new Intl.NumberFormat().format(item.price)} UZS </TdPrice>
                        <Td>
                          <AllButton>
                            <Edit onClick={()=>toggle(item)}>
                              <i className="bi bi-pencil-square"> </i>
                            </Edit>
                            <span onClick={()=>delect(item.id)} className={'btn'}>
                              <DeleteModal del={Deletess}/>
                            </span>
                          </AllButton>
                        </Td>
                      </tr>)
                  : <div className={'loader'}>
                    {/*loader worked*/}
                  </div>
            }
            <EditModal edit={edit} isOpen={modalVisable} GetApp={GetApp} toggle={toggle}/>
            </BodyTable>
          </ProductTable>
        </Tables>
         <DivPag className={'text-right'}>
           <Pagination >
             <nav className={'pagination-nav'}>

               <div className={'mb-3   page-texts'}>
                 <span className={'mx-3 text-primary page-texts'}> {pages}</span>
                 Из
                 <span className={'mx-3 page-texts'}> {product.length}</span>
               </div>
               <ul className={'pagination '}>
                 <li onClick={PaginationPrev} aria-disabled={pageDisable}
                     className={`mx-2 page-bg page-link ${pageDisable===true ? 'd-none' : ''}`}>
                   {'<'}
                 </li>


                 <li className={'page-link'}> {page}</li>

                 <li onClick={PaginationNext} aria-disabled={pageDisebled}

                     className={`mx-2 page-link page-bg ${pageDisebled === true ? 'd-none' : ''}`}>{'>'}</li>
               </ul>
             </nav>
           </Pagination>
         </DivPag>
        <Pag></Pag>
      </Block>
  )
}
export default connect(({ProductPeducer:{backup , backupp,loader}})=>({backup, backupp,loader})
    ,{DelectProduct,getProducts,getPost}) (Home);