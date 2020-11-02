// 泛型  用来在代码执行时传入的类型 来确定结果

function createArr<T>(len: number, val: T): T[] {
  let result = []
  for (let i = 0; i < len; i++) {
    result.push(val)
  }
  return result
}

let arr = createArr(2, 'aa')
console.log(arr)

// 多个泛型 元组的交换 [string, number] = [number, string]

const swap = <T, K>(tuple: [T, K]): [K, T] => [tuple[1], tuple[0]]
swap<string, number>(['1', 1])
console.log(swap<string, number>(['1', 1]));
