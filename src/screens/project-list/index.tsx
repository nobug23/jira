import React, { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { cleanObject,useDebounce ,useMount} from "Utils";
import * as qs from 'qs'
import { useHttp } from "Utils/http";
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam=useDebounce(param,200)
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const client=useHttp()
  useEffect(() => {
    client('projects',{data:cleanObject(debouncedParam)}).then(setList)
  }, [debouncedParam]);

  useMount(() => {
   client('users').then(setUsers)
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};


 