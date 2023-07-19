import { act, renderHook, waitFor } from '@testing-library/react-native'

import { useCity } from '@hooks/useCity'
import { CityProvider } from '@contexts/CityContext'

describe('Context: cityContext', () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

    await waitFor(() => act(() => console.log(result.current))) 
  })
})