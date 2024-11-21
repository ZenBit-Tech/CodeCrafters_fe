interface OrdersSortsInterface {
  collection_date: {
    asc: string;
    desc: string;
  };
  collection_address: {
    asc: string;
    desc: string;
  };
  customer: {
    asc: string;
    desc: string;
  };
  route: {
    asc: string;
    desc: string;
  };
}

export const ORDERS_SORTS: OrdersSortsInterface = {
  collection_date: {
    asc: encodeURIComponent(JSON.stringify({ collection_date: 'ASC' })),
    desc: encodeURIComponent(JSON.stringify({ collection_date: 'DESC' })),
  },
  collection_address: {
    asc: encodeURIComponent(JSON.stringify({ collection_address: 'ASC' })),
    desc: encodeURIComponent(JSON.stringify({ collection_address: 'DESC' })),
  },
  customer: {
    asc: encodeURIComponent(JSON.stringify({ customer: { full_name: 'ASC' } })),
    desc: encodeURIComponent(
      JSON.stringify({ customer: { full_name: 'DESC' } })
    ),
  },
  route: {
    asc: encodeURIComponent(JSON.stringify({ route: { id: 'ASC' } })),
    desc: encodeURIComponent(JSON.stringify({ route: { id: 'DESC' } })),
  },
};
