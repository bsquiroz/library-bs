export function scrollbarCustom({ addUtilities }: any) {
  const newUtilities = {
    ".scrollbar-thin": {
      scrollbarWidth: "thin",
      scrollbarColor: "hsl(var(--primary)) hsl(var(--background))",
    },
    ".scrollbar-webkit": {
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        background: "hsl(var(--background))",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "hsl(var(--primary))",
        borderRadius: "20px",
      },
    },
  };

  addUtilities(newUtilities, "responsive", "hover");
}
