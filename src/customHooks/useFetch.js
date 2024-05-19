import { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const memoizedData = useMemo(() => data, [data]);

  const sendRequest = useCallback(async (method, requestUrl, requestData = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method,
        url: requestUrl,
        data: requestData,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setData(response.data);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data: memoizedData, loading, error, refetch: fetchData, sendRequest };
};

export default useFetch;
