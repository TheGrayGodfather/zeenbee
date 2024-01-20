import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSkeleton from "./components/skeleton/LoadingSkeleton";
import Sidebar from "./components/Sidebar";
import { Grid } from "@mui/material";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customer = lazy(() => import("./pages/Customer"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSkeleton />}>
        <Grid
          container
          columnSpacing={2}
          sx={{
            bgcolor: (theme) => theme.palette.background.paper,
            minHeight: "100vh",
          }}
        >
          <Grid item md={2}>
            <Sidebar />
          </Grid>

          <Grid item md={10}>
            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/customer" element={<Customer />} />
              <Route path="/admin/product" element={<Product />} />
              <Route path="/admin/transaction" element={<Transaction />} />
            </Routes>
          </Grid>
        </Grid>
      </Suspense>
    </Router>
  );
};

export default App;
