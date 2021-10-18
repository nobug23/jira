import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';
import {Form,Input,Button} from 'antd'
import {LongButton} from './index'
const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen=()=>{

  const {register,user}=useAuth()
  // 提交
  const handleSubmit=(values:{username:string,password:string})=>{
    // 调用login
    register(values)
  }
  return (
    <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required:true,message:'请输入用户名'}]}>
          <Input placeholder={"用户名"} type="text" id={"username"}/>
        </Form.Item>  
        <Form.Item name={'password'}rules={[{required:true,message:'请输入密码'}]}>
          <Input placeholder={"密码"} type="password" id={"password"}/>
        </Form.Item>   
        <Form.Item>
          <LongButton type={'primary'}htmlType={'submit'}>注册</LongButton>
        </Form.Item>
    </Form>

    
  );
}

export default RegisterScreen;
