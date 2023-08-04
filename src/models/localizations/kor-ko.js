const facts = [
  "1987년 고양이는 개를 제치고 미국 최고의 반려동물로 등극했습니다.",
  "함께 사는 고양이는 때때로 싸우려는 의도가 없다는 것을 보여주기 위해 서로의 머리를 문지릅니다. 어린 고양이는 특히 흥분 할 때 더 자주 이렇게합니다.",
  "어미 고양이는 새끼 고양이에게 쓰레기통을 사용하도록 가르칩니다.",
  "생애 초기에 새끼 고양이를 대하는 방식에 따라 나중에 성격 특성이 결정됩니다.",
  "일반적인 믿음과는 달리 고양이는 사회적 동물입니다. 애완용 고양이는 말에 반응하고 대답 할 것이며 인간의 동반자 관계를 즐기는 것 같습니다.",
  "잘 치료하면 고양이는 20 년 이상 살 수 있지만 집 고양이의 평균 수명은 14 년입니다.",
  "고양이를 중성화하면 수명이 2 ~ 3 년 연장됩니다.",
  "고양이, 특히 나이든 고양이는 암에 걸립니다. 많은 경우이 질병은 성공적으로 치료할 수 있습니다.",
  "고양이는 단 것을 맛볼 수 없습니다.",
  "고양이는 스스로 생산할 수 없기 때문에 식단에 지방이 있어야합니다.",
  "고양이에게 유독 한 몇 가지 일반적인 관엽 식물은 다음과 같습니다: 잉글리쉬 아이비, 아이리스, 겨우살이, 필로 덴 드론 및 주목입니다.",
  "타이레놀과 초콜릿은 모두 고양이에게 유독합니다.",
  "많은 고양이가 우유를 제대로 소화하지 못합니다. 우유와 유제품은 설사를 유발합니다.",
  "평균 고양이 사료 식사는 약 5 마리의 쥐에 해당합니다.",
  "고양이는 벼룩을 먹음으로써 촌충에 감염될 수 있습니다. 이 기생충은 고양이 몸속에 영원히 살거나 약으로 제거될 때까지 살 수 있습니다. 긴 몸의 끝에서 연결 고리를 흘려서 번식합니다. 이 고리는 고양이의 항문으로 기어 나와 수백 개의 알을 낳습니다. 이 알은 벼룩 유충에 의해 주입되고 주기는 계속됩니다. 사람 역시 촌충에 감염될 수 있지만, 감염된 벼룩을 먹었을 경우에만 감염됩니다. 촌충이 있는 고양이는 수의사에게 구충을 받아야 합니다.",
  "고양이는 쥐를 잡아먹으면 촌충에 감염될 수 있습니다. 고양이가 쥐를 잡으면 상을 빼앗는 것이 가장 좋습니다.",
  "고양이에게 에이즈의 한 형태가 존재합니다.",
  "샴 고양이의 점의 색은 열과 관련이 있습니다. 시원한 부분은 더 어둡습니다.",
  "샴 새끼 고양이는 출생 전 엄마 자궁 내부의 열 때문에 하얗게 태어납니다. 이 열은 새끼 고양이의 털이 포인트에서 어두워지는 것을 방지합니다.",
  "고양이 알레르기가 있는 사람들은 실제로 고양이 타액이나 고양이 비듬에 알레르기가 있습니다. 거주하는 고양이가 정기적으로 목욕을하면 알레르기가있는 사람들이 더 잘 견딜 수 있습니다.",
  "연구에 따르면 고양이의 알레르겐은 고양이의 후각샘과 관련이 있다고 합니다. 고양이는 얼굴과 꼬리 밑부분에 후각선이 있습니다. 수컷 고양이가 가장 많은 냄새를 풍깁니다. 이 냄새샘에서 나오는 분비물이 알레르기 항원이라면 알레르기가 있는 사람은 중성화된 암컷 고양이를 가장 잘 견뎌야 합니다.",
  "고양이는 자신이 작은 사람이라고 생각하지 않습니다. 그들은 우리가 큰 고양이라고 생각합니다. 이것은 여러 가지 방식으로 그들의 행동에 영향을 미칩니다.",
  "고양이는 잇몸 질환과 충치에 걸리기 쉽습니다. 일년에 한 번 수의사나 고양이 치과에서 치아를 청소해야 합니다.",
  "많은 사람들이 고양이로부터 원충성 질병인 톡소플라스마증에 감염되는 것을 두려워합니다. 이 질병은 사람에게 질병을 일으킬 수 있지만 더 심각한 것은 태아에게 선천적 결함을 유발할 수 있다는 것입니다. 톡소플라즈마증은 흔한 질병으로 고양이의 대변을 통해 전염되기도 합니다. 날고기나 희귀 쇠고기를 먹을 때 가장 자주 발생합니다. 임산부와 면역 체계가 저하 된 사람은 고양이 쓰레기통을 만지지 않아야합니다. 그 외에는이 사람들이 고양이를 피해야 할 이유가 없습니다.",
  "모든 집 고양이의 조상은 오늘날에도 여전히 존재하는 아프리카 야생 고양이입니다.",
  "고대 이집트에서 고양이를 죽이는 것은 사형에 처할 수 있는 범죄였습니다.",
  "고대 이집트에서는 고양이로 미라를 만들고 방부 처리한 쥐를 무덤에 함께 넣었습니다. 한 고대 도시에서는 30만 마리가 넘는 고양이 미라가 발견되었습니다.",
  "중세에는 성 요한 축제 기간 동안 고양이가 마을 광장에서 산 채로 불에 탔습니다.",
  "최초의 고양이 쇼는 1871 년 런던의 크리스탈 팰리스에서 열렸습니다.",
  "오늘날 국내 고양이에는 약 100 가지 품종이 있습니다.",
  "새와 마찬가지로 고양이는 생체 시계, 태양의 각도 및 지구 자기장을 사용하는 귀환 능력을 가지고 있습니다. 집에서 멀리 떨어진 고양이는 집으로 돌아올 수 있습니다. 그러나 고양이의 주인이 집에서 멀리 이사하면 고양이는 주인을 찾을 수 없습니다.",
  "고양이는 포식자로부터 흔적을 가리기 위해 배설물을 묻습니다.",
  "고양이는 하루에 16~18시간 잠을 잔다. 고양이는 잠을 자고 있을 때에도 외부에서 들어오는 자극에 대해 경계하고 있습니다. 잠자는 고양이의 꼬리를 찌르면 그에 따라 반응합니다.",
  "고양이는 코로 냄새를 맡는 것 외에도 입 윗면에 위치한 제이콥슨 기관이라는 추가 기관으로 냄새를 맡을 수 있습니다.",
  "신선한 수돗물의 염소는 고양이 코의 민감한 부분을 자극합니다. 고양이에게 수돗물을주기 전에 24 시간 동안 그대로 두십시오.",
  "에이브러햄 링컨은 고양이를 사랑했습니다. 그는 백악관에 사는 동안 네 마리를 키 웠습니다.",
  "줄리어스 시저, 앙리 2세, 찰스 11세, 나폴레옹은 모두 고양이를 무서워했다.",
  "고양이는 평균 24 개의 수염을 가지고 있으며 양쪽에 가로로 4 줄로 배열되어 있습니다.",
  "다양한 언어로 된 '고양이'라는 단어: 프랑스어: 채팅; 독일어: 카체; 이탈리아어: 가토; 스페인어/포르투갈어: 가토; 이디시어: 카츠; 몰타어: 콰투스; 스웨덴어/노르웨이어: 카트; 네덜란드어: 캣; 아이슬란드어: 코투르; 그리스어: 카타; 힌두어: 카타스; 일본어: 네코; 폴란드어: 콧; 우크라이나어: 코툭; 하와이아어: 포포키; 러시아어: 코시카; 라틴어: 캣투스; 이집트어: 마우; 터키어: 케디; 아르메니아어: 가츠; 중국어: 마오; 아랍어: 비스; 인도네시아어: 쿠칭; 불가리아어: 코카; 말레이어: 쿠칭; 태국어/베트남어: 메오; 루마니아어: 피시카; 리투아니아어: 카티나스; 체코어: 코카; 슬로바키아어: 맥카; 아르메니아어: 가츠; 바스크어: 카투아; 에스토니아어: 카스; 핀란드어: 키사; 스와힐리어: 파카.",
  "통계에 따르면 최근 몇 년 동안 동물 애호가들은 개보다 고양이를 더 선호하는 것으로 나타났습니다!",
  "고양이는 목줄로 걷는 법을 배울 수 있지만 가르치려면 많은 시간과 인내가 필요합니다. 고양이가 어릴수록 배우기가 더 쉬울 것입니다.",
  "가르랑거리는 소리가 항상 행복을 의미하는 것은 아닙니다. 고양이가 출산 중과 같이 끔찍한 고통을 겪고 있다는 것을 의미 할 수 있습니다. 새끼 고양이는 수유 중에 충분한 젖을 먹고 있다는 것을 알리기 위해 어미 고양이에게 가르랑거립니다. 가르릉거리는 것은 숨을 들이쉬고 내쉬는 과정으로, 대개 입을 다물고 있는 상태에서 이루어집니다. 하지만 집사가 부드럽게 쓰다듬고 가까이 안아줄 때 고양이가 가르랑거린다면 행복한 고양이입니다!'라고 설명합니다",
  "캣닙 식물에는 헤페탈락톤이라는 오일이 함유되어 있는데, 이는 마리화나가 일부 사람들에게 하는 것과 같은 작용을 고양이에게 합니다. 모든 고양이가 이에 반응하는 것은 아니며, 일부 고양이는 무아지경 상태에 빠지는 것처럼 보입니다. 긍정적 인 반응은 고양이가 캣닙 냄새를 맡고 핥고, 물고, 씹고, 반복적으로 문지르고 구르고, 가르릉 거리고, 야옹 거리고, 심지어 공중으로 뛰어 오르는 형태를 취합니다.",
  "모든 고양이 종 중에서 집고양이는 걸을 때 꼬리를 수직으로 세울 수 있는 유일한 종입니다. 모든 종의 야생 고양이는 걸을 때 꼬리를 수평으로 세우거나 다리 사이에 끼고 걷습니다.",
  "행복한 고양이는 꼬리를 높이 들고 안정적으로 유지합니다.",
  "고양이 뼈의 거의 10%가 꼬리에 있으며, 꼬리는 균형을 유지하는 데 사용됩니다.",
  "고양이 가족은 보통 짝수에서 가장 잘 놀아요. 고양이와 새끼 고양이는 가능하면 쌍으로 구입해야합니다.",
  "굽는 초콜릿은 고양이에게 가장 위험한 초콜릿입니다.",
  "다리가 몸과 연결되는 뒷다리 안쪽에서 고양이의 맥박을 확인합니다. 고양이의 경우 정상 : 분당 110-170 회.",
  "재규어는 포효하지 않는 유일한 큰 고양이입니다.",
  "고양이의 시야는 약 185도입니다.",
  "고양이는 긁는 표면과 각도에 대한 개별적인 선호도가 있습니다. 어떤 고양이는 수평으로 긁는 반면 다른 고양이는 수직으로 발톱을 움직입니다.",
  "메인 쿤은 유일한 아메리카 원주민 장모 품종입니다.",
  "메인 쿤은 가장 작은 고양이 품종인 싱가 푸라보다 4 ~ 5 배 더 큽니다.",
  "얼룩 고양이는 현재 이라크의 수도인 바그다드의 한 지역 인 Attab에서 이름을 딴 것으로 생각됩니다.",
  "접이식 발톱은 고양이를 다른 동물계와 차별화하는 신체적 현상입니다. 고양이과에서는 치타 만이 발톱을 접을 수 없습니다.",
  "모든 고양이가 캣닙에 취하는 것은 아닙니다. 고양이가 반응하는지 여부는 열성 유전자에 따라 달라집니다. 유전자가 없으면 기쁨도 없습니다.",
  "고양이는 시속 약 31 마일로 질주 할 수 있습니다.",
  "고대 이집트에서는 가족 고양이가 죽으면 모든 가족 구성원이 애도의 표시로 눈썹을 면도했습니다.",
  "고양이는 개보다 절반 정도 더 오래 길들여졌습니다.",
  "고양이의 수염은 일종의 레이더로 생각되어 고양이가 걸어갈 공간을 측정하는 데 도움이됩니다.",
  "고양이는 하루에 5시간 이상 그루밍을 할 수 있습니다.",
  "모든 고양이는 수염, 눈썹, 발바닥 사이의 털 등 압력에 민감한 세 세트의 긴 털을 가지고 있습니다.",
  "인간과 고양이는 모두 감정을 담당하는 뇌의 동일한 영역을 가지고 있습니다.",
  "고양이의 뇌는 개보다 사람의 뇌와 더 비슷합니다.",
  "고양이는 인간보다 뼈가 더 많습니다. 인간은 20 개, 고양이는 230개입니다.",
  "고양이는 척추뼈가 30 개로 인간보다 5개 더 많습니다.",
  "고양이는 미국에서 가장 인기 있는 반려동물입니다: 8,800만 마리의 애완용 고양이와 7,400만 마리의 개가 있습니다.",
  "고양이는 귀를 제어하는 20 개 이상의 근육을 가지고 있습니다.",
  "고양이 그룹을 클라우더라고합니다.",
  "32층(320미터) 이상에서 콘크리트 바닥에 떨어져도 살아남은 고양이가 있습니다.",
  "고양이는 인생의 70%를 자는데 사용합니다.",
  "한 고양이가 알래스카 토키트나에서 15년 동안 시장을 지냈습니다. 그의 이름은 스텁스입니다.",
  "한 고양이가 2013 년 멕시코 시티 시장에 출마했습니다.",
  "호랑이와 얼룩말에서 혀의 중앙은 고기를 떼어 내고 잡는 데 사용되는 뒤쪽을 가리키는 가시로 덮여 있습니다.",
  "고양이가 찡그린다는 것은 보통 '냄새를 맡는 것'입니다. 고양이에게는 약간의 호흡 조절을 통해 공기를 맛볼 수있는 추가 기관이 있습니다",
  "고양이는 단맛을 맛볼 수 없습니다.",
  "고양이를 키우면 뇌졸중과 심장마비의 위험을 1/3로 줄일 수 있습니다.",
  "위키피디아에 고양이 야옹하는 소리가 녹음되어 있는데 특별한 이유는 없습니다.",
  "세계에서 가장 큰 고양이는 길이가 48.5 인치입니다. https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "증거에 따르면 길들여진 고양이는 이집트 파라오보다 2,000년 전인 기원전 3600년 전부터 존재했음을 시사합니다.",
  "고양이의 푸르르는 소리는 만족감뿐만 아니라 긴장의 신호일 수 있기 때문에 자가 치유의 한 형태일 수 있습니다. 마찬가지로, 집 고양이의 푸르릉 거리는 빈도는 근육과 뼈가 스스로 회복되는 빈도와 동일합니다.",
  "성인 고양이는 인간과 의사 소통하기 위해서만 야옹합니다.",
  "세계에서 가장 부유한 고양이는 주인이 사망한 후에 1300만 달러의 가치를 가지게 되었으며, 주인이 고양이에게 재산을 남겨놓았습니다.",
  "고양이는 당신의 목소리를 알아듣지만 너무 쿨하게 행동해서 신경 쓰지 않습니다.",
  "고양이는 유당불내증이 있는 경우가 많으니 우유를 주지 마세요!",
  "고양이는 자기 몸길이의 최대 6배까지 뛸 수 있습니다.",
  "고양이는 33종의 동물을 사냥으로 멸종시켰습니다.",
  "고양이는 생존을 위해 바닷물을 마실 수 있습니다.",
];

const langName = "Korean",
  langISO = "kor",
  langLocale = "ko",
  langLocaleName = "Korean";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
