import { useParams, useHistory } from "react-router";

function About() {
  const { id } = useParams();

  const { push } = useHistory();
  return (
    <div>
      <h1>This is about us page</h1>
      <h2>{id}</h2>

      <button onClick={() => push("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default About;
