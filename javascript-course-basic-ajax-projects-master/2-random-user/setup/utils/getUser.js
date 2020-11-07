async function getUser(url) {
  const response = await fetch(url);
  const data = await response.json();
  // desctructure
  const person = data.results[0];
  const { phone, email } = person;
  const { first, last } = person.name;
  const image = person.picture.large;
  const age = person.dob.age;
  const password = person.login.password;
  const street = `${person.location.street.number} ${person.location.street.name}`;
  return {
    phone,
    email,
    name: `${first} ${last}`,
    image,
    age,
    password,
    street,
  };
}

export default getUser;
