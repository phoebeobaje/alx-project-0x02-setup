import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About: React.FC = () => {
    return(
        <>
        <Header />
        <h1>About Page</h1>
         <Button size="small" shape="rounded-sm">Small</Button>
      <Button size="medium" shape="rounded-md">Medium</Button>
      <Button size="large" shape="rounded-full">Large</Button>
        </>
    )
}
export default About;