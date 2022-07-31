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

export const galleries = {
  pet_portrait: {
    id: "1",
    title: "Pet Portrait",
    price: "$30",
    body: "Portrait of one pet.",
    before:
      [
        {
          id: "1",
          url: "/images/portfolio/1.png",
        },
        {
          id: "2",
          url: "/images/portfolio/2.png",
        }
      ],
    after: [
      {
        id: "1",
        url: "/images/portfolio/4.png",
      },
      {
        id: "1",
        url:"/images/portfolio/5.png",
      }
    ]
  },
  faceless_portrait: {
    id: "2",
    title: "Faceless Portrait",
    price: "$30",
    body: "Faceless Portrait.",
    before:
      [
        {
          id: "1",
          url: "/images/portfolio/1.png",
        },
        {
          id: "2",
          url: "/images/portfolio/2.png",
        }
      ],
    after: [
      {
        id: "1",
        url: "/images/portfolio/4.png",
      },
      {
        id: "1",
        url:"/images/portfolio/5.png",
      }
    ]
  },
  single_line: {
    id: "3",
    title: "Single Line Image",
    price: "$20",
    body: "Single line image.",
    before:
      [
        {
          id: "1",
          url: "/images/portfolio/1.png",
        },
        {
          id: "2",
          url: "/images/portfolio/2.png",
        }
      ],
    after: [
      {
        id: "1",
        url: "/images/portfolio/4.png",
      },
      {
        id: "1",
        url:"/images/portfolio/5.png",
      }
    ]
  },
  additional_pet: {
    id: "4",
    title: "Additional Pet",
    price: "$10",
    body: "Add an additional Pet.",
    before:
      [
        {
          id: "1",
          url: "/images/portfolio/1.png",
        },
        {
          id: "2",
          url: "/images/portfolio/2.png",
        }
      ],
    after: [
      {
        id: "1",
        url: "/images/portfolio/4.png",
      },
      {
        id: "1",
        url:"/images/portfolio/5.png",
      }
    ]
  },
};
