import { useEffect } from 'react';

const ComponentError = () => {
  useEffect(() => {
    throw new Error('This is a test error thrown by ComponentError.')
  }, [])

  return null
}

export default ComponentError;
