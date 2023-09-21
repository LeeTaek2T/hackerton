import { useNavigate } from 'react-router-dom';
import styles from './sub1.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import leftArrow from '../../source/leftArrow.png';
import sub01_1 from '../../source/sub01_1.png';
import sub01_2 from '../../source/sub01_2.png';
import sub01_3 from '../../source/sub01_3.png';
import bottomArrow from '../../source/bottomArrow.png';
import { useEffect, useState } from 'react';
import Child from '../child/child';
import axios from 'axios';
import childImg1 from '../../source/jaechan.png';
import upArrow from '../../source/upArrow.png';
import subTwo_1 from '../../source/sub1/sub1_1_1.png';
import subTwo_2 from '../../source/sub1/sub1_2_1.png';
import subTwo_3 from '../../source/sub1/sub1_3_1.png';
import subTwo_4 from '../../source/sub1/sub1_4_1.png';
import subTwo_5 from '../../source/sub1/sub1_5_1.png';
import subTwo_6 from '../../source/sub1/sub1_6_1.png';
import subTwo_7 from '../../source/sub1/sub1_7_1.png';
import subTwo_8 from '../../source/sub1/sub1_8_1.png';
import subTwo_9 from '../../source/sub1/sub1_9_1.png';
import subTwo_10 from '../../source/sub1/sub1_10_1.png';
import subTwo_11 from '../../source/sub1/sub1_10_1.png';

