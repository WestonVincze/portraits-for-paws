import Container from "../components/Container";
import Card from "../components/Card";
import ContentRow from "../components/ContentRow";
import ImageCarousel from "../components/Carousel/Carousel";
import { useState } from "react";

// TODO: merge into one object... why have an array and an object?
const pricingOptions = [
  {
    id: "pet_portrait",
    title: "$30",
    body: "Portrait of one pet.",
  },
  {
    id: "faceless_portrait",
    title: "$30",
    body: "Faceless Portrait.",
  },
  {
    id: "single_line",
    title: "$20",
    body: "Single line image.",
  },
  {
    id: "additional_pet",
    title: "$10",
    body: "Add an additional Pet.",
  }
];

// TODO: before/after should actually contian an array of images
const galleries = {
  pet_portrait: {
    title: "Pet Portrait",
    price: "$30",
    body: "Portrait of one pet.",
    before: <>pet portrait before</>,
    after: <>pet portrait after</>
  },
  faceless_portrait: {
    title: "Faceless Portrait",
    price: "$30",
    body: "Faceless Portrait.",
    before: <>faceless portrait before</>,
    after: <>faceless portrait after</>,
  },
  single_line: {
    title: "Single Line Image",
    price: "$20",
    body: "Single line image.",
    before: <>single line image before</>,
    after: <>single line image after</>,
  },
  additional_pet: {
    title: "Additional Pet",
    price: "$10",
    body: "Add an additional Pet.",
    before: <>additional pet before</>,
    after: <>additional pet after</>,
  },
};

export default function Pricing() {
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
            <ImageCarousel
              images={[0,1,2]} />
          </Container>
        </Container>
      }
    </>
  );
}