import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router';

interface IHandleSyncParams {
  name: string;
  value: string | number;
}

const useSyncParams = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();

  const handleSyncParams = async (params: IHandleSyncParams[]) => {
    const parsedParams = queryString.parse(search);
    const paramsURl = params.map(({ name, value }) => ({
      [name]: value,
    }));

    const mergedParams = new URLSearchParams(
      Object.assign(parsedParams, ...paramsURl)
    ).toString();

    history.replace({
      pathname: pathname,
      search: mergedParams,
    });
  };
  const getQueryParams = (name: string) => {
    return new URLSearchParams(search).get(name);
  };
  return { handleSyncParams, getQueryParams };
};

export default useSyncParams;
