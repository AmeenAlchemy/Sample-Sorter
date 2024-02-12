export interface TestTubesColumn {
  id: "id" | "patientAge" | "company" | "cityDistrict" | "visionDefect"
  label: string
  minWidth?: number
  align?: "right"
  format?: (value: number) => string
}
