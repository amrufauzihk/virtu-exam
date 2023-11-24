"use client"
import React, { useState } from 'react';
import {
  Avatar,
  Grid,
  List,
  ListItem,
  Typography,
  Pagination,
  InputAdornment,
  TextField,
} from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { ExamCardProps, dummyExamData } from '../components/exampage/dummy-data';
import { DetailExam } from '../components/exampage/interface';
import ExamCard from '../components/exampage/ExamCard';
import { IconSearch } from '@tabler/icons-react';

const ITEMS_PER_PAGE = 5;

const ExamPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fungsi untuk melakukan pencarian berdasarkan judul ujian
  const filteredExams = dummyExamData.filter((exam: ExamCardProps) =>
    exam.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung jumlah halaman berdasarkan jumlah ujian dan item per halaman
  const totalPages = Math.ceil(filteredExams.length / ITEMS_PER_PAGE);

  // Ambil hanya ujian untuk halaman saat ini
  const currentExams = filteredExams.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Fungsi untuk mengubah halaman saat tombol paginasi diklik
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <PageContainer title="Exam" description="Exam Page">
      <DashboardCard title="Exam Page">
        <>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              Silahkan Mengerjakan Ujian, Jangan lupa baca doa. Utamakan Kejujuran!. Selamat Bekerja
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Search"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar>
                        <IconSearch />
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <List>
            { currentExams.map((data) => (
              <ListItem key={`list-exam-data-${data.id}`}>
                <ExamCard {...data} />
              </ListItem>
            ))}
          </List>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
          />
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default ExamPage;
