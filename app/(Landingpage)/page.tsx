import Heading from "../_components/Heading";
import Navbar from "../_components/Navbar";

function Landingpage() {
  return (
    <div className="flex flex-col border-2 h-[120vh]">
      <div>
        <Navbar />
        <Heading />
      </div>
    </div>
  );
}

export default Landingpage;
