import React, { useEffect, useState } from "react"
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
} from "@mui/material"
import { useParams } from "react-router-dom"
import { Topbar } from "@app/components"
import { useAppSelector } from "@app/store/hooks"
import { TestTube } from "@app/types/common"
import { TestTubesColumn } from "./types"

const columns: readonly TestTubesColumn[] = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "patientAge", label: "Patient Age", minWidth: 100 },
  { id: "company", label: "Company", minWidth: 100 },
  { id: "cityDistrict", label: "City/District", minWidth: 100 },
  { id: "visionDefect", label: "Vision Defect", minWidth: 100 },
]

const TestTubes = () => {
  const racksData = useAppSelector(state => state.racks.racks)
  const { rackId } = useParams()
  const [rowsData, setRowsData] = useState<TestTube[]>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    if (rackId) {
      const isRackExist = racksData?.find(rack => rack.id === Number(rackId))
      if (isRackExist) setRowsData(isRackExist?.testTubes)
    }
  }, [rackId, racksData])

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
      <Grid mt={4} mx={4}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography id='page-title' sx={{ fontSize: "2rem", fontWeight: 600 }}>
            {`TestTubes (Rack : ${rackId})`}
          </Typography>
        </Stack>
        <Paper sx={{ width: "100%", overflow: "hidden", mt: 4 }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='sticky table' data-testid='TestTubes-table'>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {rackId && (
                <TableBody>
                  {rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: TestTube) => {
                    return (
                      <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.patientAge}</TableCell>
                        <TableCell>{row.company}</TableCell>
                        <TableCell>{row.cityDistrict}</TableCell>
                        <TableCell>{row.visionDefect}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={racksData[Number(rackId)]?.testTubes?.length}
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
export default TestTubes
