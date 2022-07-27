// TODO: merge into one object... why have an array and an object?
export const pricingOptions = [
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
export const galleries= {
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
