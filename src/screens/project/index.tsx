import React from "react";
import { ProjectBoard } from "../projectBoard";
import { TaskGroup } from "../taskGroup";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

export const Project: React.FC = () => {
  return <div>
    <Link to={'board'}>
      项目看板
    </Link>
    <Link to={'task'}>
      任务
    </Link>
    {/*<BrowserRouter>*/}
      <Routes>
        <Route path={'/board'} element={<ProjectBoard></ProjectBoard>}></Route>
        <Route path={'/task'} element={<TaskGroup></TaskGroup>}></Route>
        <Route path={'/'} element={<Navigate to={'board'}/>}/>
      </Routes>
    {/*</BrowserRouter>*/}
  </div>
}