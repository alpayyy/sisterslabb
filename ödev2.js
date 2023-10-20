const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
  ];
  
 //1.soru başı
  const WaterPokemon = pokemons.filter((pokemon) => {
     return pokemon.type==="Water"
    })
    .map((pokemon) => {
        return pokemon.name;
    });
  console.log(`"Water" türündeki Pokemon sayısı: ${WaterPokemon.length} `);
  console.log(`"Water" türündeki Pokemon isimleri: ${WaterPokemon} `);
  //1.soru sonu


  //2.soru başı
   const doubledExperience = pokemons.map((pokemon) => ({
    name: pokemon.name,
    experience: pokemon.experience * 2,
}));

console.log(doubledExperience);

  //2.soru sonu 

 
  //3.soru
  const allWater=pokemons.filter((pokemon)=>pokemons.type==="Water")
  .every((pokemon)=>pokemon.experience>=60);
  const allFire=pokemons.filter((pokemon)=>pokemons.type==="Fire")
  .some((pokemon)=>pokemons.experience>=70);
  console.log(
    "Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?",
    allWaterPokemonsHighExperience
  );

  console.log(
    "'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?",
    someFirePokemonHighExperience
  );
  //3.sonu
  
  //4.soru başı
  const totalElectricExperience=pokemons.reduce((acc,curr)=>{
    return acc+curr.experience;
  },0);
  
  console.log(
    "Electric türündeki Pokemon'ların toplam deneyim puanı: " +
      totalElectricExperience
  );
  const typeExperienceAverages=pokemons.reduce((ac,total)=>{
    return ac+total.experience;
  },0);
  //4.soru sonu

  //Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
  console.log(typeExperienceAverages);