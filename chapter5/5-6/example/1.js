import { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState();
  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }
  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchAndSetUser(false);
    }
  });
  // ...
}
