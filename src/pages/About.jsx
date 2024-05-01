import TeamMember from "../components/TeamMember";
const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Welcome to Pawsome
        </h1>
        <div className="stats bg-indigo-500 shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Your Pet's Best Friend
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-center">
        Pawsome Pet Shop offers grooming, training, vetting, and walking
        services to keep your furry friends healthy and happy. Our expert team
        is committed to providing top-notch care for your pets, ensuring they
        look and feel their best. Trust us to be your pet's best friend!
      </p>
      <TeamMember/>
    </>
  );
};
export default About;
