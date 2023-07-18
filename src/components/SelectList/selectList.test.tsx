import { render, screen, fireEvent } from "@testing-library/react-native"

import { SelectList } from '@components/SelectList'

describe("Component: SelectList", () =>{
  it('should be return city details selected', async() => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Campo grande', latitude: 123, longitude: 456 }
    ]

    render(
      <SelectList 
        data={data}
        onChange={() =>{}}
        onPress={() => {}}
      />
    )

    const selectedCity = screen.getByText(/campo/i)
    fireEvent.press(selectedCity)
  })
})