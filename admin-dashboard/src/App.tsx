import { Suspense, lazy } from "react";
import LoadingSkeleton from "./components/skeleton/LoadingSkeleton";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar.tsx";

const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Customer = lazy(() => import("./pages/Customer.tsx"));
const Product = lazy(() => import("./pages/Product.tsx"));
const Transaction = lazy(() => import("./pages/Transaction.tsx"));

// charts
const BarCharts = lazy(() => import("./pages/charts/BarCharts.tsx"));
const PaiCharts = lazy(() => import("./pages/charts/PaiCharts.tsx"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts.tsx"));

// apps
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch.tsx"));
const Coupon = lazy(() => import("./pages/apps/Coupon.tsx"));
const Toss = lazy(() => import("./pages/apps/Toss.tsx"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSkeleton />}>
        <Grid
          container
          columnSpacing={2}
          sx={{
            bgcolor: (theme) => theme.palette.grey[50],
            minHeight: "100vh",
          }}
        >
          <Grid item md={2}>
            <Sidebar />
          </Grid>

          <Grid item md={10}>
            <Routes>
              {/* Dashboard */}
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/customer" element={<Customer />} />
              <Route path="/admin/product" element={<Product />} />
              <Route path="/admin/transaction" element={<Transaction />} />

              {/* Chart */}
              <Route path="/admin/chart/bar" element={<BarCharts />} />
              <Route path="/admin/chart/pie" element={<PaiCharts />} />
              <Route path="/admin/chart/line" element={<LineCharts />} />

              {/* Apps */}
              <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
              <Route path="/admin/app/coupon" element={<Coupon />} />
              <Route path="/admin/app/toss" element={<Toss />} />
            </Routes>
          </Grid>
        </Grid>
      </Suspense>
    </Router>
  );
};

export default App;
