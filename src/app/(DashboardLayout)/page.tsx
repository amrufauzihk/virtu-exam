'use client'
import { useEffect, useState } from 'react';
import { Grid, Box, Typography, List, ListItem, Pagination } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from './components/shared/DashboardCard';
import { ExamCardProps, dummyExamData } from './components/exampage/dummy-data';
import { DetailExam } from './components/exampage/interface';
import ExamCard from './components/exampage/ExamCard';
import Link from 'next/link';
import { IconSearch } from '@tabler/icons-react';
import AuthService from '@/utils/AuthServices';
import { useRouter } from 'next/navigation';

const dummyData = [
  { title: 'Ujian Terakhir', content: 'Matematika - 90%' },
  { title: 'Jadwal Ujian', content: 'Senin, 28 November 2023' },
  { title: 'Rata-rata Nilai', content: '85%' },
];

const ITEMS_PER_PAGE = 3;

const Dashboard:React.FC = () => {

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredExams = dummyExamData.filter((exam: ExamCardProps) =>
    exam.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredExams.length / ITEMS_PER_PAGE);

  const currentExams = filteredExams.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (!AuthService.isAuthenticated()) {
      router.push('/login');
    }
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          {dummyData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <DashboardCard title={data.title}>
                <Typography variant="body2" color="text.secondary">
                  {data.content}
                </Typography>
              </DashboardCard>
            </Grid>
          ))}
        </Grid>
        <Grid container marginTop={1}>
          <Grid item xs={12} md={6} spacing={3}>
            <Typography variant='h5' marginTop={2}>History Exam</Typography>
          </Grid>
          <Grid item xs={12} md={6} spacing={3} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
            <Link href="/exam-page"> See More <IconSearch /></Link>
          </Grid>
          <Grid xs={12} sx={{ padding: "10px 0" }} >
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
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
