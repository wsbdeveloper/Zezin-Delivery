import { configureStore } from '@reduxjs/toolkit'

import Bag from './reducers/market';


export default configureStore({
    reducer : {
        bag : Bag
    }
})