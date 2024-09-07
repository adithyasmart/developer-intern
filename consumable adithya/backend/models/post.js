const db = require('../database/db');

const Post = {
  create: (title, content) => {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function(err) {
        if (err) reject(err);
        resolve({ id: this.lastID, title, content });
      });
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM posts', [], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM posts WHERE id = ?', [id], function(err) {
        if (err) reject(err);
        resolve({ deletedId: id });
      });
    });
  }
};

module.exports = Post;
