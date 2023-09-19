import Header from '../header/header';
import styles from './main.module.css';
import { useNavigate } from 'react-router-dom';

const Sub02_1 = () => {
  const navigate = useNavigate();
  const toSub02_02 = () => {
    navigate({
      pathname: '/sub02_2',
    });
  };

  return (
    <div className={styles.main}>
      <Header></Header>
      <div className={styles.Headline}>
        <b>후원하기</b>
        <div className={styles.DonateFrom}>
          <input
            className={styles.FromRadioInput}
            required
            type="radio"
            name="from"
            id="indi"
            value="indi"
          />
          <label className={styles.FromRadio} for="indi">
            개인
          </label>
          <input
            className={styles.FromRadioInput}
            type="radio"
            name="from"
            id="orga"
            value="orga"
          />
          <label className={styles.FromRadio} for="orga">
            단체
          </label>
          <input
            className={styles.FromRadioInput}
            type="radio"
            name="from"
            id="enter"
            value="enter"
          ></input>
          <label className={styles.FromRadio} for="enter">
            기업
          </label>
        </div>
        <hr />
        <div className={styles.DonateWhen}>
          <div className={styles.txt}>정기후원일</div>
          <div>
            <select className={styles.Date} name="when" id="when">
              <option value="1st">01</option>
              <option value="11th">11</option>
              <option value="21st">21</option>
            </select>
            일
          </div>
        </div>
        <div className={styles.DonateWhen}>
          <div className={styles.txt}>후원 금액</div>
          <div>
            <label for="howmuch"></label>
            <input required className={styles.Date} type="number" />원
          </div>
        </div>
        <hr />
        <div className={styles.DonateHow}>
          <input
            className={styles.HowRadioInput}
            required
            type="radio"
            name="how"
            id="auto"
            value="auto"
          />
          <label className={styles.HowRadio} for="auto">
            자동이체
          </label>

          <input
            className={styles.HowRadioInput}
            type="radio"
            name="how"
            id="card"
            value="card"
          />
          <label className={styles.HowRadio} for="card">
            신용카드
          </label>
          <input
            className={styles.HowRadioInput}
            type="radio"
            name="how"
            id="easy"
            value="easy"
          />
          <label className={styles.HowRadio} for="easy">
            간편결제
          </label>
        </div>
        <div className={styles.BankInfo}>
          <div>은행명</div>
          <select className={styles.Bank} name="bank" id="bank">
            <option value="" disabled selected>
              은행을 선택해주세요.
            </option>
            <option value="KB">국민은행</option>
            <option value="NH">농협은행</option>
            <option value="Hana">하나은행</option>
          </select>
          <div>계좌번호</div>
          <input
            type="number"
            className={styles.Bank}
            required
            name="accountNum"
            id="accountNum"
            placeholder="계좌번호를 입력해주세요."
          />

          <div>예금주</div>
          <input
            type="text"
            className={styles.Bank}
            required
            name="donator"
            id="donator"
            cols="30"
            rows="1"
            placeholder="예금주를 입력해주세요."
          ></input>
          <div>
            <input
              className={styles.equalsDonator}
              type="checkbox"
              id="equal"
              value="equeal"
            />
            <label className={styles.HowRadio} for="equal">
              후원자와 동일
            </label>
          </div>
        </div>
        <div className={styles.CheckList}>
          <div>
            <input required type="checkbox" />
            <label htmlFor="">(필수) 후원 회원 개인정보 수집·이용 동의</label>
          </div>
          <hr className={styles.ListHr} />
          <div>
            <input required type="checkbox" />
            <label htmlFor="">(필수) 만 14세 미만 아동의 법정대리인 동의</label>
          </div>
          <hr className={styles.ListHr} />
          <div>
            <input type="checkbox" />
            <label htmlFor="">
              (선택) 사업 소개·후원 안내를 위한 개인정보 수집·이용 동의
            </label>
          </div>
          <hr className={styles.ListHr} />
          <div>
            <input type="checkbox" />
            <label htmlFor="">
              (선택) 사업 소개·후원 안내 사항 휴대전화 수신 동의
            </label>
          </div>
        </div>
        <button onClick={toSub02_02} className={styles.CompBtn}>
          <b>신청</b>
        </button>
      </div>
    </div>
  );
};

export default Sub02_1;
