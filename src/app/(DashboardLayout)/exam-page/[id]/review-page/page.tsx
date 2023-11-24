// pages/exam/[id]/review-page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  Container,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import { ExamCardProps, dummyExamData, QuestionProps } from '../../../components/exampage/dummy-data';
import { useParams, useRouter } from 'next/navigation';

const ReviewPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const [exam, setExam] = useState<ExamCardProps | undefined>();
  const [timeRemaining, setTimeRemaining] = useState(300);

  useEffect(() => {
    const getDetailExam = () => {
      if (id) {
        const testId = id as string;
        const selectedExam = dummyExamData.find((exam) => exam.id === parseInt(testId));
        if (selectedExam) {
          setExam(selectedExam);
        } else {
          router.back();
        }
      }
    };
    getDetailExam();
  }, [id, router]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((time) => time - 1);
      } else if (exam) {
        clearInterval(timer);
        router.push(`/exam-page/${id}/result-page`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, router, id, exam]);

  return (
    <PageContainer title={`Exam - ${exam?.title}`} description="Exam Page">
      <Button variant="contained" sx={{ marginBottom: '2rem' }} color="primary" onClick={() => router.back()}>
        Back
      </Button>
      <DashboardCard title={`Exam - ${exam?.title}`}>
        {exam && (
          <Container style={{ marginTop: '2rem' }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Paper elevation={3} style={{ padding: '1.5rem' }}>
                  <Typography variant="h5" gutterBottom>
                    Reviewing Answers
                  </Typography>
                  <List>
                    {exam.questions.map((question, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={`${question.text}`} />
                        <Typography variant="body2">
                          Your Answer: {question.selectedChoice || 'Not answered'}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} style={{ padding: '1.5rem', height: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Questions:
                  </Typography>
                  <List>
                    {exam.questions.map((question, index) => (
                      <ListItem key={index} button>
                        <ListItemText primary={`Question ${index + 1}`} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        )}
      </DashboardCard>
    </PageContainer>
  );
};

export default ReviewPage;
