function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function stringAvatar(image: string, name: string) {
  return {
    src: image,
    alt: name,
    sx: {
      width: 96,
      height: 96,
      boxShadow: 3,
      border: "4px solid",
      borderColor: stringToColor(name),
      position: "relative",
      zIndex: 2,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
