import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSkeleton from "./components/skeleton/LoadingSkeleton";
import { Grid } from "@mui/material";
import AdminSidebar from "./components/AdminSidebar";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSkeleton />}>
        <Grid
          container
          columnSpacing={2}
          sx={{
            bgcolor: (theme) => theme.palette.greyBg.default,
            minHeight: "100vh",
          }}
        >
          <Grid item md={2}>
            <AdminSidebar />
          </Grid>

          <Grid item md={10}>
            <Routes>
              {/* default */}
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/customer" element={<Customers />} />
              <Route path="/admin/product" element={<Products />} />
              <Route path="/admin/transaction" element={<Transaction />} />

              {/* charts */}

              {/* apps */}
            </Routes>
          </Grid>
        </Grid>
      </Suspense>
    </Router>
  );
};

export default App;
