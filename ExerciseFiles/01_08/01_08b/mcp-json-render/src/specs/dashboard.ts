export const dashboardSpec = {
  root: "dashboard",
  elements: {
    dashboard: {
      type: "Card",
      props: {
        title: "Operations Dashboard",
        description: "A hand written starting point"
      },
      children: ["layout"]
    },
    layout: {
      type: "Stack",
      props: {
        direction: "vertical",
        gap: "md"
      },
      children: ["revenue", "tickets", "status"]
    },
    revenue: {
      type: "Heading",
      props: {
        text: "Revenue $48,200",
        level: "h3"
      }
    },
    tickets: {
      type: "Badge",
      props: {
        text: "124 open tickets",
        variant: "secondary"
      }
    },
    status: {
      type: "Text",
      props: {
        text: "Last refreshed: just now."
      }
    }
  }
};
