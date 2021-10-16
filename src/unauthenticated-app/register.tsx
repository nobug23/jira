import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';
const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen=()=>{

  const {register,user}=useAuth()
  // 提交
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()//阻止默认提交
    const username=(event.currentTarget.elements[0] as HTMLInputElement).value
    const password=(event.currentTarget.elements[1] as HTMLInputElement).value
                                                 // as 代表的意思，给前面接口设置后面泛型
    // 调用login
    register({username,password})
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={'username'}>用户名</label>
          <input type="text" id={'username'} />
        </div>  
        <div>
          <label htmlFor={'password'}>密码</label>
          <input type="password" id={'password'} />
        </div>  
        <button type={'submit'}>注册</button>
    </form>

    
  );
}

export default RegisterScreen;
