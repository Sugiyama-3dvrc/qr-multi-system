import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function PaymentSettings() {
  const [paymentMethods, setPaymentMethods] = useState({
    cash: false,
    creditCard: false,
    mobilePayment: false,
  });
  const [creditCardCompany, setCreditCardCompany] = useState('');
  const [mobilePaymentProvider, setMobilePaymentProvider] = useState('');
  const [cashDrawer, setCashDrawer] = useState('');

  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethods({
      ...paymentMethods,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 支払い設定の保存処理をここに記述
    console.log({ paymentMethods, creditCardCompany, mobilePaymentProvider, cashDrawer });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>支払い設定</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, '& .MuiTextField-root': { marginBottom: 2 }, '& .MuiFormControl-root': { marginBottom: 2 } }}>
          <FormControlLabel
            control={<Checkbox checked={paymentMethods.cash} onChange={handlePaymentMethodChange} name="cash" />}
            label="現金"
          />
          {paymentMethods.cash && (
            <Box sx={{ pl: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="釣り銭管理" value={cashDrawer} onChange={(e) => setCashDrawer(e.target.value)} fullWidth size="small" />
            </Box>
          )}
          <FormControlLabel
            control={<Checkbox checked={paymentMethods.creditCard} onChange={handlePaymentMethodChange} name="creditCard" />}
            label="クレジットカード"
          />
          {paymentMethods.creditCard && (
            <FormControl fullWidth size="small">
              <InputLabel>クレジットカード会社</InputLabel>
              <Select value={creditCardCompany} onChange={(e) => setCreditCardCompany(e.target.value)}>
                <MenuItem value="Visa">Visa</MenuItem>
                <MenuItem value="MasterCard">MasterCard</MenuItem>
                <MenuItem value="American Express">American Express</MenuItem>
                <MenuItem value="JCB">JCB</MenuItem>
              </Select>
            </FormControl>
          )}
          <FormControlLabel
            control={<Checkbox checked={paymentMethods.mobilePayment} onChange={handlePaymentMethodChange} name="mobilePayment" />}
            label="モバイル決済"
          />
          {paymentMethods.mobilePayment && (
            <TextField label="モバイル決済プロバイダー" value={mobilePaymentProvider} onChange={(e) => setMobilePaymentProvider(e.target.value)} fullWidth size="small" />
          )}
          <Button type="submit" variant="contained" color="primary" size="small" sx={{ alignSelf: 'start' }}>保存</Button>
        </Box>
      </Box>
    </Box>
  );
}
