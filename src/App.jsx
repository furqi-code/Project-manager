import { Input } from "./components/input";
import { Sidebar } from "./components/sidebar";
import { Card } from "./components/card";

export function App() {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 me-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-4 ms-5">
          <Input></Input>
          <Card></Card>
        </div>
      </div>
    </>
  );
}
