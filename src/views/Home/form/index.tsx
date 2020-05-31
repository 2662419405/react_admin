import React from 'react'
import { Table, Spin, Tooltip, Space } from 'antd'
import useFrom from 'src/hooks/useFrom'
import { Icon, FromAdd } from 'src/components'
import './index.scss'

export interface Itype {
  time: Date
  title: string
  ji: boolean
  level: number
  school: string
  address: string
  desc: string
}

const formDataStirng = '/form'

const FormTable: React.FC<{}> = () => {
  const { loading, getColumnSearchProps, data } = useFrom({
    url: formDataStirng,
  })
  const columns = [
    {
      title: '举办时间',
      dataIndex: 'time',
      sorter: (a: Itype, b: Itype) =>
        new Date(a.time).getTime() - new Date(b.time).getTime(),
    },
    {
      title: '赛事名称',
      dataIndex: 'title',
      ...getColumnSearchProps('title'),
    },
    {
      title: '级别',
      dataIndex: 'ji',
      filters: [
        {
          text: '省级',
          value: true,
        },
        {
          text: '校级',
          value: false,
        },
      ],
      onFilter: (value: any, record: Itype) =>
        record.ji === value ? true : false,
      render(ji: boolean) {
        if (ji === true) {
          return '省级'
        } else {
          return '校级'
        }
      },
    },
    {
      title: '年度',
      dataIndex: 'level',
      sorter: (a: Itype, b: Itype) => a.level - b.level,
    },
    {
      title: '主办方',
      dataIndex: 'school',
      ...getColumnSearchProps('school'),
    },
    {
      title: '地点',
      dataIndex: 'address',
      ...getColumnSearchProps('address'),
    },
    {
      title: '描述',
      dataIndex: 'desc',
      ...getColumnSearchProps('desc'),
    },
    {
      title: '操作',
      dataIndex: 'cao',
      render: (text: string, record: Itype) => (
        <Space size="middle">
          <Tooltip title="查看详情">
            <span>
              <Icon type="iconicon-chakanxq" />
            </span>
          </Tooltip>
          <Tooltip title="删除">
            <span>
              <Icon type="iconshanchu" />
            </span>
          </Tooltip>
          <Tooltip title="修改">
            <span>
              <Icon type="iconxiugai" />
            </span>
          </Tooltip>
        </Space>
      ),
    },
  ]
  return (
    <>
      <FromAdd />
      <Spin spinning={loading}>
        <Table bordered columns={columns} dataSource={data} />
      </Spin>
    </>
  )
}

export default FormTable
