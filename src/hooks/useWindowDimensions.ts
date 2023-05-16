import { useState, useEffect } from 'react'

type TFuncDimension = () => { width: number; height: number }
type TDimension = { width: number; height: number }

export const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window

    return { width, height }
}

export const useWindowDimensions = (getWindowDimension: TFuncDimension) => {
    const [dimension, setDimension] = useState<TDimension>(getWindowDimension())

    useEffect(() => {
        const setWindowDimension = () => setDimension(getWindowDimension())

        window.addEventListener('resize', setWindowDimension)

        return () => window.removeEventListener('resize', setWindowDimension)
    }, [getWindowDimension])

    return dimension
}
