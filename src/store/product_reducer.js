import {createSlice} from "@reduxjs/toolkit";
import Action,{SetCounter,CardShop,ClearAction,delPro,delPlus,DelShop,setpice,GETPRO} from "./action";
import {toast} from "react-toastify";

let delet= '';
let del ='  ';

const slice = createSlice({
    name:'product',
    initialState:{
        backup:[],
        backupp:[],
        card:[],
        historyCard:[],
        shop:[],
        count:0,
        loader:false,
        load:false,
        pric:0
    },
    reducers:{
        GetPost:(state,action)=>{
            state.backup = action.payload;
            state.loader = true;

        },
        GetPost1:(state,action)=>{
            console.log(action.payload)
            state.backupp = action.payload;
            state.loader = true;

        },
        SaveProduct:(state,action)=>{
            state.backup.push(action.payload);
            toast.success('Сохранено')
        },
        EditProduct:(state,action)=>{

            state.backup.map(item =>{
                if(item.id === action.payload.id){
                    item.id = action.payload.id;
                    item.imageId = action.payload.imageId;
                    item.productName = action.payload.productName;
                    item.description = action.payload.description;
                    item.amount = action.payload.amount;
                    item.price = action.payload.price
                }
            });
            toast.success('Измененный');
            getPost()
        },
        getSell:(state,action)=>{
            state.card =[];
            state.load = false;
        },
        DelectProducts:(state,action)=>{
         state.backup = state.backup.filter((item=>item.id !==delet));
            toast.error('Товар был удален')
        },
        ShopCard:(state,action)=>{
            const cc = {
                productId:action.payload.id,
                productName:action.payload.productName,
                imageId:action.payload.imageId,
                amount:1,
                description:action.payload.description,
                price:action.payload.price,
                // count:1
            };
            state.historyCard.push(cc);
            state.card.push(cc);
            state.count+=parseFloat(action.payload.price);
        },
        Counter:(state,action)=>{
            state.count+=action.payload
        },
        clear:(state,action)=>{
            state.card = [];
        },
        Del:(state,action)=>{

            state.card.map((item,index)=>{
                if (item.productId === action.payload.productId){
                    state.card.splice(index,1)
                }
            })
        },
        delshop:(state,action)=>{

            state.card.map((item,index)=>{
                if (item.productId === action.payload.id){
                    state.card.splice(index,1)
                }
            })
        },
        setPrice:(state,action)=>{
            state.card.map((item,index)=>{
                if (item.productId === action.payload.productId){

                    state.card[index].amount = parseInt(action.payload.val)
                }
                if(item.amount===0){
                    state.card.splice(index,1)
                }
            });
        }
    },
});

export const getPost=()=> Action({
    url:'api/v1/product',
    method:'GET',
    onSuccess:'product/GetPost'
});
export const getProduct=(data)=> Action({
    url:'api/v1/product',
    method:'POST',
    data,
    onSuccess:'product/SaveProduct'
});
export const getShop=(data)=> Action({
    url:'api/v1/sale/sold',
    method:'POST',
    data,
    onSuccess:'product/getSell'
});
export const editproduct=(data)=> Action({
    url:'api/v1/product/' +data.id,
    method:'PUT',
    data,
    onSuccess:'product/EditProduct'
});
export const DelectProduct=(data)=> {
 delet=data;
    return  Action({
    url:'api/v1/product/' + data,
    method:'DELETE',
    onSuccess:'product/DelectProducts'
})
};
export const shopToCard=(data)=>CardShop({
    data,
    onSuccess:'product/ShopCard'
});
export const ClearProduct =()=>ClearAction({
    onSuccess:'product/clear'
});
export const Dell =(data)=>delPro({
    data,
    onSuccess:'product/Del'
});
export const PlusDell =(data)=>delPlus({
    data,
    onSuccess:'product/DellPlus'
});
export const delSale = (data)=>DelShop({
   data,
   onSuccess:'product/delshop'
});
export const SetPrice = (data)=>setpice({
    data,
    onSuccess:'product/setPrice'
});
export const getProducts=(data)=>GETPRO({
    data,
    onSuccess:'product/GetPost1'
});


export default slice.reducer;
