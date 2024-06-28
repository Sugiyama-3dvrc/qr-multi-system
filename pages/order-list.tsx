import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton } from '@mui/material';
import Sidebar from '@/components/sidebar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const orders = [
  { no: 1, invoiceNumber: 'INV001', customerName: '田中 太郎', staffName: '佐藤 花子', tableNumber: 5, status: '未会計', orderDate: '2024-06-20', amount: '5000円' },
  { no: 2, invoiceNumber: 'INV002', customerName: '山田 次郎', staffName: '鈴木 一郎', tableNumber: 3, status: '会計済', orderDate: '2024-06-19', amount: '3500円' },
  { no: 3, invoiceNumber: 'INV003', customerName: '佐々木 三郎', staffName: '高橋 愛', tableNumber: 7, status: '未会計', orderDate: '2024-06-18', amount: '4000円' },
  { no: 4, invoiceNumber: 'INV004', customerName: '斉藤 四郎', staffName: '中村 優子', tableNumber: 2, status: '会計済', orderDate: '2024-06-17', amount: '6000円' },
  { no: 5, invoiceNumber: 'INV005', customerName: '鈴木 五郎', staffName: '伊藤 佳奈', tableNumber: 4, status: '未会計', orderDate: '2024-06-16', amount: '5500円' },
  { no: 6, invoiceNumber: 'INV006', customerName: '山本 六郎', staffName: '渡辺 亮子', tableNumber: 6, status: '会計済', orderDate: '2024-06-15', amount: '4500円' },
  { no: 7, invoiceNumber: 'INV007', customerName: '加藤 七郎', staffName: '小林 和子', tableNumber: 1, status: '未会計', orderDate: '2024-06-14', amount: '5000円' },
  { no: 8, invoiceNumber: 'INV008', customerName: '中島 八郎', staffName: '森田 美咲', tableNumber: 8, status: '会計済', orderDate: '2024-06-13', amount: '3700円' },
];

export default function OrderList() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>注文リスト</Typography>
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
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>顧客名</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>担当者名</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>テーブル番号</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>状態</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>注文日</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>金額</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.no} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f3f3f3' } }}>
                  <TableCell sx={{ textAlign: 'center' }}>{order.no}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.invoiceNumber}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.customerName}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.staffName}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.tableNumber}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.status}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.orderDate}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{order.amount}</TableCell>
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
