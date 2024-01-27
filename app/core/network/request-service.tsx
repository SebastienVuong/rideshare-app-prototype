import {useCallback, useEffect, useState} from "react"

/**
 *  useRequest is a hook that is used to make a request and handle the loading state and the data
 *
 *  @param request is a function that returns a promise
 *  @param isLazyRequest is a boolean that indicates if the request should be made on mount or not
 *  @returns an object with the loading state, the data and the fetch function
 *
 *  @example
 *  const {loading, data, fetch} = useRequest({request: fetchUser, isLazyRequest: true})
 *
 *  useEffect(() => {
 *    if (isReadyToFetch) {
 *      fetch()
 *    }
 *  }, [isReadyToFetch])
 *
 *  if (loading) {
 *   return <Loading />
 *  }
 *
 *  return <User data={data} />
 */
export const useRequest = <T,>({
  request,
  isLazyRequest,
}: {
  request: () => Promise<T>
  isLazyRequest?: boolean
}) => {
  const [loading, setLoading] = useState(!isLazyRequest)
  const [data, setData] = useState<T>()

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      const response = await request()
      setData(response)
    } catch (e) {
      /**
       *  TODO: This error handling should be improved - it should be returned the same way as the
       *        data and the loading state.
       */
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [request])

  useEffect(() => {
    if (isLazyRequest) {
      return
    }

    fetch()
  }, [isLazyRequest, fetch])

  return {loading, data, fetch}
}
