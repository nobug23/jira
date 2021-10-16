import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen=()=>{

  
    const {login,user}=useAuth()
  // 提交
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()//阻止默认提交
    const username=(event.currentTarget.elements[0] as HTMLInputElement).value
    const password=(event.currentTarget.elements[1] as HTMLInputElement).value
                                                 // as 代表的意思，给前面接口设置后面泛型
    // 调用login
    login({username,password})
  }
  return (
    <form onSubmit={handleSubmit}>
      {
        user?<div>
            登录成功，用户名:{user?.name}
        </div>:null
      }
        <div>
          <label htmlFor={'username'}>用户名</label>
          <input type="text" id={'username'} />
        </div>  
        <div>
          <label htmlFor={'password'}>密码</label>
          <input type="text" id={'password'} />
        </div>  
        <button type={'submit'}>注册</button>
    </form>

    
  );
}

export default LoginScreen;
