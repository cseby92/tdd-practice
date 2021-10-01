// const db = require('../db/connection');
// const UserRepository = require('./UserRepository');
// const expect = require('chai').expect;
//
// describe('User Repository with DB', () => {
//    describe('#createUser', () => {
//       let connection;
//       let userRepository;
//
//       beforeEach(async () => {
//          db.connect();
//          connection = db.getInstance();
//
//          await connection.raw('DELETE FROM users');
//          await connection.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
//          await connection.raw(`UPDATE users SET id=nextval('users_id_seq')`);
//
//          userRepository = new UserRepository(db);
//       });
//
//       afterEach(() => {
//          connection.destroy();
//       });
//
//       describe('happy path', () => {
//          const user = {
//             username: 'geri',
//             email: 'gergo.kovacs@emarsys.com',
//             secret: 'almafa'
//          }
//
//          let returnedUser;
//
//          beforeEach(async () => {
//             returnedUser = await userRepository.createUser(user);
//          });
//
//          it('inserts a single record into the db', async () => {
//             const result = await connection.raw(`SELECT * FROM users`);
//             expect(result.rows.length).to.equals(1);
//
//          });
//
//          it('inserts the record with the given properties', async () => {
//             const [ insertedUser ] = (await connection.raw(`SELECT * FROM users`)).rows;
//
//             expect(insertedUser.username).to.equals(user.username);
//             expect(insertedUser.email).to.equals(user.email);
//             expect(insertedUser.secret).to.equals(user.secret);
//          });
//
//          it('returns the created user object', async () => {
//             expect(returnedUser.username).to.equals(user.username);
//             expect(returnedUser.email).to.equals(user.email);
//             expect(returnedUser.secret).to.equals(user.secret);
//             expect(returnedUser.id).to.equals(1);
//          });
//
//       });
//
//       it('not vulnerable to SQL injection', async () => {
//          const userWithInjection = {
//             username: '',
//             email: '',
//             secret: "'); DELETE FROM users; --"
//          }
//          await userRepository.createUser(userWithInjection);
//
//          const result = await connection.raw(`SELECT * FROM users`);
//          expect(result.rows.length).to.equals(1);
//       });
//    });
// });
