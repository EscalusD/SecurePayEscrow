import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Marketplace from "@/pages/Marketplace";
import Transactions from "@/pages/Transactions";
import NewTransaction from "@/pages/NewTransaction";
import ListingDetails from "@/pages/ListingDetails";
import TransactionDetails from "@/pages/TransactionDetails";
import Profile from "@/pages/Profile";
import CreateListing from "@/pages/CreateListing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Router() {
  const [location] = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/marketplace/create" component={CreateListing} />
          <Route path="/marketplace/:id" component={ListingDetails} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/transactions/new" component={NewTransaction} />
          <Route path="/transactions/:id" component={TransactionDetails} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
