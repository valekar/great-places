import { SQLite } from "expo-sqlite";

const db = SQLite.database("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
          "places " +
          "(id INTEGER PRIMARY KEY NOT NULL, " +
          "title TEXT NOT NULL, " +
          "imageUrl TEXT NOT NULL , " +
          "address TEXT NOT NULL, " +
          "lat REAL NOT NULL , " +
          "lng REAL NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = place => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO places(title, imageUrl,address, lat, lng) " +
          "VALUES(?,?,?,?,?)",
        [
          place.title,
          place.imageUrl,
          place.address.city,
          place.address.line1,
          place.address.line2
        ],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM places",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
