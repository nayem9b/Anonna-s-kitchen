const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Anonna's Kitchen`;
  }, [title]);
};

export default useTitle;
