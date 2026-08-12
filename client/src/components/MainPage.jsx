import ButtonApplication from "./ButtonApplication";
import JobLists from "./JobLists";
import StatusApplication from "./StatusApplication";

export default function MainPage({ jobs, getLoadJobs }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      <ButtonApplication />
      <StatusApplication />
      <JobLists jobs={jobs} getLoadJobs={getLoadJobs} />
    </main>
  );
}
