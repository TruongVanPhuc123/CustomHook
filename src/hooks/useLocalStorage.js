import React from 'react'

function useLocalStorage(key, defaultValue = '') {
    const [state, setState] = React.useState(
        () => {
            const value = window.localStorage.getItem(key) // giá trị value 
            if (value) {
                try {
                    return JSON.parse(value)
                } catch (error) {
                    window.localStorage.removeItem(key)
                }
            }
            else {
                return defaultValue;
            }
        }
    )

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state)) // giá trị kay
    }, [key, state])

    return [state, setState]
}

export default useLocalStorage