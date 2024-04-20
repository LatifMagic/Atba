import Navbar from "@/components/shared/navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="mx-12 my-4 ">{children}</div>
    </main>
  );
};

export default layout;
