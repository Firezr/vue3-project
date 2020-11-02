// npm i typescript ts-node -g
// code runner

// ts中冒号后面的都是类型
const str: string = 'hello'
const num: number = 123
const boolean: boolean = false

// 联合类型
let age:string | number = 1
age = '11'

// 数组 对象 函数
const arr: number[] = [1,2,3]
arr.push(1)

// 元组
const tuple: [string, number] = ['aa', 1]
console.log(tuple)

let m: null = null
let n: undefined = undefined

// 枚举
// enum USER_ROLE {
//   USER,
//   MANAGER,
//   ADMIN
// }
enum USER_ROLE {
  USER = 'user',
  MANAGER = 'manager',
  ADMIN = 'admin'
}
console.log(USER_ROLE.USER, USER_ROLE.MANAGER)

// any
const array: any = [{}, 'sa', 12]

// object类型 非原始数据类型
// Object.create(arr)
const create = (obj:object)=>{}
create({})
create([])
create(function(){})

// 对象类型 {}