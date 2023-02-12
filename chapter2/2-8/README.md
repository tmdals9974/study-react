# 훅 직접 만들기

- 커스텀 훅을 사용하면 코드 가독성과 재사용성이 좋아짐.
- 네이밍은 `use~` 추천
- 코드 예시 (`useUse.js`, `useWindowWidth.js`)

```javascript
//useUser.js
import { useEffect, useState } from "react";
export default function useUser(userId) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);
  return user;
}
```

```javascript
//Profile.js
import React from "react";
import useUser from "./useUser";

export default function Profile({ userId }) {
  const user = useUser(userId);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}
```

- 커스텀 훅 활용법
  1. mount 여부를 확인하는 커스텀 훅 (`useMounted.js`)
  2. 로그인이 필요한 페이지일 경우, 비로그인 사용자일 경우 특정 행동을 하는 훅.
  3. 사용자가 작성한 내용이 있을 경우, 저장하지 않고 페이지를 벗어날 경우 작동하는 훅. 