import Card from "../components/Card";
import Icon from "../components/Icon";
import ContentRow from "../components/ContentRow";
import Container from "../components/Container";

export default function Home() {
  const steps = [
    {
      title: "Choose A Package.",
      body: "Pick something from our options you dirty rat.",
      image: <Icon className="text-center" type="clipboard-check" variant="largeIcon" />,
    },
    {
      title: "Upload Your Pet.",
      body: "This image better be high fucking quality!",
      image: <Icon className="text-center" type="camera" variant="largeIcon" />,
    },
    {
      title: "Checkout.",
      body: "Give me my money, bitch.",
      image: <Icon className="text-center" type="cart" variant="largeIcon" />,
    },
  ];

  return (
    <>
      <Container> 
        <h1>Digital Portraits for a Cause.</h1>
        <p>75% of all proceeds donated to local animal rescues!</p>
      </Container>

      <Container>
        <h1>How do I order a portrait?</h1>
        <ContentRow 
          cols={steps.map(({ title, body, image}) => (
            <Card 
              image={image}
              variant="offsetBorder" 
              title={title} 
              key={title}
            >
              <p>{body}</p>
            </Card>
          ))}
        />
      </Container>
    </>
  )
}