const Sub1 = () => {
  const navigate = useNavigate();

  // const toSubOne_two = (value, childData) => {
  //     let pathname;
  //     let CD = childData;
  //     switch (value) {
  //         case 1:
  //             pathname = "/sub1m1/sub1m1_1";
  //             break;
  //         case 2:
  //             pathname = "/sub1m1/sub1m1_2";
  //             break;
  //         case 3:
  //             pathname = "/sub1m1/sub1m1_3";
  //             break;
  //         case 4:
  //             pathname = "/sub1m1/sub1m1_4";
  //             break;
  //         case 5:
  //             pathname = "/sub1m1/sub1m1_5";
  //             break;
  //         case 6:
  //             pathname = "/sub1m1/sub1m1_6";
  //             break;
  //         case 7:
  //             pathname = "/sub1m1/sub1m1_7";
  //             break;
  //         case 8:
  //             pathname = "/sub1m1/sub1m1_8";
  //             break;
  //         case 9:
  //             pathname = "/sub1m1/sub1m1_9";
  //             break;
  //         case 10:
  //             pathname = "/sub1m1/sub1m1_10";
  //             break;
  //         case 11:
  //             pathname = "/sub1m1/sub1m1_11";
  //             break;
  //     }
  //     if (pathname) {
  //         navigate({
  //             pathname: pathname,
  //             state: 'dfsa'
  //         });
  //     }
  //     console.log(`pathname : ${pathname}, childData :${CD.title}`)
  // };

  // const toSubOne_two = (value) => {
  //     navigate({
  //         pathname: '/sub1m2',
  //     });
  // };
  const toMain = () => {
    navigate({
      pathname: '/',
    });
  };
  const [percent, setPercent] = useState(50);
  const handleChangePercent = () => {
    const newPercent = Math.random() * 100;
    setPercent(newPercent);
  };

  const [childrenData, setChildrenData] = useState([]);

  const isGenderSelected = (gender) => {
    //버튼이 클릭 됐는지 -> 클래스 이름 지정 -> 색상변경
    return selectedGender.includes(gender) ? styles.selectedGender : '';
  };

  const isAgeRangeSelected = (ageRange) => {
    //버튼이 클릭 됐는지 -> 클래스 이름 지정 -> 색상변경
    return selectedAgeRange.includes(ageRange) ? styles.selectedAgeRange : '';
  };

  const isConditionSelected = (condition) => {
    //버튼이 클릭 됐는지 -> 클래스 이름 지정 -> 색상변경
    return selectedCondition.includes(condition)
      ? styles.selectedCondition
      : '';
  };

  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleButtonClick = (filterType, value) => {
    //카테고리 버튼 누르면 해당 버튼 추가 및 삭제
    switch (filterType) {
      case 'gender':
        if (selectedGender.includes(value)) {
          setSelectedGender(selectedGender.filter((item) => item !== value));
        } else {
          setSelectedGender([...selectedGender, value]);
        }
        break;
      case 'ageRange':
        if (selectedAgeRange.includes(value)) {
          setSelectedAgeRange(
            selectedAgeRange.filter((item) => item !== value)
          );
        } else {
          setSelectedAgeRange([...selectedAgeRange, value]);
        }
        break;
      case 'condition':
        if (selectedCondition.includes(value)) {
          setSelectedCondition(
            selectedCondition.filter((item) => item !== value)
          );
        } else {
          setSelectedCondition([...selectedCondition, value]);
        }
        break;
      default:
        break;
    }
    // console.log(`선택된 성별 : ${selectedGender}`);
    // console.log(`선택된 나이대 : ${selectedAgeRange}`);
    // console.log(`선택된 조건 : ${selectedCondition}`);
    // console.log(`-------------`);
  };

  const handleApplyFilter = () => {
    //적용 버튼
    const filteredData = childrenData.filter((child) => {
      return (
        (selectedGender.length === 0 ||
          selectedGender.includes(child.gender)) &&
        (selectedAgeRange.length === 0 ||
          selectedAgeRange.some((range) => {
            const [minAgeStr, maxAgeStr] = range
              .split('~')
              .map((part) => part.trim());
            const minAge = parseInt(minAgeStr, 10);
            const maxAge = parseInt(maxAgeStr, 10);
            console.log(minAge, maxAge);
            if (!isNaN(minAge) && !isNaN(maxAge)) {
              return child.age >= minAge && child.age <= maxAge;
            }
            return false;
          })) &&
        (selectedCondition.length === 0 ||
          selectedCondition.includes(child.condition))
      );
    });
    // console.log(filteredData);
    // console.log(childrenData);

    setFilteredData(filteredData);

    // 선택된 필터 초기화
    setSelectedGender([]);
    setSelectedAgeRange([]);
    setSelectedCondition([]);
  };

  const [dataAll, setDataAll] = useState();
  useEffect(() => {
    // 페이지 로딩 시 모든 정보를 가져오는 부분
    axios
      .get('api/benefs?keyword=')
      .then((response) => {
        // console.log(`버튼 눌러 백엔드 연결 성공 완료`);
        // console.log(`${response.data}`);
        const responseDataArray = Array.isArray(response.data)
          ? response.data
          : [response.data];

        // JSON 형식으로 객체 출력
        responseDataArray.forEach((item, index) => {
          console.log(`Item ${index + 1}:`);
          console.log(JSON.stringify(item, null, 2)); // JSON 형식으로 출력
        });
        responseDataArray.forEach((item, index) => {
          const URLs = [
            'subOne_1',
            'subOne_2',
            'subOne_3',
            'subOne_4',
            'subOne_5',
            'subOne_6',
            'subOne_7',
            'subOne_8',
            'subOne_9',
            'subOne_10',
            'subOne_11',
          ];
          const URLs2 = [
            'subTwo_1',
            'subTwo_2',
            'subTwo_3',
            'subTwo_4',
            'subTwo_5',
            'subTwo_6',
            'subTwo_7',
            'subTwo_8',
            'subTwo_9',
            'subTwo_10',
            'subTwo_11',
          ];
          const STOne = [
            '어느 날 들려온 믿지 못할 이야기',
            '추운 겨울, 자라나는 새싹들을 위한 따뜻한 희망',
            '힘들었던 어린 시절의 유일한 희망은 오직 축구 뿐이었어요',
            '뜻하지 않은 임신에 하염없이 쏟아지던 눈물',
            '너무 일찍 철든 혜원이가 안타깝기만 한 할머니',
            '보육원에서 자라는 아이들에게 생활과 학습을 위한 도움이 절실합니다. 여러분의 도움으로 그들의 미래에 햇살을 더해주세요',
            '절실히 필요한 도움의 손길',
            '깨끗하고 안전한 집에서 살고 싶어요',
            '누구와도 어울리지 못했던 지원이',
            "혹시라도 들리지 않을까'하는 가느다란 희망의 끈",
            '자립 청소년을 위한 손길을 더해주세요!',
          ];
          const STTwo = [
            '의료비 지원으로 밝은 소아암 환자들의 미래를',
            '몸도 마음도 훈훈한 겨울을 보낼 수 있도록 도와주세요',
            '그래도 제가 포기하지만 않으면, 언젠가는 꼭 꿈을 이룰 수 있을 것 같아요',
            '새로운 터전에서 우리 소명이와 행복하게 살 준비를 하려고 합니다',
            '날 지켜주는 사람, 우리 할머니',
            '',
            '부담스러운 병원비',
            '아이들의 든든한 울타리가 되어주세요',
            '그림 그릴 때 세상에서 제일 행복해요',
            '다빈이에게 세상의 소리를 들려주세요',
            '자립 청소년의 어려움',
          ];
          const STThree = [
            '',
            '',
            '',
            '',
            '할머니와 혜원이가 건강하게 지낼 수 있도록',
            '',
            '',
            '',
            '',
            '',
            '생활지원의 중요성',
          ];
          const SDOne = [
            '유독 코피가 많이 났던 준우. 늘 대수롭지 않게 생각하며 지나갔었습니다. 어느 날, 준우가 열이 많이 나서 급하게 데려간 병원에서 더 큰 병원에 가보는 게 좋겠다는 이야기를 듣던 그 날, 걷잡을 수 없이 떠오르는 돌이킬 수 없는 지난 날들이 숨조차 쉬지 못할 만큼 가슴을 짓누릅니다.',
            '서늘한 겨울 한기가 피부를 찌르듯 느껴지는 어느 날, 비닐하우스 내부가 따뜻해지기란 쉽지 않습니다. 좀처럼 끝나지 않는 한파주의보에 수찬이네는 히터 하나에 의지해서 혹독한 겨울을 보내야 합니다. "여름에는 어떻게든 버티겠는데, 난방이 어려운 겨울이 가장 큰 걱정이에요." 계절이 바뀌면서 항상 다음 계절을 걱정해야 하는 수찬이네. 이들에게 따뜻한 집은 사치일지도 모릅니다.',
            '재찬이는 다른 친구들보다 다소 늦은 초5 때부터 축구를 시작하여 열심히 노력한 덕분에 지금은 교내 주전 선수로 활약하고 있습니다. 재찬이의 축구 실력은 오로지 혼자만의 싸움과 의지로 이루어 냈습니다. 새벽 5시반에 누구보다 일찍 운동장에 도착해서 기본 2시간의 훈련 및 슛 300개, 저녁 훈련이 끝나고도 드리블 200개, 마무리 스트레칭까지… 이렇게 홀로 훈련을 시작한 지 벌써 2년이 넘어가고 있습니다.',
            '뜻하지 않은 임신에 하염없이 쏟아지던 눈물\n\n이름조차 말하기 힘들어하던 인혜(가명) 씨는 아주 조심스럽게 이야기를 풀어나갔습니다. 생리를 안 한 지 6개월째 접어들고, 아무래도 이상해서 임신 테스트를 하니 너무 선명한 두 줄을 보게 되었다고 합니다. 인혜 씨는 그 때 당시 너무 무서워 어떻게 해야 할지 몰라 그냥 주저앉아 울기만 했다고 합니다. 남자친구에게 조심스럽게 임신 소식을 알렸지만 1주일 뒤부터는 더 이상 연락이 안 되었습니다. 집에 찾아가고 친구들도 만나봤지만 마찬가지로 연락이 안 된다는 이야기만 듣게 되자, 미친 듯이 계속 연락을 해본 끝에 결국 없는 번호라는 통화음만 듣게 되었습니다.',
            '“돈 많이 벌면, 그때 혜원이 찾으러 올게.. 미안해” 연락도 닿지않던 딸이 어린 손녀딸만 남긴 채 집을 떠났습니다. 아빠가 누군지 물어보지도 못한 채 딸은 떠나버렸고, 그 후 끝내 연락은 오지 않았습니다. 겨우 자신의 생계르 ㄹ유지하고 있엇던 할머니에게 갑자기 찾아온 손녀딸 혜원이는 큰 부담이었지만, 이제는 세상에 둘도 없는 소중한 존재가 되었습니다. 할머니는 혜원이를 위해서라면 하지 않은 일이 없습니다.',
            '고등학생과 시설청소년들은 어린 시절부터 어려움을 겪어왔습니다. 그럼에도 불구하고 그들은 앞으로의 더 나은 미래를 향해 많은 노력을 하며 희망을 품고 나아가고 있습니다. 이런 아이들에게 교육적인 지원과 생활적인 안정을 지원하고자 합니다.\n\n학습지원은 그들이 미래를 위한 기초를 다지는 데 큰 역할을 하게 될 것입니다. \n또한, 생활지원은 안정된 환경과 따뜻한 마음을 제공하여 그들이 햇살 가득한 삶을 살아갈 수 있도록 도울 수 있을 것입니다.\n\n도움의 손길이 필요한 이 아이들에게 여러분의 지원은 미래에 대한 희망과 햇살을 가져다 줄 것입니다. 그들의 미래에 밝은 빛을 비춰주세요. 이 도움은 아이들이 성공적으로 성장하고 행복한 삶을 살아갈 수 있도록 이끌어줄 것입니다.',
            '미숙아로 태어난 소라는 뇌병변이라는 희귀질환을 진단 받았습니다. 소라의 치료는 현재도 계속되고 있으며, 소라의 가족은 절실히 의료지원과 도움의 손길을 필요로 합니다.',
            '서로가 서로를 의지하며 오늘도 버티는 애틋한 5남매가 있습니다. 종찬, 종태, 수빈, 수진, 종욱(가명) 다섯 아이들의 보호자인 어머니는 생계유지를 위해 일하러 지방으로 떠나시고, 한 달에 한 두 번 아이들을 찾아가 챙기고 있습니다. 하지만, 한두 번으로 5남매를 관리하기에는 생활적으로 어려움이 많습니다. 청소가 되어있지 않은 집안의 비위생적인 관리와, 기초 생활수급비로 버티는 경제적인 벽은 결국 관리비를 몇 달 동안 내지 못하는 상황이 되어버렸습니다. 집중호우가 잦았던 올해 여름, 오래되어 노후가 심한 우리 아이들의 둥지도 무섭게 퍼붓는 빗줄기를 견디지 못하고 집안 여러 곳에 누수가 발생하고 말았습니다. 끝내 벽면 가득 곰팡이가 차지한 방을 피해 종욱이는 누나들이 생활하는 다른 방으로 나와야만 했습니다.',
            '초등학교 5학년이 된 지원이는 어릴 적부터 아버지의 강압적인 훈육으로 항상 주눅 들어 있거나 예민한 성격을 가지게 되었습니다. 때문에 누구와도 어울리지 못하고 학교 생활마저도 무척이나 힘겨워 했습니다. 그런 지원이가 변하게 된 계기는 바로 미술인데요. 그림을 그릴 때만큼은 지원이는 현실의 모든 걱정을 잊고 세상에 부러운 것이 아무것도 없답니다. 지원이는 미술에 대한 열정과 재능을 가지고 있고, 이제는 훌륭한 예술가가 되는 것이 꿈이에요.',
            "다빈이 엄마는 다빈이가 작은 소리라도 내면 혹시 들리는 게 아닐까? 매일매일 조바심내며 지내야 합니다. 그리고 반복되는 검사 때마다 '혹시나', '혹시나 들리지 않을까'라는 가느다란 희망을의 끈을 놓지않고 있었습니다. 하지만 결국 청각장애판정을 받고서는 '산모스트레스 때문에 우리 아이가 이렇게 장애가 생긴건 아닐까?'자책하며 눈물로 아픈시간을 지내야 했습니다. '엄마'라는 소리가 이렇게 소중한 것인줄 이제야 알게되었다고 합니다.'우리 다빈이도 제 목소리를 들을 수 있으면 얼마나 좋을까요?'어머니의 간절한 희망이 이루어지던 날, 엄마 얼굴을 만지며 위로하는 다빈이 모습에 엄마도 이제 희망을 바라봅니다.",
            '우리 주변에는 곧 혼자 살아가야 하는 자립 청소년들이 있습니다. 그들은 다른 아이들과는 달리 부모님의 지원을 받지 못하면서도 꿈과 희망을 품고 미래를 위해 많은 노력을 하고 있습니다.',
          ];
          const SDTwo = [
            '의료비 지원으로 밝은 소아암 환자들의 미래를\n\n소아암은 어린이들에게 큰 어려움을 줄 수 있는 심각한 질병 중 하나입니다. 이런 어린 환자들을 돕기 위해 의료지원이 필요하며, 특히 항암치료를 받아야 하는 경우에는 그 필요성이 더욱 커집니다. 의료비용에 대한 부담을 줄이고, 힘든 시간을 보내는 가족들에게 지지의 손길을 내밀어주세요.\n\n준우의 가족들은 의료비용과의 싸움을 벌이고 있습니다. 이제 우리는 그들을 위해 의료지원을 통해 미래를 밝게 만들어야 합니다. 후원과 지원은 이 어린 환자들이 치료를 받으면서 희망을 품을 수 있도록 돕는 역할을 합니다. 함께해서 소아암 환자들에게 희망의 미래를 선물해주세요',
            '비닐하우스는 추운 계절에 특히 추위와 습기에 취약한 주거 형태입니다. 한참 성장기인 수찬이는 추운 겨울 동안 따뜻한 옷과 신발이 부족해 많은 어려움을 겪고 있습니다. 이에 대한 여러분의 따뜻한 도움이 있다면 추운 가정들에 큰 변화를 가져다 줄 것입니다. 후원을 통해 옷, 신발, 이불 등의 생필품, 교육 지원 프로그램, 비닐하우스의 주거 환경을 개선 등의 프로젝트가 이루어질 것입니다.',
            '재찬이는 특출난 재능과 꿈에 대한 열정이 있음에도 불구하고 경제적인 문제로로 인해 적절한 지원을 받지 못하고 있습니다. 비록 어려운 환경일지라도, 재찬이가 아무런 걱정 없이 축구를 할 수 있도록 여러분의 관심과 응원이 필요합니다.',
            '미혼모에게 지원되는 임대 아파트도 신청해보고, 시설도 알아봤지만 제일 걱정인 건 집만 제공되고 그에 따른 가전제품은 모두 개인적으로 마련을 해야 합니다. 임신, 출산 기간 동안 그간 모아둔 돈으로 생활하다 보니 아주 작은 가전제품 하나조차 구입하기가 버거운 게 미혼모들의 현실이었습니다. 새로운 터전 마련에 아기와 미래를 꿈꿨던 미혼모들이 좌절이 아닌 희망을 가지고 아기와 당당하게 살아갈 수 있는 기회를 마련할 수 있도록 도와주세요.',
            '혜원이가 엄마 없는 아이라고 손가락질 당할까봐 악착같이 살았지...". 63세 밖에 되지 않은 나이에도 온갖 관절염과 디스크로 인한 통증이 할머니를 따라다닙니다. 식당, 도자기 공장, 농사일 등 불러만 주면 어디든 가서 악착같이 일했습니다. 허리, 무릎, 팔목 어디 하나 성한 곳이 없지만, 혜원이가 인성 바르고 건강한 아이로 자라줘서 정말 다행이라고 말하는 할머니.',
            '소라의 어머니는 소라와 함께 있어야 하기에 취업을 할 수 없습니다. 소라의 아버지는 교통사고로 입원치료를 받게 되면서 현재는 구직활동조차 하지 못하고 있습니다. 아버지의 치료비조차 내기 어려운 상황에서 매달 90만원의 검사비와 재활치료비 60만원, 그밖의 경련증상 약물 치료비용 25만원을 매달 감당하기에는 턱없이 부족하고 버겁기만 합니다.\n\n부디 소라가 앞으로의 치료과정과 검사과정을 지속적으로 이어나가 건강한 소라가 되어 밝은 빛을 볼 수 있도록 후원자님들께서 따듯한 관심 부탁드립니다. 후원자님의 작은 관심과 격려는 소라에게 큰 힘이 될 것 입니다.\n\n',
            '우리 아이들에게 세상 그 어느 곳보다 더 따뜻한 울타리를 만들어 주고 싶습니다. 그 안에서 우리 아이들이 함께 웃고 즐기며 거센 비바람에도 견뎌내는 큰 나무로 우뚝 설 수 있기를, 그리고 건강한 사회인으로 자리잡을 수 있기를 기대합니다. 길고 긴 여정을 후원자님들께서 당당하고 힘찬 아이들로 자랄 수 있도록 함께 응원해 주시길 소망합니다.\n',
            '미술은 지원이의 모든것이지만, 어려운 생활 환경과 경제적 문제로 인해 미술 용품과 학원비를 마련하지 못하는 등 지원이의 꿈을 이루기 위한 필수적인 지원을 받지 못하고 있습니다. 미술은 지원이의 삶을 풍요롭게 만들어줄 수 있는 유일한 수단이에요. 지원이의 꿈이 현실이 되고, 밝은 미래를 그려낼 수 있도록 도움의 손길을 내밀어주세요.',
            '평생 엄마아빠의 목소리를 들어보지 못한 아이들의 마음은 어떨까요? 1000명 중 2~3명의 신생아가 청각장애를 가지고 태어납니다. 달팽이관수술을 받으면 소리를 들을 수 있음에도 아직 수술을 받지 못한 아이들이 많습니다. 다빈이는 무엇보다도 의료지원과 희망을 간절히 필요로 합니다. 다빈이에게 인공 달팽이관 수술과 언어 재활 치료를 통해 소리를 찾는 감동을 느낄 수 있도록 응원해주세요.',
            '자립 청소년들은 가정 문제, 경제적 어려움, 교육 부진 등 다양한 어려움을 겪고 있습니다. 그들은 혼자서 일상 생활을 유지하고 미래를 준비하기 위해 힘들게 노력하고 있습니다. 그러나 지원 없이 이 모든 것을 이겨내는 것은 어렵습니다.',
          ];
          const SDThree = [
            '',
            '',
            '',
            '',
            '할머니가 혜원이를 따뜻한 품에서 지켜낼 수 있도록, 그리고 혜원이가 건강하고 씩씩하게 성장할 수 있도록 응원해 주세요. 여러분이 보내주신 후원금은 욕실 수리비를 포함한 주거환경개선비와 생계비, 그리고 혜원이의 교육비로 사용 될 예정입니다.',
            '',
            '',
            '',
            '',
            '',
            '우리는 이 어린이들에게 도움을 줄 수 있습니다. 생활지원 프로그램은 교육, 직업 훈련, 상담, 식사, 의류 등을 통해 이 어린이들에게 필요한 지원을 제공합니다. 이를 통해 그들은 자신의 능력을 향상시키고 안정적인 미래를 준비할 수 있습니다.\n\n우리는 자립 청소년들을 위한 이 중요한 프로젝트를 실현하기 위해 여러분의 도움을 기다리고 있습니다. 여러분의 기부는 이 어린이들에게 미래의 희망을 제공할 수 있습니다. 작은 금액도 큰 변화를 이끌어낼 수 있습니다.\n\n청소년들은 우리의 소중한 미래입니다. 여러분의 지원은 그들의 미래에 밝은 햇살을 비추는 데 큰 역할을 하게 될 것입니다. 지금 바로 함께해 이 아이들에게 도움의 손길을 더해주세요',
          ];
          // 아이 정보에 이미지 URL 배열 추가
          item.imgOne = URLs[index % URLs.length]; // 이미지 URL을 순환하도록 설정
          item.imgTwo = URLs[index % URLs2.length]; // 이미지 URL을 순환하도록 설정
          item.STOne = STOne[index % STOne.length];
          item.STTwo = STTwo[index % STTwo.length];
          item.STTHree = STThree[index % STThree.length];
          item.SDOne = SDOne[index % SDOne.length];
          item.SDTwo = SDTwo[index % SDTwo.length];
          item.SDThree = SDThree[index % SDThree.length];
        });
        // childrenData에 데이터 저장
        setChildrenData(responseDataArray);
        setFilteredData(responseDataArray);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // const handleTopicClick = (topic) => { //버튼을 누르면 필터정보 활성화 재클릭시 비활성화
  //     setSelectedTopic(topic === selectedTopic ? null : topic);
  //     }

  //버튼 누르면 필터 버튼들 보여줌
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div>
      <Header></Header>
      <div className={styles.sub1Main}>
        <div className={styles.middle}>
          <div className={styles.middleTitleDiv}>
            {' '}
            {/*제목 div*/}
            <button className={styles.backArrow} onClick={toMain}>
              <img className={styles.backArrow} src={leftArrow} />
            </button>
            <div className={styles.titles}>
              <div className={styles.oneTitles}>
                <p className={styles.oneTitle}>236</p>
                <p className={styles.twoTitle}>명의 새싹이</p>
              </div>
              <div className={styles.oneTitles}>
                <p className={styles.oneTitle}>상수우</p>
                <p className={styles.twoTitle}>님의 햇살을 기다리고 있어요!</p>
              </div>
            </div>
          </div>
          {!showFilter && (
            <div className={styles.filterDiv}>
              {/*필터 안눌렀을때 div*/}
              <p className={styles.fp}>필터</p>
              <button className={styles.bottomArrowBtn} onClick={toggleFilter}>
                <img src={bottomArrow} className={styles.Arrow}></img>
              </button>
            </div>
          )}
          {showFilter && (
            <div className={styles.filterBack}>
              <div className={styles.selectfilterDiv}>
                {/*필터 눌렀을 때 div*/}
                <p className={styles.selectfp}>필터</p>
                <button
                  className={styles.selectbottomArrowBtn}
                  onClick={toggleFilter}
                >
                  <img src={upArrow} className={styles.Arrow}></img>
                </button>
              </div>
              <div className={styles.filterDetailDiv}>
                <div className={styles.detailTitle}>
                  <p className={styles.detailP}>성별</p>
                  <div className={styles.sort}>
                    <button
                      className={`${styles.sex} ${isGenderSelected('남자')}`}
                      onClick={() => handleButtonClick('gender', '남자')}
                    >
                      남자
                    </button>
                    <button
                      className={`${styles.sex} ${isGenderSelected('여자')}`}
                      onClick={() => handleButtonClick('gender', '여자')}
                    >
                      여자
                    </button>
                  </div>
                </div>
                <div className={styles.detailTitle}>
                  <p className={styles.detailPLong}>연령대</p>
                  <div className={styles.sort}>
                    <button
                      onClick={() => handleButtonClick('ageRange', '0~3')}
                      className={`${styles.age} ${isAgeRangeSelected('0~3')}`}
                    >
                      0~3세
                    </button>
                    <button
                      onClick={() => handleButtonClick('ageRange', '4~6')}
                      className={`${styles.age} ${isAgeRangeSelected('4~6')}`}
                    >
                      4~6세
                    </button>
                    <button
                      onClick={() => handleButtonClick('ageRange', '7~12')}
                      className={`${styles.age} ${isAgeRangeSelected('7~12')}`}
                    >
                      7~12세
                    </button>
                    <button
                      onClick={() => handleButtonClick('ageRange', '13~18')}
                      className={`${styles.age} ${isAgeRangeSelected('0~3')}`}
                    >
                      13~18세
                    </button>
                  </div>
                </div>
                <div className={styles.detailTitle}>
                  <p className={styles.detailP}>조건</p>
                  <div className={styles.sort}>
                    <div className={styles.conditions}>
                      <button
                        onClick={() =>
                          handleButtonClick('condition', '주거지원')
                        }
                        className={`${styles.condition} ${isConditionSelected(
                          '주거지원'
                        )}`}
                      >
                        주거
                      </button>
                      <button
                        onClick={() =>
                          handleButtonClick('condition', '학습지원')
                        }
                        className={`${styles.condition} ${isConditionSelected(
                          '학습지원'
                        )}`}
                      >
                        학습
                      </button>
                      <button
                        onClick={() =>
                          handleButtonClick('condition', '재능지원')
                        }
                        className={`${styles.condition} ${isConditionSelected(
                          '재능지원'
                        )}`}
                      >
                        재능
                      </button>
                      <button
                        onClick={() =>
                          handleButtonClick('condition', '생활지원')
                        }
                        className={`${styles.condition} ${isConditionSelected(
                          '생활지원'
                        )}`}
                      >
                        생활
                      </button>
                      <button
                        onClick={() =>
                          handleButtonClick('condition', '의료지원')
                        }
                        className={`${styles.condition} ${isConditionSelected(
                          '의료지원'
                        )}`}
                      >
                        의료
                      </button>
                    </div>
                    <div className={styles.conditions}>
                      <button
                        onClick={() => handleButtonClick('condition', '보육원')}
                        className={`${styles.condition} ${isConditionSelected(
                          '보육원'
                        )}`}
                      >
                        보육원
                      </button>
                      <button
                        onClick={() => handleButtonClick('condition', '조부모')}
                        className={`${styles.condition} ${isConditionSelected(
                          '조부모'
                        )}`}
                      >
                        조부모
                      </button>
                      <button
                        onClick={() => handleButtonClick('condition', '미혼모')}
                        className={`${styles.condition} ${isConditionSelected(
                          '미혼모'
                        )}`}
                      >
                        미혼모
                      </button>
                      <button
                        onClick={() => handleButtonClick('condition', '한부모')}
                        className={`${styles.condition} ${isConditionSelected(
                          '한부모'
                        )}`}
                      >
                        한부모
                      </button>
                      <button
                        onClick={() => handleButtonClick('condition', '다문화')}
                        className={`${styles.condition} ${isConditionSelected(
                          '다문화'
                        )}`}
                      >
                        다문화
                      </button>
                    </div>
                  </div>
                </div>
                <button onClick={handleApplyFilter}>적용</button>
              </div>
            </div>
          )}
          <div className={styles.children}>
            {' '}
            {/*애들 소개*/}
            <div className={styles.details}>
              {
                filteredData.map((child) => (
                  <Child key={child.name} childData={child}></Child>
                ))
                // twoSubOne_two={() => toSubOne_two(child.id, child)}
              }
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sub1;

{
  /* <div className={styles.filterDetailDiv}>
  <div className={styles.detailTitle}>
      <p className={styles.detailP}>성별</p>
      <div className={styles.sort}>
          <button className={styles.sex}>
              <img src={manImg} className={styles.sexImg} />
          </button>
          <button className={styles.sex}>
              <img src={womanIng} className={styles.sexImg} />
          </button>
      </div>
  </div>
  <div className={styles.detailTitle}>
      <p className={styles.detailPLong}>연령대</p>
      <div className={styles.sort}>
          <button className={styles.age}>
              <img className={styles.ageImg} src={age1}></img>
          </button>
          <button className={styles.age}>
              <img className={styles.ageImg} src={age2}></img>
          </button>
          <button className={styles.age}>
              <img className={styles.ageImg} src={age3}></img>
          </button>
          <button className={styles.age}>
              <img className={styles.ageImg} src={age4}></img>
          </button>
      </div>
  </div>
  <div className={styles.detailTitle}>
      <p className={styles.detailP}>조건</p>
      <div className={styles.sort}>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition1}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition2}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition3}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition4}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition5}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition6}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition7}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition8}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition9}></img>
          </button>
          <button className={styles.condition}>
              <img className={styles.conditionImg} src={condition10}></img>
          </button>
      </div>
  </div>
  </div> */
}
