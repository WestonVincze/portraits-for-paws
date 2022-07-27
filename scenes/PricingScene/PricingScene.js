import Container from "/components/Container";
import Card from "/components/Card";
import ContentRow from "/components/ContentRow";
import Carousel from "/components/Carousel/Carousel";
import { useState } from "react";
import { pricingOptions, galleries } from "./data";

export default function PricingScene() {
  const [selectedDemo, setSelectedDemo] = useState(null);
  // store current example
  // populate cols in contentRow with images based on selectedExample
  return (
    <>
      <Container>
        <h1>Pricing Options</h1>
        <h3>Click on a card to see examples</h3>
      </Container>
      <Container>
        <ContentRow 
          cols={pricingOptions.map((option) => (
            <a onClick={() => setSelectedDemo(option.id)}>
              <Card
                title={option.title}
                variant="offsetBorder"
                active={selectedDemo === option.id}
                clickable={true}
              >
                <p>{option.body}</p>
              </Card>
            </a>
          ))}
        />
      </Container>
      {selectedDemo &&
        <Container>
          <h1>Viewing {galleries[selectedDemo].title || "No example"}</h1>

          <ContentRow 
            cols={[
              // TODO: make an image gallery component that accepts an array of images
              galleries[selectedDemo].before,
              galleries[selectedDemo].after,
            ]}
          />
          <Container>
            <Carousel
              images={[0,1,2]} />
          </Container>
        </Container>
      }
    </>
  );
}