// Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const date = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const endYear = `2022-12-31`;
const startYear = `2022-01-01`;

getCurrentMonth();
getCurrentDay();
// Base URl
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;

// Popular games
const popular_games = `&dates=${lastYear},${date}&ordering=+rating&page_size=10`;
const upcoming_games = `&dates=${date},${endYear}&ordering=-added&page_size=10`;
const new_games = `&dates=${startYear},${date}&ordering=+released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
// GAME DETAILS
export const gameDetailsUrl = (id) => `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`;
export const gameScreenshotUrl = (id) => `https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;