// pages/exam/[id]/result-page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper,
} from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import { ExamCardProps, dummyExamData } from '../../../components/exampage/dummy-data';
import { IconCalendar, IconClockCheck } from '@tabler/icons-react';
import { useParams, useRouter } from 'next/navigation';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

const ResultPage: React.FC = () => {
  // Ambil satu data ujian dari dummyExamData (misalnya, yang pertama)
  const { id } = useParams();
  const router = useRouter();

  const [exam, setExam] = useState<ExamCardProps>();

  useEffect(() => {
    const getDetailExam = () => {
      if (id) {
        const testId = id as string;
        const exam = dummyExamData.filter((exam) => exam.id === parseInt(testId))[0];
        return setExam(exam);
      } else {
        return router.back();
      }
    };
    getDetailExam();
  }, []);

  const handleReview = () => {
    router.push(`/exam-page/${id}/review-page`);
  };

  return (
    <PageContainer title="Exam Result" description="Exam Result Page">
      <Button variant="contained" sx={{ marginBottom: '2rem' }} color="primary" onClick={() => router.back()}>
        Back
      </Button>
      <DashboardCard title="Exam Result">
        {exam && (
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
              <Typography variant="h4">Your Exam Results</Typography>

              {/* List Jawaban yang Dipilih */}
              <List>
                {exam.questions.map((question, index) => (
                  <Paper elevation={3} key={index} style={{ padding: '16px', marginTop: '16px' }}>
                    <Typography variant="body1" gutterBottom>
                      {question.text}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Your Answer: {question.selectedChoice}
                    </Typography>
                  </Paper>
                ))}
              </List>
            </div>
            <Button variant="contained" color="primary" onClick={handleReview}>
              Review Answers
            </Button>
          </>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default ResultPage;
