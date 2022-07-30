import Container from "/components/Container";
import Card from "/components/Card";
import ContentRow from "/components/ContentRow";
import Carousel from "/components/Carousel/Carousel";
import Image from "next/image";
import { useState } from "react";
import { pricingOptions, galleries } from "./data";

export default function PricingScene() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const slides = galleries;
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

          <Container>
            <p>Before</p>
            <Carousel>
              {
                galleries[selectedDemo].before.map((image) => (
                  <Image src={image.url} width="300" height="300" key={image.id} />
                ))
              }
            </Carousel>
            <p>After</p>
            <Carousel>
              {
                galleries[selectedDemo].after.map((image) => (
                  <Image src={image.url} width="300" height="300" key={image.key} />
                ))
              }
            </Carousel>
          </Container>
        </Container>
      }
    </>
  );
}