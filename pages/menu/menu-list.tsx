import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, TextField, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '@/components/sidebar';

const menus = [
  { no: 1, name: '寿司', category: '和食', price: '1500円', image: '/images/sushi.jpg', note: '新鮮な魚を使用', stock: '在庫あり', recommended: false },
  { no: 2, name: '天ぷら', category: '和食', price: '1200円', image: '/images/tempura.jpg', note: 'サクサクの衣', stock: '在庫あり', recommended: true },
  { no: 3, name: 'ラーメン', category: '中華', price: '900円', image: '/images/ramen.jpg', note: '特製スープ', stock: '在庫あり', recommended: false },
  { no: 4, name: 'ピザ', category: 'イタリアン', price: '1300円', image: '/images/pizza.jpg', note: 'チーズたっぷり', stock: '在庫切れ', recommended: true },
  { no: 5, name: 'カレー', category: 'インド料理', price: '800円', image: '/images/curry.jpg', note: 'スパイシー', stock: '在庫あり', recommended: false },
  { no: 6, name: 'サラダ', category: 'ヘルシー', price: '700円', image: '/images/salad.jpg', note: '新鮮野菜', stock: '在庫あり', recommended: true },
  { no: 7, name: 'ステーキ', category: '洋食', price: '2500円', image: '/images/steak.jpg', note: 'ジューシー', stock: '在庫あり', recommended: false },
  { no: 8, name: 'うどん', category: '和食', price: '600円', image: '/images/udon.jpg', note: '手打ち麺', stock: '在庫あり', recommended: true },
];

export default function MenuList() {
  const [menuData, setMenuData] = useState(menus);

  const handleCheckboxChange = (index: number) => {
    const newMenuData = [...menuData];
    newMenuData[index].recommended = !newMenuData[index].recommended;
    setMenuData(newMenuData);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>メニューリスト</Typography>
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
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>メニュー名</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>カテゴリ</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>値段</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>画像</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>備考</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>在庫</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>おすすめ</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menuData.map((menu, index) => (
                <TableRow key={menu.no} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f3f3f3' } }}>
                  <TableCell sx={{ textAlign: 'center' }}>{menu.no}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{menu.name}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{menu.category}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{menu.price}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <img src={menu.image} alt={menu.name} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{menu.note}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{menu.stock}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <Checkbox
                      checked={menu.recommended}
                      onChange={() => handleCheckboxChange(index)}
                      color="primary"
                    />
                  </TableCell>
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
