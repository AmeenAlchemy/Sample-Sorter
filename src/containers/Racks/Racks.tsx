import React, { useState } from "react"
import {
  Grid,
  Stack,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "@app/store/hooks"
import { Topbar } from "@app/components"
import { urls } from "@app/routes/urls"
import TestTubeForm from "./components/TestTubeForm"

import { RacksColumn } from "./types"

const columns: readonly RacksColumn[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "tubes", label: "Number of TestTubes", minWidth: 100 },
]

const Racks = () => {
  const navigate = useNavigate()
  const racksData = useAppSelector(state => state.racks.racks)
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Grid>
      <Topbar />
      <TestTubeForm open={open} setOpen={setOpen} />
      <Grid mt={4} mx={4}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography id='page-title' sx={{ fontSize: "2rem", fontWeight: 600 }}>
            Racks
          </Typography>
          <Button variant='contained' onClick={() => setOpen(true)} data-testid='add-testtube'>
            Add TestTube
          </Button>
        </Stack>
        <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='sticky table' data-testid='racks-table'>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {racksData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.testTubes?.length}</TableCell>
                      <TableCell>
                        <Button onClick={() => navigate(urls.racks.testTubes(row.id))}>View</Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={racksData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Racks
