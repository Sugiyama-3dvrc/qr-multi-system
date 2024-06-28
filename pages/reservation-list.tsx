import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '@/components/sidebar';

const reservations = [
  { no: 1, customerName: '田中 太郎', tableNumber: 5, numberOfPeople: 3, reservationTime: '18:00', registrationDate: '2024-06-20', status: '未' },
  { no: 2, customerName: '山田 次郎', tableNumber: 3, numberOfPeople: 2, reservationTime: '19:00', registrationDate: '2024-06-19', status: '完' },
  { no: 3, customerName: '佐々木 三郎', tableNumber: 7, numberOfPeople: 4, reservationTime: '20:00', registrationDate: '2024-06-18', status: '未' },
  { no: 4, customerName: '斉藤 四郎', tableNumber: 2, numberOfPeople: 1, reservationTime: '17:00', registrationDate: '2024-06-17', status: '完' },
  { no: 5, customerName: '鈴木 五郎', tableNumber: 4, numberOfPeople: 5, reservationTime: '21:00', registrationDate: '2024-06-16', status: '未' },
  { no: 6, customerName: '山本 六郎', tableNumber: 6, numberOfPeople: 2, reservationTime: '22:00', registrationDate: '2024-06-15', status: '完' },
  { no: 7, customerName: '加藤 七郎', tableNumber: 1, numberOfPeople: 3, reservationTime: '18:30', registrationDate: '2024-06-14', status: '未' },
  { no: 8, customerName: '中島 八郎', tableNumber: 8, numberOfPeople: 4, reservationTime: '19:30', registrationDate: '2024-06-13', status: '完' },
];

export default function ReservationList() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>予約リスト</Typography>
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
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>顧客名</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>テーブル番号</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>人数</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>予約時間</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>登録日</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>状態</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.no} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f3f3f3' } }}>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.no}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.customerName}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.tableNumber}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.numberOfPeople}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.reservationTime}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.registrationDate}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{reservation.status}</TableCell>
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
