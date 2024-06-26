import Table from "../../components/table";
import useWorkerstore from "../../store/user";
import { useStore } from "zustand";
import { useEffect } from "react";
function Dashboard() {
  const { getWorkers, data }: any = useStore(useWorkerstore);

  async function getUsers() {
    const payload = {
      page: 1,
      limit: 10,
    };
    await getWorkers(payload);
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(data);

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default Dashboard;
