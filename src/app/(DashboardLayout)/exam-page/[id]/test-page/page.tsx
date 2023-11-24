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

const TestPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();

  const [exam, setExam] = useState<ExamCardProps | undefined>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | undefined>();
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

  const handleQuestionChange = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setSelectedChoice(exam?.questions[questionIndex].selectedChoice || undefined);
  };

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handleNextQuestion = () => {
    if (selectedChoice) {
      if (exam && currentQuestion < exam.totalQuestion - 1) {
        const updatedExam = { ...exam };
        updatedExam.questions[currentQuestion].selectedChoice = selectedChoice;
        setExam(updatedExam);
  
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedChoice(updatedExam.questions[currentQuestion + 1].selectedChoice || undefined);
      } else if (exam) {
        const updatedExam = { ...exam };
        updatedExam.questions[currentQuestion].selectedChoice = selectedChoice;
        setExam(updatedExam);
  
        router.push(`/exam-page/${id}/result-page`);
      }
    } else {
      // Display an alert or handle it in a way to inform the user to choose an answer.
      alert('Please select an answer before proceeding to the next question.');
    }
  };

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
                    Question {currentQuestion + 1}:
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {exam.questions[currentQuestion].text}
                  </Typography>
                  <RadioGroup
                    value={selectedChoice}
                    onChange={(event) => handleChoiceClick(event.target.value)}
                  >
                    {exam.questions[currentQuestion].choices.map((choice, index) => (
                      <FormControlLabel
                        key={index}
                        value={choice}
                        control={<Radio />}
                        label={choice}
                        sx={{ background: selectedChoice === choice ? '#F7CAC9' : '#FFF' }}
                      />
                    ))}
                  </RadioGroup>
                  <Box marginTop={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNextQuestion}
                      disabled={!selectedChoice}
                    >
                      {currentQuestion + 1 === exam.totalQuestion ? 'Finish' : 'Next Question'}
                    </Button>
                  </Box>
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
                      <ListItem
                        key={index}
                        button
                        onClick={() => handleQuestionChange(index)}
                        sx={{ background: question.selectedChoice ? '#D3D3D3' : '#FFF' }}
                      >
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

export default TestPage;
