import { Input, Button, Space } from 'antd'
import { myAxios } from 'src/utils/axios'
import React, { useEffect, useState } from 'react'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { Itype } from 'src/views/Home/form'

interface IFromProps {
  url: string
}

const useFrom = (props: IFromProps) => {
  const { url } = props
  const [data, setData] = useState<Itype[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const [searchColumn, setSearchColumn] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    getDefaultData()
  }, [])

  const getDefaultData = async () => {
    const Demo = (await myAxios.getData({ url: url })) as { list: Itype[] }
    setData([...Demo.list])
    setLoading(false)
  }

  const getColumnSearchProps = (dataIndex: string): any => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`输入搜索内容`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            搜索
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            重置
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: string, record: any) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text: any) =>
      searchColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  })

  const handleSearch = (
    selectedKeys: string[],
    confirm: Function,
    dataIndex: string
  ) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchColumn(dataIndex)
  }

  const handleReset = (clearFilters: Function) => {
    clearFilters()
    setSearchText('')
  }

  return {
    loading,
    getColumnSearchProps,
    data,
  }
}
export default useFrom
