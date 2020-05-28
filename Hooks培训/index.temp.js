function App(props) {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount(count + 1);
      setTimeout(function(){
          console.log(count);
      }, 1000)
    };
    return (
      <div>
        <p>{count}</p>
        <button onClick={handleCount}>CLick </button>
      </div>
    );
  }