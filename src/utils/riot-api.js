export async function getChampions() {
  const response = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json"
  );
  return checkResponce(response);
}

export async function getCurrentChampion(championName) {
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/${championName}.json`
  );
  return checkResponce(response);
}

function checkResponce(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
