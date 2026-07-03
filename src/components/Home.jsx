function Home(props) {

  return (
    <div className="home">

      <h1>Welcome to Home Page</h1>

      <button onClick={props.toggleMode}>
        {props.darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </div>
  );
}

export default Home;