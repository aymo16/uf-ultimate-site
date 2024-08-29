import { Container } from "@/components/Container";

export default function Home() {
  const rosterData = [
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


  return (
    <Container className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
        Florida Men's Club Ultimate - 2023-24 Roster
      </h2>
      <ul className="list-none space-y-2">
        {rosterData.map((player) => (
          <li
            key={player.name}
            className={`flex items-center text-gray-900 dark:text-gray-200`}
          >
            <div className="flex flex-row items-baseline gap-2">
              <div className={`flex ${player.isCaptain ? 'font-semibold text-blue-700 dark:text-blue-300' : ''} ${player.isRookie ? '' : ''}`}>
                {player.name}
              </div>
              <div className="flex flex-col text-sm">
                {player.isCaptain && (
                  <span className="text-blue-600 dark:text-blue-400">(Captain)</span>
                )}
                {player.isRookie && !player.isCaptain && (
                  <span className="text-yellow-600 dark:text-yellow-400">(Rookie)</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
