import { createAction } from "@reduxjs/toolkit";

// --> Axios
const Action = createAction('api/apiCall');


// --> card_sales.js
export const SetCounter = createAction('count');


export const CardShop = createAction('CardShop');


export const ClearAction = createAction('clear');


export const delPro = createAction('del');


export const delPlus = createAction('plus');


export const DelShop = createAction('delstate');


export const setpice = createAction('price');


export const GETPRO = createAction('get/product');

export default Action