import Card from "@/components/common/Card";

const Home: React.FC = () => {
    return(
        <>
        <h1>Home Page</h1>
            <Card title="Card Title" content="This is a sample card content." />
    <Card title="Another Card" content="This is another card with different content." />
    <Card title="Third Card" content="This is the third card with its own content." />

        </>
    )
}
export default Home;