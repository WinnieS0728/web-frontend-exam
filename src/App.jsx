import Banner from "./components/banner";
import JobList from "./components/joblist";
import TopWorks from "./layouts/top works";

function App() {
  return (
    <main>
      <Banner />
      <TopWorks>
        <JobList />
      </TopWorks>
    </main>
  );
}

export default App;
