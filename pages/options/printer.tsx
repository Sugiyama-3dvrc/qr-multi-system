import React, { useState } from 'react';
import { Box, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function PrinterSettings() {
  const [kitchenPrinter, setKitchenPrinter] = useState('');
  const [customerPrinter, setCustomerPrinter] = useState('');
  const [kitchenPrinterModel, setKitchenPrinterModel] = useState('');
  const [customerPrinterModel, setCustomerPrinterModel] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // プリンター設定の保存処理をここに記述
    console.log({
      kitchenPrinter,
      customerPrinter,
      kitchenPrinterModel,
      customerPrinterModel
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>プリンター設定</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, '& .MuiFormControl-root': { marginBottom: 2 } }}>
          <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>キッチン用プリンター</Typography>
          <FormControl fullWidth size="small">
            <InputLabel>プリンターのモデル</InputLabel>
            <Select value={kitchenPrinterModel} onChange={(e) => setKitchenPrinterModel(e.target.value)}>
              <MenuItem value="model1">モデル1</MenuItem>
              <MenuItem value="model2">モデル2</MenuItem>
              <MenuItem value="model3">モデル3</MenuItem>
            </Select>
          </FormControl>
          <TextField label="キッチン用プリンターのIPアドレス" value={kitchenPrinter} onChange={(e) => setKitchenPrinter(e.target.value)} required size="small" fullWidth />

          <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>お客様用プリンター</Typography>
          <FormControl fullWidth size="small">
            <InputLabel>プリンターのモデル</InputLabel>
            <Select value={customerPrinterModel} onChange={(e) => setCustomerPrinterModel(e.target.value)}>
              <MenuItem value="model1">モデル1</MenuItem>
              <MenuItem value="model2">モデル2</MenuItem>
              <MenuItem value="model3">モデル3</MenuItem>
            </Select>
          </FormControl>
          <TextField label="お客様用プリンターのIPアドレス" value={customerPrinter} onChange={(e) => setCustomerPrinter(e.target.value)} required size="small" fullWidth />
          
          <Button type="submit" variant="contained" color="primary" size="small" sx={{ alignSelf: 'start' }}>保存</Button>
        </Box>
      </Box>
    </Box>
  );
}
