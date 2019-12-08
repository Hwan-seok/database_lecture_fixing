var mysql_dbc = require("./dbCon")();
var db = mysql_dbc.init();
mysql_dbc.test_open(db);
const majors = require("./major");
const randId = require("./makeId");
function getRandomInt(min, max) {
    //min ~ max 사이의 임의의 정수 반환
    return Math.floor(Math.random() * (max - min)) + min;
}
const email = ["naver.com", "kakao.com", "daum.net", "yahoo.jp", "yolo.ga"];
const companyNames = require("./companyList");
const makeKorean = require("./makeKorean");

let randInsert = ``;
for (let i = 0; i < 5000; i++) {
    randInsert = `insert into company (id,name,password,description,email) values("${randId(
        getRandomInt(5, 10)
    )}","${companyNames[getRandomInt(50, 60)]}","${randId(
        getRandomInt(60, 70)
    )}","${makeKorean()}","${randId(getRandomInt(7, 20))}@${
        email[getRandomInt(0, 4)]
    }")`;
    db.query(randInsert, (err, row, result) => {
        console.log(err);
        console.log(row);
    });
}
