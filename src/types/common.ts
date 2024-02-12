export interface TestTube {
  id: string
  patientAge: number
  company: string
  cityDistrict: string
  visionDefect: string
}

export interface Rack {
  id: number
  testTubes: TestTube[]
}
