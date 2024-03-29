var win = 0;
var winCount = 0;
var turn = true;
var nodeList = [];
var body = document.body;
var table = document.createElement("table");

function reset() {
  // table 태그를 삭제 : removeChild => 삭제를 안하고 초기화를 시키면 배열이 계속 늘어남
  body.removeChild(document.getElementById("game"));

  // table 태그를 새로 그리기
  init();
}

function winCheck() {
  // 가로 검사
  // 00 01 02
  // 10 11 12
  // 20 21 22
  for (var i = 0; i < 3; i++) {
    if (
      nodeList[i][0].textContent == "O" &&
      nodeList[i][1].textContent == "O" &&
      nodeList[i][2].textContent == "O"
    ) {
      win = 1;
    }
    if (
      nodeList[i][0].textContent == "X" &&
      nodeList[i][1].textContent == "X" &&
      nodeList[i][2].textContent == "X"
    ) {
      win = 2;
    }
  }

  // 세로 검사
  // 00 10 20
  // 01 11 21
  // 02 12 22
  for (var i = 0; i < 3; i++) {
    if (
      nodeList[0][i].textContent == "O" &&
      nodeList[1][i].textContent == "O" &&
      nodeList[2][i].textContent == "O"
    ) {
      win = 1;
    }
    if (
      nodeList[0][i].textContent == "X" &&
      nodeList[1][i].textContent == "X" &&
      nodeList[2][i].textContent == "X"
    ) {
      win = 2;
    }
  }

  // 대각선\ 검사
  // 00 11 22
  if (
    nodeList[0][0].textContent == "O" &&
    nodeList[1][1].textContent == "O" &&
    nodeList[2][2].textContent == "O"
  ) {
    win = 1;
  }
  if (
    nodeList[0][0].textContent == "X" &&
    nodeList[1][1].textContent == "X" &&
    nodeList[2][2].textContent == "X"
  ) {
    win = 2;
  }

  // 대각선/ 검사
  // 02 11 20
  if (
    nodeList[0][2].textContent == "O" &&
    nodeList[1][1].textContent == "O" &&
    nodeList[2][0].textContent == "O"
  ) {
    win = 1;
  }
  if (
    nodeList[0][2].textContent == "X" &&
    nodeList[1][1].textContent == "X" &&
    nodeList[2][0].textContent == "X"
  ) {
    win = 2;
  }

  // 무승부
  if (win == 0 && winCount == 9) {
    win = 3;
  }

  // 검사 결과
  var msg = "틱택토 게임을 시작합니다.";
  if (turn) {
    msg = "p1";
  } else {
    msg = "p2";
  }

  if (win == 1) {
    msg = "[p1]승리";
    reset();
  } else if (win == 2) {
    msg = "[p2]승리";
    reset();
  } else if (win == 3) {
    msg = "무승부";
    reset();
  }
  document.getElementById("msg").innerHTML = msg;
}

var nodeEvent = function (e) {
  var target = e.target;
  if (target.textContent == "") {
    if (turn) {
      target.textContent = "O";
      winCount += 1;
      //   msg = "p1";
    } else {
      target.textContent = "X";
      winCount += 1;
      //   msg = "p2";
    }
    turn = !turn;
  }

  winCheck();
};

function init() {
  win = 0; // 1 : p1승리 2 : p2승리 3 : 무승부
  winCount = 0; // 지금 회차가 얼마인지 9가되면 종료
  turn = true; // p1인지 p2인지
  nodeList = []; // 판정을 위해 배열에 저장
  body = document.body;
  table = document.createElement("table");
  table.id = "game"; // <table id = "game"> </table>
  document.getElementById("msg").innerHTML = "틱택토 게임을 시작합니다."; // <div>사이에 글을 삽입할때

  for (var i = 0; i < 3; i++) {
    var line = document.createElement("tr");
    nodeList.push([]);
    for (var j = 0; j < 3; j++) {
      var node = document.createElement("td");
      node.textContent = ""; // td에 글을 사용할때
      node.addEventListener("click", nodeEvent);
      line.append(node);

      nodeList[i].push(node);
    }
    table.append(line);
  }
  body.append(table);
}

init(); // start

// td => textContent
// div => innerHtml
// 사용하는게 다르다.
