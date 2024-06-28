import React, { useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function MenuAdd() {
  const [menuName, setMenuName] = useState('');
  const [category, setCategory] = useState('');
  const [menuImage, setMenuImage] = useState(null);
  const [price, setPrice] = useState('');
  const [note, setNote] = useState('');
  const [stock, setStock] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState(['和食', '洋食', '中華']);

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // メニュー追加の処理をここに記述
    console.log({ menuName, category, menuImage, price, note, stock });
  };

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setMenuImage(e.target.files[0]);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>メニュー追加</Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600 }}>
            <TextField label="メニュー名" value={menuName} onChange={(e) => setMenuName(e.target.value)} required />
            <FormControl required>
              <InputLabel>カテゴリ</InputLabel>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat, index) => (
                  <MenuItem key={index} value={cat}>{cat}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField label="新しいカテゴリ" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
              <Button variant="contained" color="primary" onClick={handleAddCategory} sx={{ ml: 2 }}>カテゴリ追加</Button>
            </Box>
            <Button variant="contained" component="label">
              メニュー画像
              <input type="file" hidden onChange={handleImageChange} required />
            </Button>
            <TextField label="値段" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <TextField label="備考" value={note} onChange={(e) => setNote(e.target.value)} />
            <TextField label="在庫" type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
            <Button type="submit" variant="contained" color="primary">メニュー追加</Button>
          </Box>
          <Box sx={{ width: 500, height: 500, border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" color="textSecondary">ここに画像のプレビューが表示されます</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
