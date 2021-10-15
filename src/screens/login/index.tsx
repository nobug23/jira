import React, { FormEvent } from 'react';
const apiUrl = process.env.REACT_APP_API_URL;
function Login() {

  const login = (param:{userName:string,passWord:string})=>{
    fetch(`${apiUrl}/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(param)
    }).then(async (response) => {
      if (response.ok) {}
    });
  }
  // 提交
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()//阻止默认提交
    const userName=(event.currentTarget.elements[0] as HTMLInputElement).value
    const passWord=(event.currentTarget.elements[1] as HTMLInputElement).value
                                                 // as 代表的意思，给前面接口设置后面泛型
    // 调用login
    login({userName,passWord})
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={'username'}>用户名</label>
          <input type="text" id={'username'} />
        </div>  
        <div>
          <label htmlFor={'password'}>密码</label>
          <input type="text" id={'password'} />
        </div>  
        <button type={'submit'}>登录</button>
    </form>

    
  );
}

export default Login;