import { Outlet } from "react-router";

function SecLayOut() {
    return (
    <>
      {/* Content Menu*/}
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default SecLayOut;