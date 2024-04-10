import  {useState, useEffect} from 'react';

const useDebounce = (value, time) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedValue(value);
        }, time);
        
        return () => {
            clearTimeout(timerID)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouncedValue;
}

export default useDebounce;
