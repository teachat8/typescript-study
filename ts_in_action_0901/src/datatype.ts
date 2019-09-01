/**
 * 类型注解
 * 作用： 相当于强类型语言中的类型声明
 * 语法： （变量/函数）:type
 * 基本类型
 * boolean
 * number
 * string
 * Array 1.类型名称[]    2. Array<类型名称> 联合类型（|）是允许有多个类型
 * Tuple 元组（特殊的数组） 限定数组元素的类型和个数
 * function
 * object
 * symbol: 独一无二的值
 * void: 没有任何返回值的类型
 * any: 任意类型
 * undefined: 未定义
 * null: 没有值
 * never: 永远不存在的值 1.抛异常 2. 死循环
 */

// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123;

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '1']

// 元组
let tuple: [number, string] = [0, '1']
tuple.push(2)
console.log(tuple)
// tuple[2] 元组不能越界访问

// 函数
let add = (x: number, y: number): number => x + y
let computer: (x: number, y: number) => number
computer = (a, b) => a + b

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2)

// undefined, null是任何类型的子类型
let un: undefined = undefined
let nu: null = null
num = undefined

// void 没有任何返回值的函数
let noReturn = () => {}

// any 任意类型
let x
x = 1
x = []
x = () => {}

// never 永远没有返回值的类型
let error = () => {
	// 抛异常
	throw new Error('error')
}
let endless = () => {
	// 死循环
	while (true) {}
}
