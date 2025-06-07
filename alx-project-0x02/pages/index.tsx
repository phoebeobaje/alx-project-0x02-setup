import Card from "@/components/common/Card";
import Header from "@/components/layout/Header"

export default function Home() {
  return (
    <>
    <Header />
    <h1 className=" flex align-center justify-center text-lg font-bold text-blue-500">Welcome!!!</h1>
    <Card title="Card Title" content="This is a sample card content." />
    <Card title="Another Card" content="This is another card with different content." />
    <Card title="Third Card" content="This is the third card with its own content." />
    </>
  );
}
