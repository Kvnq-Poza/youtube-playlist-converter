import React from "react";
import { Toaster } from "react-hot-toast";
import { PlaylistProvider } from "./context/PlaylistContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlaylistConverter from "./components/PlaylistConverter";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <PlaylistProvider>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <PlaylistConverter />
          <FAQSection />
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "#4CAF50",
                color: "white",
              },
            },
            error: {
              style: {
                background: "#F44336",
                color: "white",
              },
            },
          }}
        />
      </div>
    </PlaylistProvider>
  );
}

export default App;
