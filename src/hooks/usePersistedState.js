import { useEffect, useState } from 'react'

export default function usePersistedState(initalState, key) {
  const [state, setState] = useState(initalState)
  
  useEffect(() => {
    const previousState = localStorage.getItem(key)
    if (Boolean(previousState)) {
      setState(JSON.parse(previousState))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]

}