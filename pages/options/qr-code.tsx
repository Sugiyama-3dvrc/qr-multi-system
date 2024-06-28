import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function QRCode() {
  const [selectedTable, setSelectedTable] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const tables = [1, 2, 3, 4, 5]; // サンプルテーブル番号

  const handleGenerateQRCode = () => {
    if (selectedTable) {
      const url = `https://example.com/table/${selectedTable}`; // 例としてURLを生成
      setQrCodeUrl(url); // 実際にはQRコード生成ロジックが入ります
    }
  };

  const handlePrintQRCode = () => {
    // プリント機能の処理をここに記述
    console.log('Printing QR Code');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>QRコード生成</Typography>
        <FormControl fullWidth size="small" sx={{ mb: 4 }}>
          <InputLabel>テーブルを選択</InputLabel>
          <Select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
            {tables.map((table) => (
              <MenuItem key={table} value={table}>{`テーブル ${table}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleGenerateQRCode} sx={{ mb: 4 }}>QRコード生成</Button>
        {qrCodeUrl && (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="p" sx={{ mb: 2 }}>生成されたQRコード:</Typography>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeUrl)}&size=150x150`} alt="QR Code" />
            <Button variant="contained" color="secondary" onClick={handlePrintQRCode} sx={{ mt: 2 }}>プリント</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
