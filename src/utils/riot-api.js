export const getChampions = () =>
  fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json"
  ).then(checkResponce);
export const getCurrentChampion = (championName) =>
  fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/${championName}.json`
  ).then(checkResponce);

function checkResponce(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
