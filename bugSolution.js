```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correct way to handle setCount within a closure
    const updateCount = () => {
      setCount(prevCount => prevCount + 1);
    };

    intervalId = setInterval(updateCount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```