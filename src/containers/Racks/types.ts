export interface RacksColumn {
  id: "id" | "tubes"
  label: string
  minWidth?: number
  align?: "right"
  format?: (value: number) => string
}

export interface RacksData {
  id: number
  tubes: number
}

export interface TestTubeFormProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
