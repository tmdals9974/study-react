import React, { createContext } from "react";

const UserContext = createContext("unknown");

export default function App() {
  const [name, setName] = useState("mike");
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
});

function Greeting() {
  return <UserContext.Consumer>{(username) => <p>{`${username}님 안녕하세요`}</p>}</UserContext.Consumer>;
}
