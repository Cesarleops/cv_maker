export const adjustedTitle = (title: string) => {
  const newTitle = title[0].toLocaleUpperCase() + title.slice(1);
  return newTitle;
};

export const subtitle = (section: string) => {
  if (section === "experience") {
    return "Your career till now";
  }

  if (section === "introduction") {
    return "A highlight of you";
  }

  if (section === "links") {
    return "Contact Info, if you are not familiar with some of these, leave them blank. If you want to change one, just add it again.";
  }

  if (section === "skills") {
    return "Your superpowers";
  }

  if (section === "about") {
    return "Describe yourself";
  }

  if (section === "education") {
    return "How did you get your knowledge";
  }

  if (section === "projects") {
    return "Your best works. (you can delete a tool by clicking it)";
  }

  return "";
};
