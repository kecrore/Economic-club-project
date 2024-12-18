const app = document.getElementById("app");
let score = 0;
let chosenRole = "";

// Utility function to load pages dynamically
const loadPage = (page) => {
    app.innerHTML = page;
};

// Utility function for displaying result after a choice
const displayResult = (points, nextPage) => {


    score += points;
    return `
    <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">선택 결과</h2>
        <p class="text-gray-700 mb-4">이번 선택으로 얻은 점수: <span class="text-green-500 font-bold">${points}점</span></p>
        <p class="text-gray-600 mb-6">현재 점수: <span class="text-blue-500 font-bold">${score}점</span></p>
        <button class="btn btn-primary w-full" onclick="loadPage(${nextPage})">다음</button>
    </div>
    `;
};

// Role Selection Page
const page1 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h2 class="font-bold text-lg mb-3">가계</h2>
            <button class="btn btn-primary w-full" onclick="chooseRole('가계')">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h2 class="font-bold text-lg mb-3">기업</h2>
            <button class="btn btn-success w-full" onclick="chooseRole('기업')">선택</button>
        </div>
        <div class="card bg-yellow-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h2 class="font-bold text-lg mb-3">정부</h2>
            <button class="btn btn-warning w-full" onclick="chooseRole('정부')">선택</button>
        </div>
    </div>
`;

// 직업 선택 시 점수를 한 번만 적용
const chooseRole = (role) => {
    chosenRole = role;
    let points = 0;

    if (role === "가계") {
        points = 11;
    } else if (role === "기업") {
        points = rollDice();
    }
    loadPage(displayResult(points, "page2"));
};

const rollDice = () => {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
};

// Page 2: 선택상황1
const page2 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">엔화 투자</h3>
            <button class="btn btn-primary w-full" onclick="loadPage(displayResult(5, 'page3'))">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">일본 관광주식 투자</h3>
            <button class="btn btn-success w-full" onclick="loadPage(displayResult(4, 'page3'))">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">일본 원유주식 투자</h3>
            <button class="btn btn-danger w-full" onclick="loadPage(displayResult(-5, 'page3'))">선택</button>
        </div>
    </div>
`;

// Page 3: 선택상황2
const page3 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">나스닥 투자</h3>
            <button class="btn btn-danger w-full" onclick="loadPage(displayResult(-6, 'page4'))">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">석유 투자</h3>
            <button class="btn btn-success w-full" onclick="loadPage(displayResult(8, 'page4'))">선택</button>
        </div>
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">금 투자</h3>
            <button class="btn btn-primary w-full" onclick="loadPage(displayResult(5, 'page4'))">선택</button>
        </div>
    </div>
`;

// Page 4: 선택상황3
const page4 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">비트코인 투자</h3>
            <button class="btn btn-primary w-full" onclick="loadPage(displayResult(8, 'page5'))">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">테슬라 투자</h3>
            <button class="btn btn-success w-full" onclick="loadPage(displayResult(8, 'page5'))">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">현대자동차 투자</h3>
            <button class="btn btn-danger w-full" onclick="loadPage(displayResult(-6, 'page5'))">선택</button>
        </div>
    </div>
`;

// 경제 퀴즈 페이지
const page5 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">인플레이션</h3>
            <button class="btn btn-primary w-full" onclick="answer(1, 'page6')">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">스태그플레이션</h3>
            <button class="btn btn-success w-full" onclick="answer(0, 'page6')">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">디플레이션</h3>
            <button class="btn btn-danger w-full" onclick="answer(0, 'page6')">선택</button>
        </div>
    </div>
`;

const page6 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">존 메이넌드 케인스</h3>
            <button class="btn btn-primary w-full" onclick="answer(0, 'page7')">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">애덤 스미스</h3>
            <button class="btn btn-success w-full" onclick="answer(1, 'page7')">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">카를 마르크스</h3>
            <button class="btn btn-danger w-full" onclick="answer(0, 'page7')">선택</button>
        </div>
    </div>
`;

const page7 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">시장에 통화가 유입된다</h3>
            <button class="btn btn-primary w-full" onclick="answer(0, 'page8')">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">인플레이션 위험이 증가한다</h3>
            <button class="btn btn-success w-full" onclick="answer(0, 'page8')">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">주식 부동산의 가치가 올라간다</h3>
            <button class="btn btn-danger w-full" onclick="answer(1, 'page8')">선택</button>
        </div>
    </div>
`;

const page8 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">감소한다 </h3>
            <button class="btn btn-primary w-full" onclick="answer(0, 'page9')">선택</button>
        </div>
        
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">증가한다</h3>
            <button class="btn btn-danger w-full" onclick="answer(1, 'page9')">선택</button>
        </div>
    </div>
`;

const page9 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">국내총생산</h3>
            <button class="btn btn-primary w-full" onclick="answer(1, 'page10')">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">국내총수출</h3>
            <button class="btn btn-success w-full" onclick="answer(0, 'page10')">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">국민총생산</h3>
            <button class="btn btn-danger w-full" onclick="answer(0, 'page10')">선택</button>
        </div>
    </div>
`;

const page10 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">기업간 경쟁이 심하다</h3>
            <button class="btn btn-primary w-full" onclick="answer(0, 'page11')">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">한 개의 기업이 시장을 지배한다</h3>
            <button class="btn btn-success w-full" onclick="answer(1, 'page11')">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">수요 공급이 균형을 이룬다</h3>
            <button class="btn btn-danger w-full" onclick="answer(0, 'page11')">선택</button>
        </div>
    </div>
`;

const page11 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">낮음</h3>
            <button class="btn btn-primary w-full" onclick="loadPage(displayResult(2, 'page12'))">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">중간</h3>
            <button class="btn btn-success w-full" onclick="loadPage(displayResult(4, 'page12'))">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">높음</h3>
            <button class="btn btn-danger w-full" onclick="loadPage(displayResult(6, 'page12'))">선택</button>
        </div>
    </div>
`;

const page12 = `
    <div class="flex justify-around mt-6">
        <div class="card bg-blue-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">구간 맞음</h3>
            <button class="btn btn-primary w-full" onclick="(() => Lotto(0))()">선택</button>
        </div>
        <div class="card bg-green-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">숫자 맞음</h3>
            <button class="btn btn-success w-full" onclick="(() => Lotto(1))()">선택</button>
        </div>
        <div class="card bg-red-100 p-5 rounded-lg shadow-lg w-1/3 text-center">
            <h3 class="font-bold text-lg mb-3">해당 없음</h3>
            <button class="btn btn-danger w-full" onclick="(() => Lotto(2))()">선택</button>
        </div>
    </div>
`;



const Lotto = (type) => {
    let point = 0;
    if (type === 0) {
        point = 6;
    } else if (type === 1) {
        point = 15;
    } else if (type === 2) {
        point = 0;
    }

    loadPage(endPage(point));
};



const answer = (isRight, next) => {
    let point = 0;
    if (isRight === 1) {
        if (chosenRole === "정부") {
            point = 5;
        } else {
            point = 2;
        }
    } else {
        point = 0;
    }
    loadPage(displayResult(point, next));
};






const endPage = (point) => {
    score += point;
    return `
    <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">게임 종료</h2>
        <p class="text-gray-600 mb-6">최종 점수: <span class="text-blue-500 font-bold">${score}점</span></p>
    </div>
    `;
}

// Initialize the app
loadPage(page1);
