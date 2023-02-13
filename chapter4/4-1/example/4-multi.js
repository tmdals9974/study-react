import React, { useContext, createContext } from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="mike">
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
}

function Greeting() {
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <p
      style={{ color: theme === 'dark' ? 'gray' : 'green' }}
    >{`${username}님 안녕하세요`}</p>
  );
}
