import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ml-32 mt-8">
      <h2 className="text-5xl font-bold">This is Trello Board Home page</h2>
      <p className="text-3xl font-bold mt-12">
        this application is under construction to browse the app go to
      </p>
      <Link
        to={{
          pathname: `/boards`,
        }}
        className="text-3xl underline text-sky-500 font-bold mt-12"
      >
        boards
      </Link>
    </div>
  );
};

export default Home;
