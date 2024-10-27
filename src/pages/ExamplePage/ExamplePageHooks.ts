interface ExamplePageLogicReturn {
  title: string;
}

const useExamplePageLogic = (): ExamplePageLogicReturn => {
  const title = 'pageTitle';

  return { title };
};

export default useExamplePageLogic;
