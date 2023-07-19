import { renderHook } from '@testing-library/react-native'

import { useCity } from '@hooks/useCity'

describe('Context: cityContext', () => {
  it('should be change selected city',  () => {
    const { result } = renderHook(() => useCity())
    console.log(result.current.city)
  })
})