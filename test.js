regions = [
  {
    name: "Another",
    suburbs: [{ name: "Different", views: 76400 }],
  },
  {
    name: "Lichtenberg",
    id: "123",
    suburbs: [
      { name: "Lichtenberg", views: 87895 },
      { name: "Fennpfuhl", views: 76400 },
      { name: "Rummelsberg", views: 10239 },
    ],
  },
];

regionA = regions.find(
  (region) => region.name == region.suburbs.find((suburb) => suburb.name == "Fennpfuhl")
);

console.log(regionA);

regionB = regions.find((region) => region.suburbs.find((suburb) => suburb.name == "Fennpfuhl"));

console.log(regionB);
