insert into public.recipes (
    name,
    category_id,
    description,
    serving,
    prep_minutes,
    cook_minutes,
    difficulty,
    chef_note
)

values(
    '새우젓 돼지고기 김치찌개',
    2,
    '돼지고기와 잘 익은 김치에 새우젓과 진간장으로 간을 하고, 약불에서 푹 끓이는 김치찌개입니다.',
    3,
    5,
    30,
    '쉬움',
    '재료를 모두 넣고 찌개가 끓기 시작하면 약불로 줄여 약 20분 끓여주세요. 불을 끄고 한김 식힌 다음, 다시 강불에 올려 약 5분 더 끓여줍니다. 한 번 식혔다 다시 끓였을 때 돼지고기의 기름과 국물 맛이 더 잘 어우러져, 제가 즐겨 쓰는 방법입니다.'
)

returning id, name, category_id, serving;

insert into public.recipe_ingredients (
    recipe_id,
    name,
    quantity,
    unit, 
    note,
    sort_order
)

values
    (1, '김치', 600, 'g', '잘 익은 김치 사용', 1),
    (1, '돼지고기 앞다리살', 300, 'g', '찌개용으로 썰기', 2),
    (1, '두부', 150, 'g', null, 3)

returning recipe_id, name, quantity, unit, note, sort_order;

insert into public.recipe_ingredients (
    recipe_id,
    name,
    quantity,
    unit,
    note,
    sort_order
)

values
    (1, '김치', 600, 'g', '기본 3인분 기준: 약 ¼포기. 잘 익은 김치 사용', 1),
    (1, '돼지고기 앞다리살', 300, 'g', '찌개용으로 먹기 좋게 썰기', 2),
    (1, '두부', 150, 'g', '기본 3인분 기준: 300g 제품의 ½모', 3),
    (1, '양파', 200, 'g', '기본 3인분 기준: 약 1개. 껍질 제거 후 계량', 4),
    (1, '대파', 100, 'g', '기본 3인분 기준: 약 1대. 손질 후 계량', 5),
    (1, '다진 마늘', 20, 'g', '기본 3인분 기준: 약 1스푼', 6),
    (1, '새우젓', 20, 'g', '기본 3인분 기준: 약 1스푼', 7),
    (1, '진간장', 15, 'ml', '기본 3인분 기준: 계량스푼 1큰술(15ml)', 8),
    (1, '고춧가루', 14, 'g', '기본 3인분 기준: 약 2스푼', 9),
    (1, '식용유', 10, 'ml', '기본 3인분 참고: 냄비에 가볍게 한 바퀴 정도. 볶을 때 사용', 10),
    (1, '김치 국물', 100, 'ml', '기본 3인분 기준: 200ml 계량컵의 ½컵', 11),
    (1, '물', 1000, 'ml', '기본 3인분 기준: 처음 넣는 물 1L', 12)
on conflict (recipe_id, sort_order)
do update set note = excluded.note
returning recipe_id, name, quantity, unit, note, sort_order;

insert into public.recipe_steps (
    recipe_id,
    title,
    description,
    sort_order
)
values 
    (1, '재료 손질하기', '김치와 돼지고기, 두부를 먹기 좋은 크기로 썰고, 양파와 대파도 썰어 준비해주세요.', 1),
    (1, '돼지고기 볶기', '냄비에 식용유를 두르고 돼지고기를 먼저 볶아주세요.', 2),
    (1, '김치 함께 볶기', '돼지고기를 볶던 냄비에 김치를 넣고 함께 볶아주세요.', 3),
    (1, '나머지 재료 넣고 끓이기', '물과 김치 국물, 양파, 대파, 두부, 다진 마늘, 새우젓, 진간장, 고춧가루를 넣고 끓여주세요.', 4),
    (1, '약불로 푹 끓이기', '찌개가 끓기 시작하면 약불로 줄여 약 20분 끓여주세요.', 5),
    (1, '한김 식히기', '불을 끄고 찌개를 한김 식혀주세요.', 6),
    (1, '강불로 다시 끓이기', '한김 식힌 찌개를 다시 강불에 올려 약 5분 더 끓여주세요.', 7)
on conflict (recipe_id, sort_order)
do update set
    title = excluded.title,
    description = excluded.description
returning sort_order, title, description;