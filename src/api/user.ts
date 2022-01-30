import { useAsync } from "../utils/useAsync";
import { useHttp } from "../utils/http";
import { useEffect } from "react";
import { useMount } from "../screens/project-list/utils";
import { User } from "../screens/project-list/search-panel";


export const useUsers = () => {
  // 所有的数据与方法都从hook中获取
  const {run, isLoading, ...result} = useAsync<User[]>()
  const client = useHttp()
  useMount(() => {
    run(client('users'))
  })
  return result
}