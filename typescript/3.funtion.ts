// 函数主要关心参数和返回值
function sum1(a: string, b: string): string {
  return a + b
}
sum1('1', '2')

// 可以通过表达式来定义
type Sum = ((a: number, b: number) => number) | string
// interface Sum {
//   (a: number, b:number) : number
// }
// 区别：
// interface：可以继承 可以用来被类实现
// type：仅仅是一个别名 一般在定义联合类型 定义临时变量时可以使用
let sum2: Sum = (a: number, b: number): number => a + b
sum2 = '1'