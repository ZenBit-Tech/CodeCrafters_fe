import { ORDERS_SORTS } from '@/constants/ordersSorts';
import { Order } from '@/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OrderPageState {
  params: {
    sortBy: {
      type: string;
      value: 'ASC' | 'DESC';
      encoded: string;
    };
    search: string;
    filterBy: string;
    page: number;
  };
  viewOrdersData: {
    orders: Order[];
    pagesCount: number;
    page: number;
  };
}

const initialState: OrderPageState = {
  params: {
    sortBy: {
      type: 'route',
      value: 'DESC',
      encoded: ORDERS_SORTS.route.asc,
    },
    search: '',
    filterBy: 'STATUS',
    page: 1,
  },
  viewOrdersData: {
    orders: [],
    pagesCount: 1,
    page: 1,
  },
};

const orderPageSlice = createSlice({
  name: 'orderPageSlice',
  initialState,
  reducers: {
    setViewOrdersData(
      store,
      action: PayloadAction<{
        orders: [];
        pagesCount: number;
        page: number;
      }>
    ) {
      store.viewOrdersData = action.payload;
    },
    setParamsPage(store, action: PayloadAction<number>) {
      store.params.page = action.payload;
    },
    setParamsFilter(store, action: PayloadAction<string>) {
      store.params.filterBy = action.payload;
    },
    setParamsSortBy(
      store,
      action: PayloadAction<{
        type: string;
        value: 'ASC' | 'DESC';
        encoded: string;
      }>
    ) {
      store.params.sortBy = action.payload;
    },
    setSearchBy(store, action: PayloadAction<string>) {
      store.params.search = action.payload;
    },
  },
});

export const {
  setViewOrdersData,
  setParamsFilter,
  setParamsPage,
  setParamsSortBy,
  setSearchBy,
} = orderPageSlice.actions;
export default orderPageSlice.reducer;
