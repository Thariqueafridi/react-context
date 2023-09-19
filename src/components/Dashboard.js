import { useContext } from "react";
import userContext from "../UserContext";

function Dashboard() {

  const[user , setUser] = useContext( userContext);
  return (
    <div>
      <pre>
        {JSON.stringify(user)}
      </pre>
     <h1>This is Dashboard page</h1>
     <button onClick={() => {
      setUser({});

     }}>
      Logout
     </button>
    </div>
  );
}

export default Dashboard;
