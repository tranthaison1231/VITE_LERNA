import React from "react";
import { Table } from "antd";

export function App() {
  return <Table pagination={{ current: 2, pageSize: 20, total: 100 }} />;
}
