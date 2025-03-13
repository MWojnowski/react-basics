import styles from './UserGreeting.module.css';

function UserGreeting({ isLogged = false, username = 'Name' }) {
  const _class = isLogged ? styles.Logged : styles.NotLogged;
  const _text = isLogged ? `welcome ${username}` : 'Please log in to continue';
  return (
    <>
      <h2 className={_class}>{_text}</h2>
    </>
  );
}

export default UserGreeting;
