import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from '@/components/sidebar';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

// ダミーデータ
const todaysOrders = 25;
const todaysSales = 5000;
const todaysCustomers = 120;
const todaysTakeouts = 15;
const todaysReservations = 10;
const totalOrders = todaysOrders + todaysTakeouts + todaysReservations;

const recentOrders = [
  { id: 1, order: 'Order 1', amount: 1000, date: '2024-06-20' },
  { id: 2, order: 'Order 2', amount: 2000, date: '2024-06-19' },
  { id: 3, order: 'Order 3', amount: 1500, date: '2024-06-18' },
  { id: 4, order: 'Order 4', amount: 2500, date: '2024-06-17' },
  { id: 5, order: 'Order 5', amount: 3000, date: '2024-06-16' },
];

const recentReservations = [
  { id: 1, customerName: '田中 太郎', tableNumber: 5, numberOfPeople: 3, time: '18:00', date: '2024-06-20' },
  { id: 2, customerName: '山田 次郎', tableNumber: 3, numberOfPeople: 2, time: '19:00', date: '2024-06-19' },
  { id: 3, customerName: '佐藤 三郎', tableNumber: 4, numberOfPeople: 4, time: '20:00', date: '2024-06-18' },
  { id: 4, customerName: '鈴木 四郎', tableNumber: 2, numberOfPeople: 1, time: '21:00', date: '2024-06-17' },
  { id: 5, customerName: '高橋 五郎', tableNumber: 6, numberOfPeople: 2, time: '18:30', date: '2024-06-16' },
];

const recentTakeouts = [
  { id: 1, order: 'Takeout 1', amount: 1200, date: '2024-06-20' },
  { id: 2, order: 'Takeout 2', amount: 2200, date: '2024-06-19' },
  { id: 3, order: 'Takeout 3', amount: 1700, date: '2024-06-18' },
  { id: 4, order: 'Takeout 4', amount: 2600, date: '2024-06-17' },
  { id: 5, order: 'Takeout 5', amount: 3100, date: '2024-06-16' },
];

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
  { name: 'テイクアウト数', value: todaysTakeouts },
  { name: '総注文数', value: totalOrders - todaysTakeouts },
];

const COLORS = ['#FF8042', '#0088FE'];

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="container mx-auto p-4">
          <div className="flex items-center mb-6">
            <h1 className="text-4xl font-bold text-blue-700">Home</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-700 text-center text-white">
              <h2 className="text-lg font-semibold mb-2">本日の注文数</h2>
              <p className="text-4xl font-bold">{todaysOrders}</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-700 text-center text-white">
              <h2 className="text-lg font-semibold mb-2">本日の売り上げ</h2>
              <p className="text-4xl font-bold">{todaysSales} 円</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-yellow-500 to-yellow-700 text-center text-white">
              <h2 className="text-lg font-semibold mb-2">本日の客数</h2>
              <p className="text-4xl font-bold">{todaysCustomers}</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-red-500 to-red-700 text-center text-white">
              <h2 className="text-lg font-semibold mb-2">本日のテイクアウト数</h2>
              <p className="text-4xl font-bold">{todaysTakeouts}</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-purple-700 text-center text-white">
              <h2 className="text-lg font-semibold mb-2">本日の予約数</h2>
              <p className="text-4xl font-bold">{todaysReservations}</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-500 to-gray-700 text-center text-white">
              <h2 className="text-lg font-semibold mb-2">総注文数</h2>
              <p className="text-4xl font-bold">{totalOrders}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">オーダー一覧</h2>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>注文名</TableCell>
                      <TableCell>金額</TableCell>
                      <TableCell>注文日</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentOrders.slice(0, 5).map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.order}</TableCell>
                        <TableCell>{order.amount} 円</TableCell>
                        <TableCell>{order.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">予約一覧</h2>
              <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>顧客名</TableCell>
                      <TableCell>テーブル番号</TableCell>
                      <TableCell>人数</TableCell>
                      <TableCell>時間</TableCell>
                      <TableCell>日付</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentReservations.slice(0, 5).map((reservation) => (
                      <TableRow key={reservation.id}>
                        <TableCell>{reservation.id}</TableCell>
                        <TableCell>{reservation.customerName}</TableCell>
                        <TableCell>{reservation.tableNumber}</TableCell>
                        <TableCell>{reservation.numberOfPeople}</TableCell>
                        <TableCell>{reservation.time}</TableCell>
                        <TableCell>{reservation.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">テイクアウト一覧</h2>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>注文名</TableCell>
                      <TableCell>金額</TableCell>
                      <TableCell>注文日</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentTakeouts.slice(0, 5).map((takeout) => (
                      <TableRow key={takeout.id}>
                        <TableCell>{takeout.id}</TableCell>
                        <TableCell>{takeout.order}</TableCell>
                        <TableCell>{takeout.amount} 円</TableCell>
                        <TableCell>{takeout.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">売上グラフ</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">注文数グラフ</h2>
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
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">客数グラフ</h2>
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
            </div>
            <div className="p-4 border rounded-lg shadow-md bg-white">
              <h2 className="text-lg font-semibold mb-4">テイクアウト数と総注文数の円グラフ</h2>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={140}
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
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
