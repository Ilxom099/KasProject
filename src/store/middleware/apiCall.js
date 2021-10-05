import axios from 'axios'


// --> Axois orqali backendga murojat qilish ga murojat qilish
const apiCall = ({dispatch})=>(next)=>(action)=>{

    if(action.type !== 'api/apiCall'){
        next(action);
        return 
    }
    next(action);
    
    const {url,method,data,onSuccess} = action.payload;

    axios({
        baseURL:'https://store-management-backend-app.herokuapp.com/',
        url,
        method,
        data
    }).then((res)=>{
        dispatch({
            type:onSuccess,
            payload:res.data
        })
    }).catch((err)=>{
        console.log(err)
    })
};


// --> card_sales.js ni ichidagi counterni o'zgartirish.
export const count = ({dispatch})=>(next)=>(action)=>{

    if(action.type === 'count'){
        next(action);
           dispatch({
               type:'product/Counter',
               payload:1
           });

        return 
    }
    next(action);
};

// --> CardShop

export const shopCard = ({dispatch})=>(next)=>(action)=>{

    const {data,onSuccess} = action.payload;

    if (action.type === 'CardShop'){
        next(action);
        dispatch({
            type:onSuccess,
            payload:data
        })
    }
    next(action);
};

// --> Productlarni tozalash

export const clearproduct = ({dispatch})=>(next)=>(action)=>{
    const {onSuccess} = action.payload;

    if (action.type === 'clear'){
        next(action);

        dispatch({
            type: onSuccess,
            payload:''
        });
    }
    next(action);
};

//--> Count minusni o'chirish

export const delPro = ({dispatch})=>(next)=>(action)=>{
    const {data,onSuccess} = action.payload;

    if (action.type === 'del'){
        next(action);

        dispatch({
            type: onSuccess,
            payload:data
        });
    }
    next(action);
};

// --> Conut plus ni ishlatish

export const delPlus = ({dispatch})=>(next)=>(action)=>{
    const {data,onSuccess} = action.payload;

    if (action.type === 'plus'){
        next(action);

        dispatch({
            type: onSuccess,
            payload:data
        });
    }
    next(action);
};

// --> Shopda tanlangan stateni o'chirish

export const DelShop = ({dispatch})=>(next)=>(action)=>{
    const {data,onSuccess} = action.payload;

    if (action.type === 'delstate'){
        next(action);

        dispatch({
            type: onSuccess,
            payload:data
        });
    }
    next(action);
};

// --> Inputdagi soni narxga qo'shish

export const setpice = ({dispatch})=>(next)=>(action)=>{
    const {data,onSuccess} = action.payload;

    if (action.type === 'price'){
        next(action);

        dispatch({
            type: onSuccess,
            payload:data
        });
    }
    next(action);
};

// --> Filter uchun

export const GETPRO = ({dispatch})=>(next)=>(action)=>{
    const {data,onSuccess} = action.payload;

    if (action.type === 'get/product'){
        next(action);

        dispatch({
            type: onSuccess,
            payload:data
        });
    }
    next(action);
};
export default apiCall;

