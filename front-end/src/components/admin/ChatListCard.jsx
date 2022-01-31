import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AdminContext } from '../../context/admin/AdminProvider';

export default function ChatListCard(props) {
  const { clientChatNickName, setClientChatNickName } = useContext(AdminContext);
  const { nickname, timestamp } = props;
  return (
    <div style={ { marginLeft: '500px' } } onClick={() => setClientChatNickName(nickname)}>
      <Link to="/admin/chat" data-testid="containerChat">
        <div data-testid="profile-name">{ nickname }</div>
        <div data-testid="last-message">{ `Última mensagem às ${timestamp}` }</div>
      </Link>
    </div>
  );
}

ChatListCard.propTypes = {
  nickname: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};
