import { Container } from "@/components/Container";

export default function About() {
  return (
    <Container className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">About Us</h1>
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Welcome to the Men's Ultimate Frisbee Club Team</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          The Men's Ultimate Frisbee Club Team offers a college-level environment for individuals looking to excel in the sport of ultimate frisbee. Our team is dedicated to providing a competitive and supportive atmosphere where players can develop their skills and compete at a high level.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          We are a highly competitive collegiate team, participating in several tournaments across the country throughout the year. Our primary goal is to qualify for the USA Ultimate College National Championship in May. With year-round practices and a focus on both individual and team development, we aim to excel in both the regular and post-season.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">What We Offer</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          We offer both an A-Team and a B-Team, ensuring that players of varying skill levels can find their place and contribute to the team. Whether you are an experienced player or new to the sport, everyone is welcome to join. No previous experience is necessary—just a passion for the game and a willingness to learn.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Season Overview</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Our official season runs during the Spring Semester, with the post-season beginning in mid-April. We practice year-round to maintain and enhance our skills, preparing ourselves for the challenges of competitive play.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Join Us</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          If you're interested in being a part of a dynamic and dedicated ultimate frisbee team, we invite you to join us. Come be a part of our journey as we strive for excellence and make lasting memories on and off the field.
        </p>
      </section>
    </Container>
  );
}
