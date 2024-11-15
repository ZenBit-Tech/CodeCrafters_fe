export const ORDERS_SORTS = {
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
