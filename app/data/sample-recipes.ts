import type { Recipe } from "@/types/recipe-types";

export const sampleRecipes: Recipe[] = [
    {
        id: 1,
        name: "치미추리",
        category: "소스",
        serving: 1,
        ingredients: [{
            name: "파슬리",
            quantity: 20,
            unit: "g",
            note: "잘게 다지기",
        },
        {
            name: "소금",
            quantity: 1,
            unit: "꼬집",
        }],
        steps: [{
            title: "파슬리를 손질합니다",
            description: "씻은 파슬리의 물기를 제거하고 잘게 다집니다."
        }],
    },
    {
        id: 2,
        name: "제육볶음",
        category: "메인 요리",
        serving: 2,
        ingredients: [{
            name: "돼지고기 앞다리살",
            quantity: 300,
            unit: "g",
        },
        {
            name: "파",
            quantity: 20,
            unit: "g",
            note: "두께는 5mm정도로 어슷이 썰기"
        }],
        steps: [{
            title: "돼지고기를 볶습니다.",
            description: "후라이팬에 기름을 살짝 두르고 중불로 불을 켜주고 팬에 불이 달아오르면 돼지고기를 넣고 불을 최대한 쎄게 올려줍니다."
        }, {
            title: "파를 넣어요.",
            description: "돼지고기가 80% ~ 90% 정도 익으면 썰어놓은 파를 넣고 빠르게 쎈불에 볶아 줍니다."
        }],
    },
    {
        id: 3,
        name: "티라미수",
        category: "디저트",
        serving: 3,
        ingredients: [{
            name: "레이디핑거",
            quantity: 500,
            unit: "g",
        }, {
            name: "블랙 커피",
            quantity: 250,
            unit: "ml",
            note: "뜨거운 커피가 중요!"
        }, {
            name: "마스카포네 치즈",
            quantity: 500,
            unit: "g"
        }],
        steps: [{
            title: "티라미수의 제일 아래인 밑판 준비",
            description: "뜨거운 블랙 커피를 넓은 그릇에 담아줍니다. 레이디 핑거 스낵을 커피에 양쪽 다 살짝 담구고 뺀 뒤 티라미수를 담을 그릇에 정렬하듯 올려줍니다."
        }, {
            title: "마스카포네 치즈 레이어링",
            description: "레이디핑거 스낵을 고르게 올려줬다면 그 위에 마스카포네 치즈를 올려 펴줍니다. 이걸 3겹으로 반복해줍니다."
        }],
    },
    {
        id: 4,
        name: "닭가슴살 부리또",
        category: "밀프렙",
        serving: 7,
        ingredients: [{
            name: "또르띠아",
            quantity: 7,
            unit: "ea"
        }, {
            name: "닭가슴살",
            quantity: 300,
            unit: "g",
            note: "먹기좋은 한입 사이즈로 자르기"
        }, {
            name: "소금",
            quantity: 10,
            unit: "g"
        }],
        steps: [{
            title: "닭가슴살 볶기",
            description: "후라이팬을 가스렌지에 올리고 중불로 올려줍니다. 불이 달아 오르면 기름을 세바퀴 정도 둘러주세요. 닭가슴살과 소금을 넣고 닭가슴살을 볶아주세요."
        }, {
            title: "또르띠아 토스트",
            description: "후라이팬을 가스렌지에 올리고 약불로 켜줍니다. 또르띠아를 올려 노릇한 색이되게 한 면당 20초씩 구워줍니다."
        }, {
            title: "부리또를 말아줍니다.",
            description: "노릇하게 구운 또르띠아를 도마에 올리고 그 위에 닭가슴살을 올려 양쪽 옆면을 먼저 접어 줍니다. 그 이후에 또르띠아 아랫면을 접고 말아줍니다. 다 말고나서 다시 후라이팬에 올려 약불로 40초간 구워줍니다."
        }],
    },
    {
        id: 5,
        name: "고단백 라자냐",
        category: "밀프렙",
        serving: 7,
        ingredients: [{
            name: "다진 소고기",
            quantity: 500,
            unit: "g",
        }, {
            name: "토마토 소스",
            quantity: 700,
            unit: "g"
        }],
        steps: [{
            title: "소고기를 볶아줍니다.",
            description: "후라이팬을 가스렌지에 올려 쎈불에 다진 소고기를 넣고 볶아줍니다. 소고기를 60% 정도 볶아주고 토마토 소스를 넣고 토마토 소스의 신맛이 날라갈때까지 약 3분정도 더 볶아 줍니다."
        }, {
            title: "라자냐를 오븐에서 익혀 줍니다.",
            description: "볶은 다진 소고기와 토마토 소스를 잘 섞어 오븐용 그릇에 넣고 호일로 감싸 포크 혹은 젓가락으로 구멍을 여러번 뚫어줍니다. 오븐에 라자냐를 넣어 180도에 30분동안 요리를 해줍니다."
        }],
    }
];