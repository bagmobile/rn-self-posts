import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('post.db');

export class DB {

    static execute(query, params = []) {
        return new Promise((resolve, reject = error => console.log(error)) => {
            db.transaction(tx => {
                    tx.executeSql(query,
                        params,
                        (_, {insertId, rows: {_array}}) => {
                            //console.log('SQL execute success: ', result);
                            resolve([insertId, _array]);
                        },
                        (_, error) => {
                            console.log('Execute error SQL : ', _, error);
                            reject(error)
                        })
                },
                error => {
                    console.log('Error transaction ', error);
                    reject(error)
                },
                () => {
                    //console.log('Transaction ok');
                }
            )
        })
    }

    static init() {
        return this.execute(
            'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL,  text TEXT NOT NULL, img TEXT, date TEXT, booked BOOL)'
        );
    }

    static getPosts() {
        return this.execute('SELECT * FROM posts')
    }

    static addPost(params) {
        return this.execute('INSERT INTO posts (text, img, date, booked) values (?, ?, ?, ?)', params);
    }

    static deletePost(id) {
        return this.execute('DELETE FROM posts WHERE id = ?', [id]);
    }

    static async updatePostBooked(id, booked) {
        return this.execute('UPDATE posts SET booked = ? WHERE id = ?', [booked, id]);
    }
}
