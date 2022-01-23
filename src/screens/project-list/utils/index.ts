import {useEffect, useState} from 'react'

// 清理对象kongzhi 
export const cleanObject = (object: {[key: string]: unknown}) => {
    // 不能改变传入对象本身
    const result = {...object}
    Object.keys(object).forEach(key => {
        let value = object[key]
        if (!value) {
            delete result[key]
        }
    })
    return result
}

// export const debounce = (func, delay) => {
//     let timer
//     return function(...param) {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             func()
//         }, delay)
//     }
// }

export const useMount = (callback: () => void ) => {
    useEffect(() => {
        callback()
    // eslint-disable-next-line
    }, []);
}

export const useDebounce = <T>(value: T, delay?: number) => {
    const [newVal, setNewVal] = useState(value)
    useEffect(() => {
        let timer = setTimeout(() => {
            setNewVal(value)
        }, delay)
        return () => {
            clearTimeout(timer)
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, delay]);
    return newVal
}


// 返回的值绑定在模板上，需要是响应式的useState
/**
 * return {
        value: valueQueue,
        add,
        clear,
        removeIndex
    }
 */
export const useArray = <T>(initialParam: T[]) => {
    const [value, setVal] = useState(initialParam)
    return {
        value,
        add: (item: T) => {
            setVal([...value, item])
        },
        clear: () => {
            setVal([])
        },
        removeIndex: (n: number) => {
            let copy = [...value]
            copy.splice(n, 1)
            setVal([...copy])
        }
    }
}