import { useContext } from "react";
import userContext from "../UserContext";

function Home() {
  const values = useContext(userContext);

  const [user, setUser] = values;
  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <h1>This is Home page</h1>
      <button
        onClick={() =>
          setUser({
            name: "tharique",
            type: "Admin",
          })
        }
      >
        Login
      </button>
    </div>
  );
}

export default Home;
