

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://previews.123rf.com/images/serezniy/serezniy1808/serezniy180800858/105806493-hairdresser-set-with-various-accessories-on-pink-background.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Добре дошли в салон Стаси Стил !</h1>
    <p className="text-lg text-gray-300 mb-8">Професионален фризьорски салон за модерни прически и стил.</p>
    <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Нека започнем!</a>
  </div>
</div>

  );
}
