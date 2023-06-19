const filterText = (content, n) => {
  let text = "";
  for (let i = 2; i < content.length - n; i++) {
    text = text + content[i];
  }
  return text;
};

export const sortMainContent = (MainContent) => {
  const text = [];
  let content = "";
  let header = "";

  for (let i = 0; i < MainContent.length; i++) {
    if (MainContent[i] === "!") {
      if (content !== "" && header !== "") {
        text.push({
          header: header,
          content: filterText(content, 2),
        });
        content = "";
        header = "";
      }
      i++;
      while (MainContent[i] !== "!") {
        header = header + MainContent[i];
        i++;
      }
    } else {
      content = content + MainContent[i];
    }
  }

  text.push({
    header: header,
    content: filterText(content, 0),
  });
  content = "";
  header = "";
  return text;
};
