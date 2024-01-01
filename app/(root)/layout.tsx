import Footer from "@/components/BasicUi/Footer";
import Header from "@/components/BasicUi/Header";
import ReduxProvider from "@/provider/redux/ReduxProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ReduxProvider>
  );
}
