import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button, FormControlLabel, Switch } from '@mui/material';
import Sidebar from '@/components/sidebar'; // サイドバーのコンポーネントのパスを適宜変更してください

export default function WebPageCreator() {
  const [topImage, setTopImage] = useState<string | null>(null);
  const [isSlideEnabled, setIsSlideEnabled] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<string[]>([]);
  const [storeIntroduction, setStoreIntroduction] = useState<string>('');
  const [storePhotos, setStorePhotos] = useState<string[]>([]);
  const [storeName, setStoreName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [logo, setLogo] = useState<string | null>(null);
  const [openingTime, setOpeningTime] = useState<string>('');
  const [closingTime, setClosingTime] = useState<string>('');
  const [holiday, setHoliday] = useState<string>('');
  const [invoiceNumber, setInvoiceNumber] = useState<string>('');
  const [parkingInfo, setParkingInfo] = useState<string>('');
  const [additionalFields, setAdditionalFields] = useState<{ key: string; value: string }[]>([{ key: '', value: '' }]);

  const handleAddAdditionalField = () => {
    setAdditionalFields([...additionalFields, { key: '', value: '' }]);
  };

  const handleAdditionalFieldChange = (index: number, fieldKey: string, value: string) => {
    const newFields = additionalFields.map((field, i) => {
      if (i === index) {
        return { ...field, [fieldKey]: value };
      }
      return field;
    });
    setAdditionalFields(newFields);
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>> | React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      if (Array.isArray(setImage)) {
        (setImage as React.Dispatch<React.SetStateAction<string[]>>)((prev) => [...prev, fileUrl]);
      } else {
        (setImage as React.Dispatch<React.SetStateAction<string | null>>)(fileUrl);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Webページの保存処理をここに記述
    console.log({
      topImage,
      isSlideEnabled,
      menuList,
      storeIntroduction,
      storePhotos,
      storeName,
      address,
      email,
      phone,
      logo,
      openingTime,
      closingTime,
      holiday,
      invoiceNumber,
      parkingInfo,
      additionalFields
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>簡易Webページ作成</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', '& .MuiFormControl-root': { marginBottom: 2 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>トップ画像</Typography>
              <Button variant="contained" component="label" size="small">
                画像を選択
                <input type="file" hidden onChange={(e) => handleImageChange(e, setTopImage)} />
              </Button>
              {topImage && <img src={topImage} alt="Top" style={{ width: '100%', marginTop: '10px' }} />}
              <FormControlLabel
                control={<Switch checked={isSlideEnabled} onChange={(e) => setIsSlideEnabled(e.target.checked)} />}
                label="スライド機能を有効にする"
              />
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>メニュー一覧</Typography>
              {/* メニュー一覧の入力フィールド（必要に応じて実装） */}
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>店舗紹介</Typography>
              <TextField multiline rows={4} value={storeIntroduction} onChange={(e) => setStoreIntroduction(e.target.value)} fullWidth size="small" />
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>店舗写真</Typography>
              <Button variant="contained" component="label" size="small">
                画像を選択
                <input type="file" hidden multiple onChange={(e) => handleImageChange(e, setStorePhotos)} />
              </Button>
              {storePhotos.length > 0 && storePhotos.map((photo, index) => (
                <img key={index} src={photo} alt={`Store Photo ${index}`} style={{ width: '100%', marginTop: '10px' }} />
              ))}
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>店舗名</Typography>
              <TextField value={storeName} onChange={(e) => setStoreName(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>住所</Typography>
              <TextField value={address} onChange={(e) => setAddress(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>メールアドレス</Typography>
              <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>電話番号</Typography>
              <TextField value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>LOGO</Typography>
              <Button variant="contained" component="label" size="small">
                画像を選択
                <input type="file" hidden onChange={(e) => handleImageChange(e, setLogo)} />
              </Button>
              {logo && <img src={logo} alt="Logo" style={{ width: '100%', marginTop: '10px' }} />}
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>開店時間</Typography>
              <TextField type="time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>閉店時間</Typography>
              <TextField type="time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>定休日</Typography>
              <TextField value={holiday} onChange={(e) => setHoliday(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>インボイス番号</Typography>
              <TextField value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>駐車場情報</Typography>
              <TextField value={parkingInfo} onChange={(e) => setParkingInfo(e.target.value)} fullWidth size="small" />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="secondary" mb={2}>その他</Typography>
              {additionalFields.map((field, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    label="項目名"
                    value={field.key}
                    onChange={(e) => handleAdditionalFieldChange(index, 'key', e.target.value)}
                    fullWidth size="small"
                  />
                  <TextField
                    label="内容"
                    value={field.value}
                    onChange={(e) => handleAdditionalFieldChange(index, 'value', e.target.value)}
                    fullWidth size="small"
                  />
                </Box>
              ))}
              <Button variant="outlined" size="small" onClick={handleAddAdditionalField}>項目を追加</Button>
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" size="small" sx={{ mt: 4 }}>保存</Button>
        </Box>
      </Box>
    </Box>
  );
}
