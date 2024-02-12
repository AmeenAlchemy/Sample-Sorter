import React, { FC, useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { Dialog, Stack, TextField, Button, Typography, IconButton } from "@mui/material"
import { useAppSelector, useAppDispatch } from "@app/store/hooks"
import { addTestTube } from "@app/store/slices/racks"
import { Icon } from "@iconify/react"
import { TestTube } from "@app/types/common"
import { TestTubeFormProps } from "../../types"

const TestTubeForm: FC<TestTubeFormProps> = ({ open, setOpen }) => {
  const dispatch = useAppDispatch()
  const racks = useAppSelector(state => state.racks.racks)
  const [patient, setPatient] = useState<TestTube>({
    id: nanoid(),
    patientAge: 0,
    company: "",
    cityDistrict: "",
    visionDefect: "",
  })

  const assignToRacks = () => {
    setOpen(false)
    let rackAssigned = false
    for (let index = 0; index < racks.length; index++) {
      const rack = racks[index]
      if (
        rack.testTubes.some(
          existingTube =>
            existingTube.patientAge === patient.patientAge ||
            existingTube.company === patient.company ||
            existingTube.cityDistrict === patient.cityDistrict ||
            existingTube.visionDefect === patient.visionDefect
        )
      ) {
        continue
      } else {
        dispatch(addTestTube({ patient, index }))
        rackAssigned = true
        break
      }
    }
    if (!rackAssigned) window.alert("Unable to assign test tube to a rack. This violates the legal requirements")
  }

  const handleSubmit = () => {
    assignToRacks()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setPatient({ ...patient, [name]: value })
  }

  return (
    <Dialog open={open} maxWidth='md' fullWidth data-testid='modal-add-testtube'>
      <Stack my={4} mx={3} gap={2}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>Add TestTube</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <Icon icon='bx:x' />
          </IconButton>
        </Stack>
        <TextField name='patientAge' type='number' label='Patient Age' onChange={handleChange} />
        <TextField name='company' label='Company' onChange={handleChange} />
        <TextField name='cityDistrict' label='City/District' onChange={handleChange} />
        <TextField name='visionDefect' label='Vision Defect' onChange={handleChange} />
        <Button variant='contained' onClick={handleSubmit}>
          Insert
        </Button>
      </Stack>
    </Dialog>
  )
}

export default TestTubeForm
