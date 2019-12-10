var mysql_dbc = require("./dbCon")();
var db = mysql_dbc.init();
mysql_dbc.test_open(db);
const majors = require("./major");
const randId = require("./makeId");
function getRandomInt(min, max) {
    //min ~ max 사이의 임의의 정수 반환
    return Math.floor(Math.random() * (max - min)) + min;
}
function twoDigits(d) {
    if (0 <= d && d < 10) return "0" + d.toString();
    if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return (
        this.getUTCFullYear() +
        "-" +
        twoDigits(1 + this.getUTCMonth()) +
        "-" +
        twoDigits(this.getUTCDate()) +
        " " +
        twoDigits(this.getUTCHours()) +
        ":" +
        twoDigits(this.getUTCMinutes()) +
        ":" +
        twoDigits(this.getUTCSeconds())
    );
};
const email = ["naver.com", "kakao.com", "daum.net", "yahoo.jp", "yolo.ga"];
const companyNames = require("./companyList");
const makeKorean = require("./makeKorean");
const hiredStatus = ["Y", "N"];
let randInsert = ``;
let newDate;
let date = new Date();
for (let i = 0; i < 5000; i++) {
    newDate = new Date(
        date.setTime(date.getTime() - getRandomInt(1, 300) * 86400000)
    );
    randInsert = `insert into appliance (recruitment_idx,student_idx,is_hired,appliance_date) values(${getRandomInt(
        1,
        5000
    )},${getRandomInt(1, 5000)},"${
        hiredStatus[getRandomInt(0, 2)]
    }","${newDate.toMysqlFormat()}")`;
    db.query(randInsert, (err, row, result) => {
        console.log(err);
        console.log(row);
    });
}
