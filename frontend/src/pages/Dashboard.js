import Stream from "../components/Stream";
import { Navbar } from "../components/Navbar";

const Dashboard = ({ user }) => {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-10">
        <Stream />
        <Stream />
        <Stream />
        <Stream />
        <Stream />
        <Stream />
      </div>
    </>
  );
};

export default Dashboard;
