import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const SectionTable = ({section}) => {
    return (
        <>

     <Table>
        <TableHead>
          <TableRow>
            <TableCell>Section Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {section.map((section, index) => (
            <TableRow key={index}>
              <TableCell>{section.sectionName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        </>
    )
}

export default SectionTable
