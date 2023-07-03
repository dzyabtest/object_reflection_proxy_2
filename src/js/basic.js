/* eslint-disable object-curly-newline */
export default function showStats(char) {
  const arr = [];

  const { special } = char;

  special.forEach((element) => {
    const { id, name, icon, description = 'Описание недоступно' } = element;

    arr.push({ id, name, icon, description });
  });

  return arr;
}
