//处理异步的状态: int loading error success
//返回的是promise
// 近一步封装了异步请求。包括请求的状态、请求的结果(正常与异常)
//
import { useState } from "react";

interface AsyncStat<T> {
  stat: 'idle' | 'loading' | 'success' | 'error';
  data: T | null;
  error: Error | null;
}
const defaultStat: AsyncStat<null> = {
  stat: 'idle',
  data: null,
  error: null
}
export const useAsync = <T>(initialStat?: AsyncStat<T>) => {
  const [state, setState] = useState({
    ...defaultStat,
    ...initialStat
  })

  const setData = (data: T) => {
    setState({
      data,
      stat: 'success',
      error: null
    })
  }

  const setError = (error: Error) => {
    setState({
      error,
      data: null,
      stat: 'error'
    })

  }

  const run = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error('请传入promise')
    }
    setState({
      ...state,
      stat: 'loading'
    })
    return promise.then((res: T) => {
              setData(res)
              return res
            }).catch((error: Error) => {
              setError(error)
              // promise.catch会消化掉传入的promise的错误
              return Promise.reject(error)
            })
  }


  return {
    isLoading: state.stat === 'loading',
    isSuccess: state.stat === 'success',
    isError: state.stat === 'error',
    run,
    setData,
    setError
  }
}