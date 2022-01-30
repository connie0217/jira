import { useEffect, useRef } from "react";

export const useDocTitle = (title: string) => {
  const oldTitle = useRef(document.title).current
  useEffect(() => {
    // 组件挂载时
    document.title = title || 'jira'
    return () => {
      // 组件卸载时
      document.title = oldTitle
      console.log('组件卸载时', oldTitle);
    }
  }, [title, oldTitle])
}