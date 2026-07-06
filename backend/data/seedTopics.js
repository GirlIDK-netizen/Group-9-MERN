const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Topic = require("../models/LearnTopic");

dotenv.config();

const topics = [
  {
    name: "Heart",
    slug: "heart",
    description: "Learn the main parts of the heart and how blood flows through it."
  },
  {
    name: "Lungs",
    slug: "lungs",
    description: "Learn how the lungs help the body breathe and exchange oxygen."
  },
  {
    name: "Brain",
    slug: "brain",
    description: "Learn the basic parts of the brain and what they control."
  },
  {
    name: "Skeletal System",
    slug: "skeletal-system",
    description: "Learn about bones, joints, and the structure of the body."
  },
  {
    name: "Muscular System",
    slug: "muscular-system",
    description: "Learn how muscles help the body move."
  },
  {
    name: "Digestive System",
    slug: "digestive-system",
    description: "Learn how the body breaks down food and absorbs nutrients."
  },
  {
    name: "CPR",
    slug: "cpr",
    description: "Learn the basic purpose and steps of CPR."
  },
  {
    name: "Choking",
    slug: "choking",
    description: "Learn how to recognize and respond to choking."
  }
];

const seedTopics = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Topic.deleteMany({});
    await Topic.insertMany(topics);

    console.log("Topics seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding topics:", error);
    process.exit(1);
  }
};

seedTopics();
