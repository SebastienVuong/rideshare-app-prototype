import {useCallback, useEffect, useState} from "react"

export const useRequest = ({
  request,
  isLazyRequest,
}: {
  request: () => Promise<any>
  isLazyRequest?: boolean
}) => {
  const [loading, setLoading] = useState(!isLazyRequest)
  const [data, setData] = useState<any>()

  const fetch = useCallback(async () => {
    setLoading(true)
    const response = await request()
    setData(response)
    setLoading(false)
  }, [request])

  useEffect(() => {
    if (isLazyRequest) {
      return
    }

    fetch()
  }, [isLazyRequest, fetch])

  return {loading, data, fetch}
}
