import { renderHook } from '@testing-library/react-native'

import { useCity } from '@hooks/useCity'
import { CityProvider } from '@contexts/CityContext'

describe('Context: cityContext', () => {
  it('should be change selected city',  () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    console.log(result.current)
  })
})