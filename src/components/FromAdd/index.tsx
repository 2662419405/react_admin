import React, { useState } from 'react'
import './index.scss'
import {
  Button,
  Form,
  Modal,
  Input,
  DatePicker,
  Space,
  InputNumber,
  Radio,
  message,
} from 'antd'

const FromAdd: React.FC<{}> = props => {
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const submitData = (values: any) => {
    setVisible(false)
    message.success('提交数据成功!!!')
    form.resetFields()
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  }
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        size="large"
        type="primary"
        className="btn-bottom"
      >
        添加新数据
      </Button>
      <Modal
        title="提交数据"
        onCancel={() => setVisible(false)}
        visible={visible}
        footer={null}
      >
        <Form
          form={form}
          initialValues={{ ji: true, level: 2020 }}
          name="basic"
          onFinish={submitData}
          onFinishFailed={onFinishFailed}
          {...layout}
        >
          <Form.Item label="时间" name="time" rules={[{ required: true }]}>
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item label="赛事名称" name="title" rules={[{ required: true }]}>
            <Input placeholder="请输入赛事名称" />
          </Form.Item>
          <Form.Item label="赛事级别" name="ji" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value={true}>省赛</Radio>
              <Radio value={false}>校赛</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="年度" name="level" rules={[{ required: true }]}>
            <InputNumber max={2020} min={2010} />
          </Form.Item>
          <Form.Item label="学校" name="school" rules={[{ required: true }]}>
            <Input placeholder="请输入学校" />
          </Form.Item>
          <Form.Item label="地址" name="address" rules={[{ required: true }]}>
            <Input placeholder="请输入地址" />
          </Form.Item>
          <Form.Item label="描述信息" name="desc" rules={[{ required: true }]}>
            <Input placeholder="请输入描述信息" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button
                onClick={() => form.resetFields()}
                type="default"
                htmlType="reset"
              >
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default FromAdd
