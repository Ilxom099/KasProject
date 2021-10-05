import {configureStore} from "@reduxjs/toolkit";
import ProductPeducer from './product_reducer'
import apiCall,{count,shopCard,clearproduct,delPro,delPlus,DelShop,setpice,GETPRO} from "./middleware/apiCall";

export default configureStore({
    reducer:{
        ProductPeducer
    },
    middleware:[
        apiCall,
        count,
        shopCard,
        clearproduct,
        delPro,
        delPlus,
        DelShop,
        setpice,
        GETPRO
    ]
})