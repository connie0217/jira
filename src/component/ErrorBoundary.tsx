import React, { ReactNode } from "react";


type FallbackRender = (props: {error: Error | null}) => React.ReactElement
// 需要传入的props： children fallbackrender
// export class ErrorBoundary extends React.Component<{children: ReactNode, fallbackRender: FallbackRender}, {
export class ErrorBoundary extends React.Component<React.PropsWithChildren<{fallbackRender: FallbackRender}>, {
  error: Error | null
}>{
  state = {error: null}
  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log('error-----', error)
    return { error };
  }
  render() {
    const {error} = this.state
    const { fallbackRender, children } = this.props;
    /**
     * 有错误： 展示错误的render
     * 无错误： 展示<ErrorBoundary><some/></ErrorBoundary>内部的children
     */
    if (error) {
      return  fallbackRender({error})
    } else {
      return children
    }

  }
}