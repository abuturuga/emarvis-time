const MongoClient = require('mongodb').MongoClient;


const connect = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost/emarvis-time', (err, db) => {
      if (err) reject(err);
      else resolve(db);
    });
  });
}

const dropCollection = (db, collection) => {
  return new Promise((resolve, reject) => {
    collection.drop((err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
    resolve();
  });
}

const seedCollection = (collection, docs) => {
  return new Promise((resolve, reject) => {
    collection.insertMany(docs, {w: 1}, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

const getDocs = () => {
  let unitsDocs = [], projectsDocs = [];

  unitsDocs = Array(10).fill(0).map((val, index) => {
    return {
      title: `Task ${index}`,
      description: ''
    };
  });

  return {unitsDocs, projectsDocs};
};

const execute = async () => {
  try {
    const db = await connect(),
          units = db.collection('units');
          projects = db.collection('units'),
          {unitsDocs, projectsDocs} = getDocs();

    await dropCollection(db, units);
    await seedCollection(units, unitsDocs);

    //await dropCollection(db, projects);
    //await seedCollection(projects, projectsDocs);
    //

  } catch(error) {
    console.log(error);
  } finally {
    console.log('done');
  }
};

execute();
