import React, { useState } from 'react';
import { DivPins } from './style';
import { Table, Tag, Divider, Button } from 'antd';

function Pins() {
  const [dataSource] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]);

  const [columns] = useState([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: name => (
        <Button type="link">{name}</Button>
      )
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <span>
          {
            tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue': 'green';
              if (tag === 'loser') color = 'volcano'; 
              return (
                <Tag color={ color } key={tag}>
                  {
                    tag.toUpperCase()
                  }
                </Tag>
              );
            })
          }
        </span>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link">Invite  { record.age }</Button>
          <Divider type="vertical"></Divider>
          <Button type="link">delete</Button>
        </span>
      ),
    },
  ]);

  const rowSelection = {
    onChange: (keys, rows) => {
      console.log('keys',keys, 'rows', rows)
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Joe Black', // Column configuration not to be checked
      name: record.name,
    }),
  }

  return (
    <DivPins className="pins">
      <Table 
        rowSelection={ rowSelection }
        columns={ columns }
        dataSource={ dataSource }></Table>
    </DivPins>
  )
}

export default Pins;
