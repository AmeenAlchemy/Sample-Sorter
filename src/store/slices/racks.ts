import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TestTube, Rack } from "@app/types/common"
import { racksData, testTubesData } from "@app/mock/data/racks"

interface RackState {
  testTubes: TestTube[]
  racks: Rack[]
}

interface AddTestTubePayload {
  patient: TestTube
  index: number
}

const initialState: RackState = {
  testTubes: [...testTubesData],
  racks: [...racksData],
}

export const RackSlice = createSlice({
  name: "racks",
  initialState,
  reducers: {
    addTestTube: (state, action: PayloadAction<AddTestTubePayload>) => {
      state.testTubes.push(action.payload.patient)
      state.racks[action.payload.index].testTubes.push(action.payload.patient)
    },
  },
})

export const { addTestTube } = RackSlice.actions

export default RackSlice.reducer
