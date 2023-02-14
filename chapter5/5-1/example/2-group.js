function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    getUserApi(userId).then(data => setUser(data));
  }, [userId]);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  // ...
}
