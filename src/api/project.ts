import { useHttp } from "../utils/http";
import { useAsync } from "../utils/useAsync";
import { useEffect } from "react";
import { Project } from "../screens/project-list/list";
import { cleanObject } from "../screens/project-list/utils";

export const useProject = (params: Partial<Project>) => {
   const client = useHttp()
   const {run, isLoading, ...result}=useAsync<Project[]>()
   useEffect(() => {
    run(client('projects', {
      data: cleanObject(params)
    }))
   }, [params])
  return result
}