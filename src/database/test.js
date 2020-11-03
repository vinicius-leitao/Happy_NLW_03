const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  const newOrphanage = {
    id: 1,
    lat: '-22.8666973',
    lng: '-43.264725',
    name: 'Lar Esperança',
    about: 'Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '02199999-9999',
    images: [
        'https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9','https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    ].toString(),
    instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Horário de visitas Das 8h até as 18h',
    open_on_weekends: '1' 
  }

  //Inserir dados na tabela
  await saveOrphanage(db, newOrphanage);

  //Consultar todos os dados da tabela de todos os orfanatos
  // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  // console.log(selectedOrphanages)

  // //Consultar todos os dados de somente 1 orfanato pelo ID
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  // console.log(orphanage);

  //Deletar um dado da tabela

  // await db.run("DELETE FROM orphanages WHERE id= '2'")

  //Deletar todos os dados da tabela

  // await db.run("DELETE FROM orphanages")
});
