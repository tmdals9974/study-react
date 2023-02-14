import { useState, useEffect, useCallback } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState();
  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

  if (!user) {
    return <h1>로딩...</h1>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`캐시: ${user.cash}`}</p>
      <p>{`계정 생성일: ${user.createdAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}
