import { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, [userId]);
  // ...
}
