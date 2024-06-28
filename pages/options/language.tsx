import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function LanguageSettings() {
  const [language, setLanguage] = useState('ja');

  const handleLanguageChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 言語設定の保存処理をここに記述
    console.log(language);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>言語設定</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600, '& .MuiFormControl-root': { marginBottom: 2 } }}>
          <FormControl fullWidth size="small">
            <InputLabel>言語を選択</InputLabel>
            <Select value={language} onChange={handleLanguageChange}>
              <MenuItem value="ja">日本語</MenuItem>
              <MenuItem value="en">英語</MenuItem>
              <MenuItem value="zh">中国語</MenuItem>
              <MenuItem value="ko">韓国語</MenuItem>
              <MenuItem value="fr">フランス語</MenuItem>
              <MenuItem value="es">スペイン語</MenuItem>
              <MenuItem value="de">ドイツ語</MenuItem>
              <MenuItem value="it">イタリア語</MenuItem>
              <MenuItem value="ru">ロシア語</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" size="small" sx={{ alignSelf: 'start' }}>保存</Button>
        </Box>
      </Box>
    </Box>
  );
}
