import { Rack, TestTube } from "@app/types/common"

export const testTubesData: TestTube[] = [
  { id: "1", patientAge: 25, company: "ABC Inc.", cityDistrict: "Karachi", visionDefect: "Myopia" },
  { id: "2", patientAge: 30, company: "XYZ Corp.", cityDistrict: "Baku", visionDefect: "Hyperopia" },
  { id: "3", patientAge: 35, company: "SBX Inc.", cityDistrict: "Dubai", visionDefect: "opia" },
  { id: "4", patientAge: 40, company: "DEY Corp.", cityDistrict: "Newyork", visionDefect: "ropia" },
  { id: "5", patientAge: 45, company: "BET Inc.", cityDistrict: "Paris", visionDefect: "pia" },
]

export const racksData: Rack[] = [
  { id: 1, testTubes: [testTubesData[0], testTubesData[1]] },
  { id: 2, testTubes: [testTubesData[1]] },
  { id: 3, testTubes: [testTubesData[2]] },
  { id: 4, testTubes: [testTubesData[3]] },
  { id: 5, testTubes: [testTubesData[4]] },
]
