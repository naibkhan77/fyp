import { Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";

const ViewTimetable = ({ timetableData }) => {
  const cellStyle = {
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis', 
  }; 
  return (
    <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}> {/* Prevent overflow with maxWidth */}
      <Table sx={{ minWidth: 800 }}> {/* Set a minimum width for better layout */}
        <TableHead>
          <TableRow>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Allocation ID</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Program Name</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Department Name</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>CurrentSemester</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Session</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Teacher Name</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Section Name</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Room Number</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Course Name</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Time</TableCell>
            <TableCell style={cellStyle} sx={{ fontWeight: 'bold' }}>Day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timetableData && timetableData.length > 0 ? (
            timetableData.map((Timetable, index) => (
              <TableRow key={index}>
                <TableCell style={cellStyle}>{Timetable.alo_id}</TableCell>
                <TableCell style={cellStyle}>{Timetable.program_name}</TableCell>
                <TableCell style={cellStyle}>{Timetable.department_name}</TableCell>
                <TableCell style={cellStyle}>{`${Timetable.springFall} ${Timetable.year}`}</TableCell>
                <TableCell style={cellStyle}>{`${Timetable.session_name} ${Timetable.batch}`}</TableCell>
                <TableCell style={cellStyle}>{Timetable.teacher_name} </TableCell>
                <TableCell style={cellStyle}>{Timetable.section_name}</TableCell>
                <TableCell style={cellStyle}>{Timetable.room_number}</TableCell>
                <TableCell style={cellStyle}>{Timetable.course_name}</TableCell>
                <TableCell style={cellStyle}>{Timetable.time}</TableCell>
                <TableCell style={cellStyle}>{Timetable.day}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={13} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ViewTimetable;
  