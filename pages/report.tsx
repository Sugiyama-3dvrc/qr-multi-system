import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import Sidebar from '@/components/sidebar';

// グラフ用ダミーデータ
const salesData = [
  { name: '月曜日', sales: 4000 },
  { name: '火曜日', sales: 3000 },
  { name: '水曜日', sales: 2000 },
  { name: '木曜日', sales: 2780 },
  { name: '金曜日', sales: 1890 },
  { name: '土曜日', sales: 2390 },
  { name: '日曜日', sales: 3490 },
];

const orderData = [
  { name: '月曜日', orders: 24 },
  { name: '火曜日', orders: 18 },
  { name: '水曜日', orders: 22 },
  { name: '木曜日', orders: 20 },
  { name: '金曜日', orders: 27 },
  { name: '土曜日', orders: 30 },
  { name: '日曜日', orders: 35 },
];

const customerData = [
  { name: '月曜日', customers: 120 },
  { name: '火曜日', customers: 110 },
  { name: '水曜日', customers: 150 },
  { name: '木曜日', customers: 130 },
  { name: '金曜日', customers: 170 },
  { name: '土曜日', customers: 200 },
  { name: '日曜日', customers: 220 },
];

// 円グラフ用データ
const pieData = [
  { name: 'テイクアウト', value: 4000 },
  { name: '店内飲食', value: 12000 },
];

const COLORS = ['#FF8042', '#0088FE'];

export default function Report() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" color="primary" mb={4}>レポート</Typography>
        <Sidebar />
        
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            売上の棒グラフ
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            注文数の棒グラフ
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            客数の棒グラフ
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="customers" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            売上の割合
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Container>
  );
}
