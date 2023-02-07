export const categoryColor = (category: string) => {
  switch (category) {
    case "personal":
      return "var(--color-primary)";
    case "trabajo":
      return "var(--color-secondary)";
    case "estudio":
      return "var(--color-tertiary)";
    case "otro":
      return "var(--color-quaternary)";
    default:
      return "var(--color-base)";
  }
};
