import { useState, useEffect } from 'react'; 

    const useFetch = (url) => {
        const [data, setData] = useState(null);
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            // console.log('use effect ran');

            const abortCont = new AbortController(); // aborts fetch request if user clicks instantaneously to other page(s)

            // setTimeout(() => {
              fetch(url)
                .then((res) => {
                  if (!res.ok){
                    throw Error('Could not fetch the data for that resource');
                  }
                  // console.log(res.json());
                  return res.json();
                })
                .then((data) => { // 'data' can be any name
                  // console.log(data);
                  setData(data);
                  setIsPending(false);
                  setError(null);
                })
                .catch(err => {
                  if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                  } else {
                    setIsPending(false);
                    setError(err.message);
                  }
                })
            // });

            return () => abortCont.abort();
          }, [url]);

          return { data, isPending, error };
    }

    export default useFetch;