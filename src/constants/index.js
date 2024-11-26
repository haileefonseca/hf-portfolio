import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

export const HOMEPAGE_CONTENT = `I am a third year Computer Science and Biology major at Northeastern University in Boston, MA!`;

export const ABOUT_TEXT = `I am currently on co-op as a research data analyst at Northeastern, being an active part of a research group studying how developers utilize feedback when planning in Boston. I'm on NU Rover's software team, where I work on various parts of the system such as user interface and arm logic. I also compete on the NU Equestrian Team. Off campus, I love to hike, ski and go on roadtrips!`;


export const PROJECTS = [
  {
    title: "Reversi",
    image: project1,
    description:
      "Developed as a partner project; Graphically playable, hexagonal and square reversi. Can be played with two players, or played against a computer with varying levels of profeciency.",
    technologies: ["Java", "JUnit", "Swing"],
  },
  {
    title: "Solitaire",
    image: project2,
    description:
      "A text-based version of klondike solitaire played in the terminal. Includes varities such as whitehead and limited draw, which can be set up when launching. Users draw and move through input in the teminal.",
    technologies: ["Java"],
  },
];

export const CONTACT = {
  address: "Boston, MA",
  phoneNo: "",
  email: "fonseca.h@northeastern.edu",
};
