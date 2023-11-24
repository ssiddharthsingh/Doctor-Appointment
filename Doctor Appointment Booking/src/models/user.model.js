const { dbConn } = require("../../config/config");

class User {
  static checkUserexistance(email) {
    const query = "select COUNT(email) AS isEmail from users where email = ?";
    return new Promise((resolve, reject) => {
      dbConn.query(query, [email], (err, res) => {
        console.log(err, res);
        if (err) reject(err);
        else resolve(res[0].isEmail);
      });
    });
  }

  static getUsers() {
    const query = "SELECT * FROM users";
    return new Promise((resolve, reject) => {
      dbConn.query(query, [], (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }


  static getUser(email) {
    const query =
      "select name, email, password, phone, address, second_address AS secondAddress, role, pic, docof from users where email = ?";
    return new Promise((resolve, reject) => {
      dbConn.query(query, [email], (err, res) => {
        console.log(err, res);
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  static createUser(userData) {
    const query =
      "insert into users (name,email,password,phone,address,second_address,role,pic,docof) values (?,?,?,?,?,?,?,?,?)";
    return new Promise((resolve, reject) => {
      dbConn.query(
        query,
        [
          userData.name,
          userData.userEmail,
          userData.password,
          userData.phone,
          userData.address,
          userData.second_address,
          userData.role,
          userData.pic,
          userData.docof,
        ],
        (err, res) => {
          console.log(err,res)
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  }

  static updateUser(userData) {
    const query =
      "update users set name = ?, password =?,phone =?, address = ?, second_address = ? where id = ?";
    return new Promise((resolve, reject) => {
      dbConn.query(
        query,
        [
          userData.name,
          userData.password,
          userData.phone,
          userData.address,
          userData.second_address,
          Number(userData.id),
        ],
        (err, res) => {
          console.log(err,res)
          if (err) reject(err);
          else resolve(res);
        }
      );
    });
  }

  static deleteUser(id) {
    const query = "delete FROM users where id = ?";
    return new Promise((resolve, reject) => {
      dbConn.query(query, [Number(id)], (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  static getDoctors() {
    const query = "SELECT docof FROM users WHERE role = 'doctor'";
    return new Promise((resolve, reject) => {
      dbConn.query(query, [], (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

module.exports = User;
