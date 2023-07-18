import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe("API: getCityByNameService", () => {
  it('should return city details', async () => {
    

    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

    const response = await getCityByNameService('São Paulo')

    expect(response.length).toBeGreaterThan(0)
  })
})