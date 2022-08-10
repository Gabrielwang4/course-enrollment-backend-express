import mysql from 'mysql2';
import mySqlConfig from '../config/mysql.js';

// build the db connection pool
const pool = mysql.createPool(mySqlConfig);

/*
 * A generic function for running sql query
 * @param { string } sql the sql statement
 * @return { Promise }
 */
async function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
}

export default query;