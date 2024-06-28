import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton } from '@mui/material';
import Sidebar from '@/components/sidebar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const cookOrders = [
  { no: 1, invoiceNumber: 'INV001', dishName: '寿司', status: '未調理', orderDate: '2024-06-20' },
  { no: 2, invoiceNumber: 'INV002', dishName: '天ぷら', status: '調理中', orderDate: '2024-06-19' },
  { no: 3, invoiceNumber: 'INV003', dishName: 'ラーメン', status: '調理済', orderDate: '2024-06-18' },
  { no: 4, invoiceNumber: 'INV004', dishName: 'うどん', status: '未調理', orderDate: '2024-06-17' },
  { no: 5, invoiceNumber: 'INV005', dishName: '焼肉', status: '調理中', orderDate: '2024-06-16' },
  { no: 6, invoiceNumber: 'INV006', dishName: 'お好み焼き', status: '調理済', orderDate: '2024-06-15' },
  { no: 7, invoiceNumber: 'INV007', dishName: '餃子', status: '未調理', orderDate: '2024-06-14' },
  { no: 8, invoiceNumber: 'INV008', dishName: '刺身', status: '調理中', orderDate: '2024-06-13' },
];

export default function CookList() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>料理リスト</Typography>
        <Box display="flex" gap={2} mb={4} alignItems="center" sx={{ '& .MuiTextField-root': { mt: 0 } }}>
          <TextField label="開始日" variant="outlined" size="small" />
          <TextField label="終了日" variant="outlined" size="small" />
          <Button variant="contained" color="primary" sx={{ height: '40px' }}>検索</Button>
          <Button variant="outlined" sx={{ height: '40px' }}>クリア</Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>No</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>インボイス番号</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>料理名</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>状態</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>注文日</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cookOrders.map((order) => (
                <TableRow key={order.no} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f3f3f3' } }}>
                  <TableCell sx={{ textAlign: 'center' }}>{order.no}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.invoiceNumber}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.dishName}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.status}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.orderDate}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <IconButton color="primary" size="small"><EditIcon /></IconButton>
                    <IconButton color="secondary" size="small"><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
