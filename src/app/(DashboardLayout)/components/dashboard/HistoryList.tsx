import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider, Card } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type ListHistyory = { 
    subject: string;
    score: string;
    date: string;
}

interface HistoryProps {
    historyData: ListHistyory[]
}

const HistoryList:React.FC<HistoryProps> = ({ historyData }) => {
  return (
    <List>
      {historyData.map((item, index) => (
        <Card sx={{ marginTop: '1rem', padding: 0 }} elevation={9} key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <AccessTimeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.subject}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Nilai: {item.score}
                  </Typography>
                  {` - ${item.date}`}
                </>
              }
            />
          </ListItem>
          {index < historyData.length - 1 && <Divider variant="inset" component="li" />}
        </Card>
      ))}
    </List>
  );
};

export default HistoryList;
