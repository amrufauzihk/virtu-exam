"use client"
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, Button } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import { ExamCardProps, dummyExamData } from '../../../components/exampage/dummy-data';
import { IconCalendar, IconClockCheck } from '@tabler/icons-react';
import { useParams, useRouter } from 'next/navigation';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

const InstructionPage: React.FC = () => {
  // Ambil satu data ujian dari dummyExamData (misalnya, yang pertama)
  const { id } = useParams();
  const router = useRouter();

  const [exam, setExam] = useState<ExamCardProps>()

  useEffect(() => {
    const getDetailExam = () => {
      if (id) {
        const testId = id as string;
        const exam = dummyExamData.filter(exam => exam.id === parseInt(testId))[0];
        return setExam(exam);
      } else {
        return router.back();
      }
    }
    getDetailExam();
  }, [])

  return (
    <PageContainer title="Exam" description="Exam Page">
      <Button variant="contained" sx={{ marginBottom: '2rem' }} color="primary" onClick={() => router.back()}>
        Back
      </Button>
      <DashboardCard title="Exam Page">
        { exam && 
          <>
            <Typography variant="h1" gutterBottom>
              {exam.title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <IconCalendar size={24} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ textAlign: 'justify', marginBottom: '16px' }}>
                  Date: {exam.date}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <IconClockCheck size={24} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ textAlign: 'justify', marginBottom: '16px' }}>
                  Duration: {exam.duration} minutes
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" style={{ textAlign: 'justify', marginBottom: '16px' }}>
              {exam.description}
            </Typography>
            <div>
            <Typography variant="h4">Instruksi Pengerjaan Ujian</Typography>

              {/* List Instruksi */}
              <List>
                {/* 1. Durasi Ujian */}
                <ListItem>
                  <ListItemText
                    primary="Ujian ini memiliki durasi total [masukkan durasi] menit."
                    secondary="Susun strategi waktu untuk menyelesaikan semua soal dengan baik."
                  />
                </ListItem>

                {/* 2. Format Soal */}
                <ListItem>
                  <ListItemText
                    primary="Soal ujian terdiri dari pilihan ganda."
                    secondary="Bacalah setiap pertanyaan dengan cermat sebelum memilih jawaban."
                  />
                </ListItem>

                {/* 3. Cara Menjawab */}
                <ListItem>
                  <ListItemText
                    primary="Pilih jawaban yang paling tepat untuk setiap pertanyaan."
                    secondary="Jawaban benar mendapatkan skor penuh, jawaban salah tidak mendapatkan skor."
                  />
                </ListItem>

                {/* 4. Batas Waktu */}
                <ListItem>
                  <ListItemText
                    primary="Setiap soal memiliki batas waktu yang tertera di atas halaman."
                    secondary="Perhatikan sisa waktu yang tersisa dan sesuaikan kecepatan pengerjaan."
                  />
                </ListItem>

                {/* 5. Selesai dan Keluar */}
                <ListItem>
                  <ListItemText
                    primary="Tekan tombol 'Selesai' setelah menyelesaikan semua soal."
                    secondary="Pastikan untuk keluar dari sesi ujian setelah menekan tombol 'Selesai'."
                  />
                </ListItem>
              </List>
            </div>
            <Button variant="contained" color="primary" onClick={() => router.push(`/exam-page/${id}/test-page`)}>
              Submit
            </Button>
          </>
        }
      </DashboardCard>
    </PageContainer>
  );
};

export default InstructionPage;
