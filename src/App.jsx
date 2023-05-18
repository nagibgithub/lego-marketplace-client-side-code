import { useLoaderData } from "react-router-dom";

const App = () => {

  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <div>
        <h1>
          {
            users.length
          }
        </h1>
      </div>
    </>
  );
};

export default App;