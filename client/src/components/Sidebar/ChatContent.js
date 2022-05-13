import React from 'react';
import { Box, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: '#9CADC8',
    letterSpacing: -0.17,
  },
  unreadCount: {
    display: 'flex',
    boxShadow: 'none',
    fontSize: 10,
    fontWeight: 'bold',
    height: 20,
    minWidth: 20,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: -0.17,
    color: '#FFFFFF',
    background: '#3f92ff',
    borderRadius: 10,
  },
  unreadBox: {
    background: '#3F92FF',
    borderRadius: '10px',
  },
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser, unreadCount } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        {unreadCount > 0 ? (
          <Card className={classes.unreadCount}>{unreadCount}</Card>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default ChatContent;
