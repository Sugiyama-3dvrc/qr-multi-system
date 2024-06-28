import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Collapse } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const menuItems = [
  { text: 'ホーム', icon: <HomeIcon />, link: '/home' },
  { text: '注文管理', icon: <RestaurantMenuIcon />, link: '/order-list' },
  { text: 'キッチン管理', icon: <DashboardIcon />, link: '/cook-list' },
  { text: '予約管理', icon: <BookIcon />, link: '/reservation-list' },
  { text: 'テイクアウト', icon: <TakeoutDiningIcon />, link: '/take-out' },
  { text: 'メニュー管理', icon: <MenuBookIcon />, subItems: [
    { text: 'メニュー表', link: '/menu/menu-list' },
    { text: 'メニュー追加', link: '/menu/menu-add' }
  ]},
  { text: 'レポート', icon: <BarChartIcon />, link: '/report' },
  { text: '設定', icon: <SettingsIcon />, subItems: [
    { text: '基本設定', link: '/options/system' },
    { text: '支払い設定', link: '/options/payment' },
    { text: 'テーブル設定', link: '/options/tables' },
    { text: '言語設定', link: '/options/language' },
    { text: 'プリンター設定', link: '/options/printer' },
    { text: 'QRコード設定', link: '/options/qr-code' },
    { text: 'WEBページ設定', link: '/options/web-creator' },
  ]},
];

export default function Sidebar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { pathname } = router;

  useEffect(() => {
    // サブメニューのパスが現在のパスに含まれる場合、そのサブメニューを開く
    menuItems.forEach(item => {
      if (item.subItems) {
        item.subItems.forEach(subItem => {
          if (pathname.includes(subItem.link)) {
            setOpenMenu(item.text);
          }
        });
      }
    });
  }, [pathname]);

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  const handleMenuClick = (item: any) => {
    if (item.subItems) {
      setOpenMenu(openMenu === item.text ? null : item.text);
    } else {
      handleNavigation(item.link);
    }
  };

  const isActive = (link?: string) => {
    return link ? pathname === link : false;
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f4f4f4',
          color: '#333',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          backgroundColor: '#fff',
          borderBottom: '1px solid #ddd',
        }}
      >
        <Image src={'/images/logo.webp'} alt="Logo" width={120} height={120} />
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={() => handleMenuClick(item)} sx={{ backgroundColor: isActive(item.link) ? '#d3d3d3' : 'transparent' }}>
              <ListItemIcon sx={{ color: '#1976d2' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={<Typography variant="body1">{item.text}</Typography>} />
              {item.subItems && (openMenu === item.text ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={openMenu === item.text} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem button key={subIndex} sx={{ pl: 4, backgroundColor: isActive(subItem.link) ? '#d3d3d3' : 'transparent' }} onClick={() => handleNavigation(subItem.link)}>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
