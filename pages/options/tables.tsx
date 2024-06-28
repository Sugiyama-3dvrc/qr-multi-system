import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableSettings() {
  const [tableNumber, setTableNumber] = useState('');
  const [seats, setSeats] = useState('');
  const [status, setStatus] = useState('空席');
  const [tables, setTables] = useState([
    { number: 1, seats: 4, status: '使用中' },
    { number: 2, seats: 2, status: '空席' },
    { number: 3, seats: 6, status: '予約' },
  ]);

  const handleAddTable = () => {
    const newTable = { number: parseInt(tableNumber), seats: parseInt(seats), status: status };
    if (!tables.some(table => table.number === newTable.number)) {
      setTables([...tables, newTable]);
      setTableNumber('');
      setSeats('');
      setStatus('空席');
    } else {
      alert('同じテーブル番号が既に存在します。');
    }
  };

  const handleDeleteTable = (tableNumber: number) => {
    setTables(tables.filter(table => table.number !== tableNumber));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // テーブル設定の保存処理をここに記述
    console.log(tables);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>テーブル設定</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, '& .MuiTextField-root': { marginBottom: 2 } }}>
          <TextField label="テーブル番号" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} required size="small" fullWidth type="number" />
          <TextField label="席数" value={seats} onChange={(e) => setSeats(e.target.value)} required size="small" fullWidth type="number" />
          <FormControl fullWidth size="small">
            <InputLabel>状態</InputLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="使用中">使用中</MenuItem>
              <MenuItem value="空席">空席</MenuItem>
              <MenuItem value="予約">予約</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" size="small" startIcon={<AddIcon />} onClick={handleAddTable} sx={{ alignSelf: 'start' }}>追加</Button>
        </Box>
        <TableContainer component={Paper} sx={{ mt: 4, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>テーブル番号</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>席数</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>状態</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map((table) => (
                <TableRow key={table.number} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f3f3f3' } }}>
                  <TableCell sx={{ textAlign: 'center' }}>{table.number}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{table.seats}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{table.status}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <IconButton color="secondary" size="small" onClick={() => handleDeleteTable(table.number)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button type="submit" variant="contained" color="primary" size="small" sx={{ mt: 4, alignSelf: 'start' }}>保存</Button>
      </Box>
    </Box>
  );
}
