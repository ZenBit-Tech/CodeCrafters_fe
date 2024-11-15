import { StatusEnum } from '@/constants/status';
import {
  Customer,
  LuggageTypes,
} from '@/pages/Orders/components/OrderItem/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OrderPageState {
  params: {
    sortBy: {
      type: string;
      value: 'ASC' | 'DESC';
      encoded: string;
    };
    filterBy: string;
    page: number;
  };
  viewData: {
    orders: {
      id: number;
      collection_date: Date;
      collection_time_start: Date;
      collection_time_end: Date;
      collection_address: string;
      status: StatusEnum;
      route: null | {
        id: number;
      };
      customer: Customer;
      luggages: {
        id: number;
        luggage_weight: number;
        luggage_type: LuggageTypes;
      }[];
      createdAt: string;
      updatedAt: string;
    }[];
    pagesCount: number;
    page: number;
  };
}

const initialState: OrderPageState = {
  params: {
    sortBy: {
      type: 'collection_date',
      value: 'DESC',
      encoded: '%7B%22collection_date%22%3A%22DESC%22%7D',
    },
    filterBy: 'STATUS',
    page: 1,
  },
  viewData: {
    orders: [],
    pagesCount: 1,
    page: 1,
  },
};

const orderPageSlice = createSlice({
  name: 'orderPageSlice',
  initialState,
  reducers: {
    setViewData(
      store,
      action: PayloadAction<{
        orders: [];
        pagesCount: number;
        page: number;
      }>
    ) {
      store.viewData = action.payload;
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
  },
});

export const { setViewData, setParamsFilter, setParamsPage, setParamsSortBy } =
  orderPageSlice.actions;
export default orderPageSlice.reducer;
