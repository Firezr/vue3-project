// 用来描述对象形状的 interface

interface ISchool {
  readonly name: string,
  age: number,
  address?: string
}

let school:ISchool = {
  name: 'a',
  age: 1,
  address: 'qe'
}
// school.name = '2'

// 接口可以扩展
interface IClass extends ISchool {
  type: string,
  [key:string]: any  // 任意类型
}
let myClass :IClass = {
  ...school,
  type: 'web',
  a: 1,
  b: '1'
}
// 类型断言 表示这个对象就是这样一个类型
let school2:ISchool = ({
  name: 'a',
  age: 1,
  address: 'qe',
  lessons: ['web', 'java']
}) as ISchool

