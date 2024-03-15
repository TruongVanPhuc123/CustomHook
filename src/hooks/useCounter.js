import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function useCounter(key, defaultValue = 0) {
    const [count, setCount] = useLocalStorage(key, defaultValue)
    const uncrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }


    return [count, increment, uncrement]
}