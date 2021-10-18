import  { useState, useEffect } from "react";
// 判断数据是否为0--0为有效数据，返回true
export const isFalsy=(value:unknown)=>value ===0?false :!value
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:object) =>{
    const result ={...object}
    Object.keys(object).forEach(key=>{
      //@ts-ignore
        const value=result[key]
        if(isFalsy(value)){
           //@ts-ignore
            delete result[key]
        }
    })
    return result
}

// 组件挂载后调用
export const useMount=(callback:()=>void)=>{
    useEffect(() => {
      callback()
    }, [])
  }
  // 和去抖方法实现差不多
  export const useDebounce=<v>(value:v,delay?:number)=>{
    const [debounceValue,setDebounceValue]=useState(value)
    useEffect(() => {
      // 创建定时器
      const timeout=setTimeout(()=>setDebounceValue(value),delay)
      // 清除定时器
      return ()=>clearTimeout(timeout)
    }, [value,delay])
    return debounceValue
  }

  // 数组控制
  export const useArray =<T>(initialArray:T[])=>{
    const [value,setValue]=useState(initialArray)
    return {
      value,
      setValue,
      add:(item:T)=>setValue([...value,item]),//添加
      clear: ()=>setValue([]),//全部清除
      removeIndex:(index:number)=>{//根据下标删除
        const copy=[...value]
        copy.splice(index,1)
        setValue(copy)
      }
    }
  }
  // 类型别名、Utility Type 讲解
// 联合类型
let myFavoriteNumber: string | number;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;
// TS2322: Type '{}' is not assignable to type 'string | number'.
// myFavoriteNumber = {}
let jackFavoriteNumber: string | number;

// 类型别名在很多情况下可以和interface互换
// interface Person {
//   name: string
// }
// type Person = { name: string }
// const xiaoMing: Person = {name: 'xiaoming'}

// 类型别名, interface 在这种情况下没法替代type
type FavoriteNumber = string | number;
let roseFavoriteNumber: FavoriteNumber = "6";

// interface 也没法实现Utility type
type Person = {
  name: string;
  age: number;
};
const xiaoMing: Partial<Person> = {};
const shenMiRen: Omit<Person, "name" | "age"> = {};
type PersonKeys = keyof Person;
type PersonOnlyName = Pick<Person, "name" | "age">;
type Age = Exclude<PersonKeys, "name">;

// Partial 的实现
type Partial<T> = {
  [P in keyof T]?: T[P];
};
