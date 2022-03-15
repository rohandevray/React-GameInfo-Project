//BASE URL

const base_url = "https://api.rawg.io/api/";

//getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//for date and month we just have to run the above functions

//POPULAR GAMES,UPCOMING GAMES AND ALL OTHERS WE GET FROM API.
const popular_games = `games?key=d564ce53d9844f54b9e9351893ec8b31&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=d564ce53d9844f54b9e9351893ec8b31&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=d564ce53d9844f54b9e9351893ec8b31&dates&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//exporting urls

export const popularGamesUrl = () => {
  return `${base_url}${popular_games}`;
};
export const upcomingGamesUrl = () => {
  return `${base_url}${upcoming_games}`;
};
export const newGamesUrl = () => {
  return `${base_url}${newGames}`;
};

// console.log(newGamesUrl());

// console.log(upcomingGamesUrl());
//we have to run this function as this upcomingGamesUrl is a function
//GAMES DETAILS
export const gamesDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=d564ce53d9844f54b9e9351893ec8b31`;
// api.rawg.io/api/games/303576?key=d564ce53d9844f54b9e9351893ec8b31
// https: console.log(gamesDetailsUrl());

//SCREEN SHOTS
export const gamesScreenUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=d564ce53d9844f54b9e9351893ec8b31`;
//fetch searched games

export const searchedGameUrl = (game_name) => `
    ${base_url}games?search=${game_name}&key=d564ce53d9844f54b9e9351893ec8b31&page_size=9
`;
