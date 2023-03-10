const reportCrash = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    // 서버로 예외 정보 전송
  }
};
