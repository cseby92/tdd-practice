// const UserRepository = require('./UserRepository');
// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// chai.use(sinonChai);
// const expect = require('chai').expect;
//
//
// describe('User Repository with mocks', () => {
//    describe('#createUser', () => {
//       let mockDb;
//       let mockConnection;
//       let userRepository;
//       let isConnectionDestroyAwaited;
//
//       beforeEach(async () => {
//          isConnectionDestroyAwaited = false;
//          const connectionDestroyPromise = new Promise((resolve) => {
//             setTimeout(() => {
//                isConnectionDestroyAwaited = true;
//                resolve();
//             }, 200);
//          });
//
//          mockConnection = {
//             destroy: sinon.stub().returns(connectionDestroyPromise),
//             raw: sinon.stub()
//          };
//          mockDb = {
//             connect: sinon.stub(),
//             getInstance: sinon.stub().returns(mockConnection)
//          };
//
//          userRepository = new UserRepository(mockDb);
//       });
//
//       describe('happy path', () => {
//          const user = {
//             username: 'geri',
//             email: 'gergo.kovacs@emarsys.com',
//             secret: 'almafa'
//          }
//
//          const expectedReturnedUser = {
//             username: 'geri',
//             email: 'gergo.kovacs@emarsys.com',
//             secret: 'almafa',
//             id: 1
//          }
//
//          let returnedUser;
//
//          beforeEach(async () => {
//             mockConnection.raw.resolves({ rows: [expectedReturnedUser] });
//             returnedUser = await userRepository.createUser(user);
//          });
//
//          it('connects to the database', async () => {
//             expect(mockDb.connect).to.have.been.called;
//          });
//
//          it('destroys the connection upon finishing the work', async () => {
//             expect(mockConnection.destroy).to.have.been.called;
//             expect(isConnectionDestroyAwaited).to.equals(true);
//          });
//
//          it('inserts the data using the database connection', () => {
//             expect(mockConnection.raw).to.have.been.calledWithExactly(
//                 'INSERT INTO users (username, email, secret) VALUES (?, ?, ?) RETURNING id',
//                 [user.username, user.email, user.secret]
//             );
//          });
//
//          it('inserts the data using the database connection', () => {
//             expect(returnedUser).to.deep.equals(expectedReturnedUser);
//          });
//       });
//    });
// });
