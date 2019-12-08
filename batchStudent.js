var mysql_dbc = require("./dbCon")();
var db = mysql_dbc.init();
mysql_dbc.test_open(db);
const majors = require("./major");
const randId = require("./makeId");
function getRandomInt(min, max) {
    //min ~ max 사이의 임의의 정수 반환
    return Math.floor(Math.random() * (max - min)) + min;
}
const sex = ["MAN", "WOMAN"];
const email = ["naver.com", "kakao.com", "daum.net", "yahoo.jp", "yolo.ga"];
const randomName = require("./randomName");

let randInsert = ``;
for (let i = 0; i < 5000; i++) {
    randInsert = `insert into student (id,password,name,major,sex,age,email) values("${randId(
        getRandomInt(5, 10)
    )}","${randId(getRandomInt(50, 60))}","${randomName()}","${
        majors[getRandomInt(73)]
    }","${sex[getRandomInt(0, 1)]}","${getRandomInt(23, 30)}","${randId(
        getRandomInt(7, 20)
    )}@${email[getRandomInt(0, 4)]}")`;
    db.query(randInsert, (err, row, result) => {
        console.log(err);
        console.log(row);
    });
}
