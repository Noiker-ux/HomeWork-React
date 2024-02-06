export const handleConvertRelease = (date: string) => {
    let dateFromString = new Date(date);
    let formatter = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formatter.format(dateFromString);
  };