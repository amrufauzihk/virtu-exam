// components/ExamCard.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Avatar,
  Grid,
  colors,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { IconCalendar } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { ExamCardProps } from './dummy-data';

const ExamCard: React.FC<ExamCardProps> = (props) => {
    const {
        id, title, description,
        totalQuestion,duration, date, imageUrl,
    } = props;

    const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '8px',
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        border: colors.amber[200]
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Image
        alt={title}
        src={imageUrl}
        style={{
          height: 150,
          objectFit: 'cover',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
        width={1000}
        height={1000}
      /> */}
      <CardContent
        style={{
          padding: '16px',
        }}
      >
        <Typography variant="h3" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Grid container spacing={1} marginTop={2} alignItems="center">
          <Grid item>
            <IconCalendar />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {date}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" fontWeight="bold" color="text.secondary" style={{ marginTop: '8px' }}>
          Total Questions: {totalQuestion}
        </Typography>
        <Typography variant="body2" fontWeight="bold" color="text.secondary">
          Duration: {duration} minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.push(`/exam-page/${id}/instruction`)} color="primary">
          Start Exam
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExamCard;
