interface useRemoveOrderFromRouteHook {
  handleDelete: (id: number) => void;
}

export const useRemoveOrderFromRoute = (): useRemoveOrderFromRouteHook => {
  const handleDelete = (id: number): void => {
    console.log(id);
  };

  return { handleDelete };
};
