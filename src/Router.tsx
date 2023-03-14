import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

export function Router() {
  return (
    <Routes>
      <Route path="/travel/main" element={<Main />} />
    </Routes>
  )
}