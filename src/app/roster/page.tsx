import { Container } from "@/components/Container";

export default function Home() {
  const A_TeamData = [
    { name: "Garrison Reed", isCaptain: true },
    { name: "Logan Diehl", isCaptain: true },
    { name: "Ari Siegel" },
    { name: "Ben Crosbie" },
    { name: "Bhagya Patel" },
    { name: "Coley Privette" },
    { name: "Cooper Whisnandt" },
    { name: "Davis Orr" },
    { name: "Jack Clydesdale" },
    { name: "Jacob Ho" },
    { name: "Jinming Liu" },
    { name: "Luke Alexander" },
    { name: "Max Overdevest" },
    { name: "Thomas Chase" },
    { name: "Ayden Moran", isRookie: true },
    { name: "Ethan King", isRookie: true },
    { name: "Harin Patel", isRookie: true },
    { name: "Justin Ma", isRookie: true },
    { name: "Moe Jaffa", isRookie: true },
    { name: "Nate Marshall", isRookie: true },
    { name: "Nevin Legare", isRookie: true },
    { name: "Trevor Kirkland", isRookie: true },
  ];

  const B_TeamData = [
    // Captains
    { name: "Andrew Cory", isCaptain: true, isRookie: true },
    { name: "Lucas Rudloff", isCaptain: true },
    { name: "Sam Williams", isCaptain: true, isRookie: true },
    { name: "Tyler Rogers", isCaptain: true, isRookie: true },
  
    // Regular Players
    { name: "Abdiel Rosario" },
    { name: "Aiden DeTurris" },
    { name: "Ben Schreibman" },
    { name: "Caio Rudloff" },
    { name: "Carson Roland" },
    { name: "Drew Wright" },
    { name: "Howard Le" },
    { name: "Jack Lawhorne" },
    { name: "Jose Bolanos" },
    { name: "Justin Galin" },
    { name: "Kyle Stromberg" },
    { name: "Luke Gutierrez" },
    { name: "Riley Colquitt" },
  
    // Rookies
    { name: "Austin VanLoon", isRookie: true },
    { name: "Brayden Przekwas", isRookie: true },
    { name: "Brooks Caldwell", isRookie: true },
    { name: "Christian Hays", isRookie: true },
    { name: "Eric Sung", isRookie: true },
    { name: "Gilon Kravatsky", isRookie: true },
    { name: "Johnny Huynh", isRookie: true },
    { name: "Jon Lee", isRookie: true },
    { name: "Joey Oliver", isRookie: true },
  ];
  


  return (
    <Container className="py-8 px-4 sm:px-6 lg:px-8">
      {/* A Team Section */}
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
        2023-24 A-Team Roster
      </h2>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 text-center max-w-4xl w-full md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg text-blue-700 mb-4">
              Captains
            </h3>
            <ul className="list-none space-y-2">
              {A_TeamData.filter(player => player.isCaptain).sort((a, b) => a.name.localeCompare(b.name)).map(player => (
                <li key={player.name} className="text-gray-900 dark:text-gray-200">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-500 mb-4">
              Veterans
            </h3>
            <ul className="list-none space-y-2">
              {A_TeamData.filter(player => !player.isCaptain && !player.isRookie).sort((a, b) => a.name.localeCompare(b.name)).map(player => (
                <li key={player.name} className="text-gray-900 dark:text-gray-200">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-orange-700 mb-4">
              Rookies
            </h3>
            <ul className="list-none space-y-2">
              {A_TeamData.filter(player => player.isRookie && !player.isCaptain).sort((a, b) => a.name.localeCompare(b.name)).map(player => (
                <li key={player.name} className="text-gray-900 dark:text-gray-200">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
  
      {/* Spacing between the sections */}
      <div className="py-8"></div>
  
      {/* B Team Section */}
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
        2023-24 B-Team Roster
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 text-center max-w-4xl w-full md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg text-blue-700 mb-4">
              Captains
            </h3>
            <ul className="list-none space-y-2">
              {B_TeamData.filter(player => player.isCaptain).sort((a, b) => a.name.localeCompare(b.name)).map(player => (
                <li key={player.name} className="text-gray-900 dark:text-gray-200">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-500 mb-4">
              Veterans
            </h3>
            <ul className="list-none space-y-2">
              {B_TeamData.filter(player => !player.isCaptain && !player.isRookie).sort((a, b) => a.name.localeCompare(b.name)).map(player => (
                <li key={player.name} className="text-gray-900 dark:text-gray-200">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-orange-700 mb-4">
              Rookies
            </h3>
            <ul className="list-none space-y-2">
              {B_TeamData.filter(player => player.isRookie && !player.isCaptain).sort((a, b) => a.name.localeCompare(b.name)).map(player => (
                <li key={player.name} className="text-gray-900 dark:text-gray-200">
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
  
  
}
