import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));

function App() {
  return (
    <div>
      <Layout>
      <Suspense 
        fallback={
          <div className="centered"><LoadingSpinner /></div>
        }
      >
        <Routes>
          <Route path={"/"} element={<Navigate to="quotes" />}/>
          <Route path={"quotes"} element={<AllQuotes />} />
          <Route path={"quotes/:quoteId/*"} element={<QuoteDetail />} />
          <Route path={"new-quote"} element={<NewQuote />} />
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </Suspense>
      </Layout>
    </div>
  );
}

export default App;
