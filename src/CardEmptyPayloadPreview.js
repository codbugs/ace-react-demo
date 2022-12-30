import CardPayloadPreview from "./CardPayloadPreview";

export default function CardEmptyPayloadPreview() {

  const card = {
    type: "AdaptiveCard",
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    fallbackText: "Your device doesn't support this version.",
    version: "",
    body: [
      {
        type: "Container",
        items: [
          {
            type: "TextBlock",
            text: "No payload provided",
            horizontalAlignment: "center",
            spacing: "medium",
            weight: "bolder"
          },
          {
            type: "Image",
            url: "/info.png",
            size: "medium",
            horizontalAlignment: "center",
            spacing: "medium"
          }
        ],
      },
    ],
  };

  return <CardPayloadPreview card={ card } />;
}
