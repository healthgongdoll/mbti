const qnaList = [
    {
      q: '1. 당신이 아이스크림 가게에 갔을 때, 어떤 맛을 먼저 시도해보시나요?',
      a: [
        { answer: 'a. 달달한게 최고지', type: ['cow', 'tiger', 'dragon', 'chick'] },
        { answer: 'b. 상큼한게 나아', type: ['mouse', 'rabbit', 'horse', 'snake', 'dog', 'monkey'] },
      ]
    },
    {
      q: '2. 당신이 아이스크림을 먹을 때, 어떤 방법으로 먹는 것을 선호하시나요? ',
      a: [
        { answer: 'a. 한 번에 크게 먹는다.', type: ['mouse', 'rabbit', 'tiger', 'monkey'] },
        { answer: 'b. 작게 먹어서 여러 번 즐긴다.', type: ['cow', 'horse', 'snake', 'dog'] },
      ]
    },
    {
      q: '3. 아이스크림을 살 때, 어떤 기준으로 선택하시나요?',
      a: [
        { answer: 'a. 자신이 항상 먹던 맛을 선택한다', type: ['cow', 'rabbit', 'tiger', 'dog', 'monkey'] },
        { answer: 'b. 새로운 맛을 시도해보고 싶다', type: ['sheep', 'chick', 'pig'] },
      ]
    },
    {
      q: '당신이 좋아하는 아이스크림의 맛은 무엇인가요?',
      a: [
        { answer: 'a. 부드러운 맛', type: ['cow', 'tiger', 'dragon' ] },
        { answer: 'b. 진한 맛" ', type: ['sheep', 'dog', 'monkey', 'chick', 'pig' ] },
      ]
    },
    {
      q: '5. 아이스크림을 먹을 때, 어떤 분위기에서 먹는 것을 좋아하시나요?',
      a: [
        { answer: 'a. 혼자 조용히 먹는 것을 좋아한다', type: ['cow', 'sheep', 'dog', 'dragon', 'chick' ] },
        { answer: 'b. 함께하는 분위기에서 먹는 것을 좋아한다', type: ['mouse', 'rabbit', 'horse', 'pig']},
      ]
    },
  
    {
      q: '6. 아이스크림을 먹을 때, 어떤 장소에서 먹는 것을 선호하시나요?',
      a: [
        { answer: 'a. 야외에서 먹는 것을 좋아한다', type: ['dragon', 'chick', 'pig' ] },
        { answer: 'b. 실내에서 먹는 것을 좋아한다', type: ['mouse', 'rabbit', 'horse', 'dog' ] },
      ]
    },
    {
      q: '7. 아이스크림 가게에서 가장 먼저 눈에 띄는 것은 무엇인가요',
      a: [
        { answer: 'a. 색상이 밝은 아이스크림', type: ['cow', 'sheep', 'pig' ] },
        { answer: 'b. 독특한 맛의 아이스크림', type: ['tiger', 'dragon', 'chick' ] },
      ]
    },
    {
      q: '8. 아이스크림을 먹을 때, 어떤 식감을 좋아하시나요',
      a: [
        { answer: 'a. 부드럽고 부드러운 식감.', type: ['mouse', 'dragon', 'chick' ] },
        { answer: 'b. 쫄깃하고 진한 식감.', type: ['rabbit', 'tiger', 'horse', 'snake', 'dog', 'monkey' ] },
      ]
    },
  ]
  
  const infoList = [
    {
        //INFJ 피넛버터 컵 아이스크림
      name: '피넛버터 컵 아이스크림',
      desc: '맛과 향의 균형이 잘 맞는 부드러운 아이스크림에 짭조름한 피넛버터와 달콤한 젤리가 조화롭게 어우러진 것처럼, 진중하면서도 예민하고 정신적으로 민감한 이 유형은 감성적인 면과 논리적인 면을 모두 지니고 있습니다. 때로는 독창적이고 창의적인 면모를 보여주기도 하지만, 집중하면 엄격하게 일을 처리하는 모습도 보입니다.'
    },
        //INTJ 다크 초콜릿 아이스크림
    {
      name: '다크 초콜릿 아이스크림',
      desc: '진한 초콜릿의 맛과 향이 강한 다크 초콜릿과 같이, 이 유형은 깊이 있는 사고와 철저한 계획성, 논리적인 분석력 등 강한 인지 능력을 바탕으로 미래를 예측하고 행동합니다. 이들은 현실적이고 논리적인 사고를 통해 문제를 해결하며, 도전과 변화를 두려워하지 않는 특징을 가지고 있습니다.'
    },
    {
        //INFP - 베리 베리 스트로베리
      name: '베리 베리 스트로베리 아이스크림',
      desc: '부드러운 크림과 상큼한 딸기 맛이 어우러진 베리 베리 스트로베리 아이스크림과 같이, 이 유형은 창의적이면서도 이상적인 세상을 꿈꾸는 성향을 가지고 있습니다. 이들은 자신의 가치관과 이상에 따라 행동하며, 적극적으로 탐구하고 발전하려는 열망을 지니고 있습니다. 그러나 외부의 논리적인 규칙에 순응하지 않을 때도 있어, 이들이 어려움에 빠질 수 있습니다.'
    },
    {
        //INTP - 블루베리 치즈케이크
      name: '블루베리 치즈케이크 아이스크림',
      desc: '산뜻한 블루베리와 부드러운 치즈케이크의 조화로, 입안에서 살짝 녹아내리는 부드러운 맛과 함께 깊이 있는 맛을 가지고 있습니다. 당신은 독창적이고 분석적인 능력을 가지고 있으며, 논리와 이성을 중요시합니다. 또한, 호기심이 많고 지적 호기심이 높아서 문제를 해결하는데 열성적입니다.'
    },
    {
        //ENFJ 바닐라 빈 아이스크림
      name: '바닐라 빈 아이스크림',
      desc: '따뜻하고 사랑스러운, 차분한 매력으로 사람들을 끌어들이는 당신! 친절하고 사려깊으며, 주위의 사람들을 돌보는 것을 즐기는 성향으로, 달콤한 마무리를 가진 바닐라 빈 아이스크림 스타일 입니다.'
    },
    {
        //ENFP 레인보우 샤베트 아이스크림
      name: '레인보우 샤베트 아이스크림',
      desc: '다양한 맛과 색상이 섞인 과일 아이스크림으로, 재능있고 호기심 많으며, 새로운 것을 탐구하는 열정이 있는 당신! 명랑하고 사람들을 웃게하는 것을 좋아하며, 창의적인 아이디어를 가져오는 경향이 있어 여러 매력을 가진 레인보우 샤베트 아이스크림 스타일 입니다.'
    },
    {
        //ENTJ  Espresso Ice Cream
      name: '에스프레소 아이스크림',
      desc: '이 유형은 대담하고 독립적인 성향을 가진 사람으로, 목적을 위해 노력하는 모습이 두드러집니다. 에스프레소 아이스크림은 진한 에스프레소와 부드러운 크림이 어우러진 맛으로, 이 유형이 가진 단호하고 직설적인 성격이 진한 에스프레소와 같이 강한 맛으로 표현됩니다. 또한, 이 유형은 타인에게 명령하는 경향이 있어 독립적이고 자신감이 높은데, 이는 에스프레소의 씁쓸함과 같이 강한 맛으로 나타날 수 있습니다.'
    },
    {
        //ENTP 초콜릿 칩 맬로우 크림 아이스크림
      name: '초콜릿 칩 맬로우 크림 아이스크림',
      desc: '이 아이스크림은 창의적이고 새로운 것을 시도하는 것을 좋아하는 당신의 유형과 관련이 있습니다. 초콜릿 칩은 풍부한 맛과 질감을 제공하며, 멜로우 크림은 부드러운 텍스처와 달콤한 맛을 가지고 있습니다. 당신은 새로운 경험과 도전을 즐기는 것을 좋아하고, 이 아이스크림은 당신의 대담하고 창의적인 성향을 나타냅니다.'
    },
    {
        //ISFJ 바닐라 아이스크림
      name: '바닐라 아이스크림',
      desc: '당신은 전통적이고 안정적인 것을 좋아하며, 신뢰성과 일관성을 중요시합니다. 이 유형은 인내심이 강하고, 타인의 감정과 필요를 잘 이해하며, 다른 사람들의 만족을 위해 노력하는 사람들입니다. 바닐라 아이스크림은 그야말로 아이스크림의 대표적인 전통과 안정성을 상징합니다. 그리고 그 맛의 일관성은 당신이 추구하는 가치와도 일치합니다.'
    },
    {
        //ISFP 딸기 아이스크림
      name: '딸기 아이스크림',
      desc: '이 유형은 자유롭고 개성적이며, 예술적인 경향이 있습니다. 자연과 동물을 사랑하며, 따뜻하고 친절한 사람들입니다. 딸기 아이스크림은 부드럽고 상큼한 맛이 있는데, 이는 이 유형의 따뜻하고 친절한 성격과 재능 있는 예술가적인 측면과도 일치합니다.'
    },
    {
        //ISTP 초콜릿 아이스크림
      name: '초콜릿 아이스크림',
      desc: '이 유형은 사실적이며, 논리적인 분석 능력을 가지고 있습니다. 이들은 현실적이고, 문제 해결 능력이 뛰어나며, 탐험적입니다. 초콜릿 아이스크림은 풍부하고 진한 맛이 있는데, 이는 분석적이고 현실적인 성격과도 일치합니다.'
    },
    {
        //ISTJ - 민트 초콜릿 아이스크림
      name: '민트 초콜릿 아이스크림',
      desc: '이 유형은 신중하고 조직적이며, 실용적인 방식으로 일을 처리하는 것을 선호합니다. 그들은 목표 달성을 위해 계획을 세우며, 집중력이 강하고, 규칙을 따르는 것을 좋아합니다. 민트 초콜릿 아이스크림은 청량감과 진한 초콜릿 맛이 조화롭게 어우러진 맛으로, 이 유형의 신중하고 조직적인 성격과 철저함을 나타냅니다'
    },
  ]