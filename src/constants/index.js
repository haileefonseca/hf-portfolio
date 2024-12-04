import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

export const HOMEPAGE_CONTENT = `Welcome to my portfolio website! I am a third year Computer Science and Biology major at Northeastern University in Boston, Massachusetts.`;

export const ABOUT_TEXT = `I am currently on co-op as a research data analyst at Northeastern. I work as active part of a research group studying how building developers utilize feedback when planning their projects in Boston. Outside of that, I'm on NU Rover's software team, where I work on various parts of the system such as user interface and arm logic. I also compete on the NU Equestrian Team. Off campus, I love to hike, ski and go on roadtrips!`;


export const PROJECTS = [
  {
    title: "Reversi",
    image: project1,
    description:
      "Created graphically playable, hexagonal and square reversi as a partner project. Can be played with two players or single-player against a computer with varying levels of profeciency.",
    technologies: ["Java", "JUnit", "Swing"],
  },
  {
    title: "Solitaire",
    image: project2,
    description:
      "A text-based version of klondike solitaire, including varities such as whitehead and limited draw. Users set up the game mode, draw, and move through input in the teminal.",
    technologies: ["Java"],
  },
];

export const CONTACT = {
  address: "Boston, MA",
  phoneNo: "",
  email: "fonseca.h@northeastern.edu",
};
