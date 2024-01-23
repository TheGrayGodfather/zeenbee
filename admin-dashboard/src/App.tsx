import { Suspense, lazy } from "react";
import LoadingSkeleton from "./components/skeleton/LoadingSkeleton";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar.tsx";

const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Customer = lazy(() => import("./pages/Customer.tsx"));
const Product = lazy(() => import("./pages/Product.tsx"));
const Transaction = lazy(() => import("./pages/Transaction.tsx"));

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
