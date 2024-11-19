import { createContext } from "react";

export const story = {
  first: {
    text: [
      "Всем привет друзья!",
      "Это мой первый проект, так что не судите строго.",
      "Эта история началась совсем недавно...",
    ],
    background:
      "https://i.pinimg.com/originals/9f/b5/fe/9fb5fe7edbe0ebd640c83a2ef822bb84.gif",
    alt: "Какой-то замок",
    points: {
      small: [
        {
            point: "200px 400px",
            img: "https://i.pinimg.com/736x/2c/b4/5d/2cb45d7c76be5f557b6f424a67d3f57e.jpg",
            name: "Таверна"
        },
        {
            point: "600px 100px",
            img: "https://i.pinimg.com/736x/91/1c/b1/911cb1a3be8f0752b97bc9caeb5df106.jpg",
            name: "Ведьма"
        }
      ],
      medium: ["13,31,54,64", "43,53,123,543", "32,222,333,566"],
      large: ["13,31,54,64", "43,53,123,543", "32,222,333,566"],
    },
  },
};

export const StoryContext = createContext(null);
