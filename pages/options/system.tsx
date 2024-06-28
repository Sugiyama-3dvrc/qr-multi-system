import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function System() {
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [logo, setLogo] = useState(null);
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [holiday, setHoliday] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');

  const handleLogoChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 設定保存の処理をここに記述
    console.log({ storeName, address, email, phone, logo, openTime, closeTime, holiday, taxRate, invoiceNumber });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>システム設定</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, '& .MuiTextField-root': { marginBottom: 2 }, '& .MuiFormControl-root': { marginBottom: 2 } }}>
          <TextField label="店舗名" value={storeName} onChange={(e) => setStoreName(e.target.value)} required size="small" fullWidth />
          <TextField label="住所" value={address} onChange={(e) => setAddress(e.target.value)} required size="small" fullWidth />
          <TextField label="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required size="small" fullWidth />
          <TextField label="電話番号" value={phone} onChange={(e) => setPhone(e.target.value)} required size="small" fullWidth />
          <Button variant="contained" component="label" size="small" sx={{ alignSelf: 'start' }}>
            LOGO
            <input type="file" hidden onChange={handleLogoChange} required />
          </Button>
          <TextField label="開店時間" type="time" value={openTime} onChange={(e) => setOpenTime(e.target.value)} required size="small" fullWidth />
          <TextField label="閉店時間" type="time" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} required size="small" fullWidth />
          <FormControl required size="small" fullWidth>
            <InputLabel>定休日</InputLabel>
            <Select value={holiday} onChange={(e) => setHoliday(e.target.value)}>
              <MenuItem value="日曜日">日曜日</MenuItem>
              <MenuItem value="月曜日">月曜日</MenuItem>
              <MenuItem value="火曜日">火曜日</MenuItem>
              <MenuItem value="水曜日">水曜日</MenuItem>
              <MenuItem value="木曜日">木曜日</MenuItem>
              <MenuItem value="金曜日">金曜日</MenuItem>
              <MenuItem value="土曜日">土曜日</MenuItem>
            </Select>
          </FormControl>
          <TextField label="税率" type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} required size="small" fullWidth />
          <TextField label="インボイス番号" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} required size="small" fullWidth />
          <Button type="submit" variant="contained" color="primary" size="small" sx={{ alignSelf: 'start' }}>保存</Button>
        </Box>
      </Box>
    </Box>
  );
}
