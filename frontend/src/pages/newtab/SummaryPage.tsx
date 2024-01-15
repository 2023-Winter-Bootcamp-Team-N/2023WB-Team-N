import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/img/searchIcon.svg';
import youtubeimage from '../../assets/img/youtubeimage.svg';
import line from '../../assets/img/line.svg';
import './SummaryPage.css';
import axios from 'axios';

interface SummaryPageProps {
  selectedCategory: string | null;
  openModalNewtab: () => void;
}

const SummaryPage: React.FC<SummaryPageProps> = ({ selectedCategory, openModalNewtab }) => {
  //카테고리를 선택하면 요약본이 보여지는 함수
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  //// 컴포넌트 내 상태 관리를 위한 state 변수 선언 및 초기화
  const [keyword, setKeyword] = useState('');
  //사용자가 저장한 요약본의 상태 관리를 위한 변수 선언
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    setIsSummaryVisible(!!selectedCategory);
  }, [selectedCategory]);

  // 창 닫기 버튼을 눌렀을 때 실행되는 함수
  const handleCloseButtonClick = () => {
    setIsSummaryVisible(false); // 창이 닫히도록 상태를 변경
  };

  // 검색 버튼 클릭 시 실행되는 비동기 함수
  const handleSearch = async () => {
    try {
      // axios 라이브러리를 사용하여 API에 GET 요청을 보냄
      const response = await axios.get('http://localhost:8000/api/search/keyword?user_id=1&keyword=${keyword}');

      // API 응답에서 가져온 데이터를 상태에 업데이트
      setSummaries(response.data);
    } catch (error) {
      // 에러 발생 시 콘솔에 에러 메시지 출력
      console.error('키워드 관련 요약본 불러오기 실패 : ', error);
    }
  };

  // // 회원가입 처리 함수 by 세종's
  // const handleSignup = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/account/signin', {
  //       email: signupEmail,
  //       password: signupPassword,
  //     });
  //     console.log(response.data);
  //     // 회원가입 성공 처리
  //   } catch (error) {
  //     console.error('회원가입 실패:', error);
  //   }
  // };

  return (
    <div
      className={`summary-container ${isSummaryVisible ? 'visible' : ''}`}
      style={{ border: '1px solid #8D8D8D', overflow: 'auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* 창 닫기 버튼 */}
        <button
          className="text-black px-4 py-2"
          style={{
            marginLeft: 'auto',
            marginRight: '1rem',
            width: '1.5rem', // 원하는 가로 크기
            fontSize: '1.5rem', // 원하는 텍스트 크기
          }}
          onClick={handleCloseButtonClick} // 창 닫기 버튼을 눌렀을 때 동작을 설정
        >
          X
        </button>
        {/* 검색 아이콘과 인풋바를 한 행에 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 'auto', //맨 오른쪽으로 보냄
          }}>
          {' '}
          {/* 검색 아이콘 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '2%',
              marginLeft: 'auto',
            }}>
            {/* 검색 아이콘 */}
            {/* (검색 아이콘을 버튼화하여 키워드 검색을 할 수 있도록) */}
            <button
              onClick={handleSearch}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                marginRight: '1vw',
              }}>
              <img src={searchIcon} alt="Search Icon" style={{ height: 'auto', marginRight: '1vw', width: '2vw' }} />
            </button>
            {/* 인풋 바 */}
            <div style={{ background: '#F5F5F7', marginRight: '4rem' }}>
              {' '}
              <input
                style={{
                  color: 'black', // 검정색으로 변경
                  border: '2px solid #000',
                  outline: 'none',
                  background: 'transparent',
                  padding: '8px',
                  width: '16vw', // 작은 화면에서의 크기
                  borderRadius: '6px', // 원하는 border-radius 값
                  height: '2rem', // 원하는 높이 값
                  fontSize: '0.9rem',
                }}
                placeholder="키워드를 입력하세요."
                id="keywordInput" //<!-- 고유한 id 속성 추가 -->
                name="keyword" //<!-- 고유한 name 속성 추가 -->
                //API 연동 부분
                value={keyword}
                // 입력 요소의 값이 변경될 때마다 해당 값을 setKeyword 함수를 통해 React 상태에 반영
                onChange={e => setKeyword(e.target.value)}
                onKeyDown={e => {
                  // 엔터 키를 눌렀을 때 handleSearch 함수 호출
                  if (e.key === 'Enter') {
                    e.preventDefault(); // 기본 동작 방지
                    handleSearch();
                  }
                }}
              />{' '}
            </div>
          </div>
        </div>
      </div>

      {[1, 2, 3, 4].map(index => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          key={index}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto' }}
          onClick={() => openModalNewtab()}>
          {/* 요약본 {index} */}
          {/* 라인 */}
          <img src={line} alt={`Line ${index} Icon`} style={{ width: '90%', height: 'auto', margin: '4% 5% 4% 5%' }} />
          {/* 썸네일, 텍스트*/}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {/* 썸네일 */}
            <img
              src={youtubeimage}
              alt={`Thumbnail ${index} Icon`}
              style={{ width: '27%', height: 'auto', marginLeft: '5%', marginRight: '5%' }}
            />
            {/* 텍스트 */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* 제목, 날짜 */}
              <div style={{ display: 'flex', flexDirection: 'row', height: '10%' }}>
                {/* 제목, 날짜를 한 행에 */}
                {/* 제목 */}
                <pre
                  //className="text-black outline-none bg-transparent p-1 w-80 resize-none text-bold overflow-hidden"
                  style={{
                    color: 'black',
                    outline: 'none',
                    fontFamily: 'notoSans',
                    background: 'transparent',
                    width: '68%',
                    resize: 'none',
                    overflow: 'hidden',
                    fontSize: '1.4vw',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    //alignSelf: 'flex-end',
                    verticalAlign: 'bottom',
                  }}>
                  가나다라
                </pre>
                {/* 날짜 */}
                <pre
                  style={{
                    color: 'black',
                    outline: 'none',
                    background: 'transparent',
                    width: '25%',
                    resize: 'none',
                    overflow: 'hidden',
                    fontSize: '0.95vw',
                    marginRight: '2%',
                    marginTop: '1%',
                    fontFamily: 'notoSans',
                    whiteSpace: 'pre-wrap',
                    //alignSelf: 'flex-start',
                  }}>
                  2024.01.08
                </pre>
              </div>
              <div className="mr-30">
                {/* 요약본 */}
                <pre
                  style={{
                    color: 'black',
                    outline: 'none',
                    background: 'transparent',
                    width: '85%',
                    resize: 'none',
                    fontSize: '1.10vw',
                    margin: '2% 5% 2% 0',
                    marginRight: '2%',
                    fontFamily: 'notoSans',
                    alignSelf: 'flex-start',
                    whiteSpace: 'pre-wrap',
                    maxHeight: '4.7rem',
                    // 세 줄까지만 표시하고 말줄임표
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                  - 영상 제작의 기본 내용은 공백 없이 연출하는 것이 중요하다. - 온라인 강좌에서는 심플한 디자인과
                  움직이는 그래픽을 활용하는 것이 좋다. - 배경음악과 효과음은 영상의 분위기를 크게 바꿀 수 있다.- 영상
                  제작의 기본 내용은 공백 없이 연출하는 것이 중요하다. - 온라인 강좌에서는 심플한 디자인과 움직이는
                  그래픽을 활용하는 것이 좋다. - 배경음악과 효과음은 영상의 분위기를 크게 바꿀 수 있다.- 영상 제작의
                  기본 내용은 공백 없이 연출하는 것이 중요하다. - 온라인 강좌에서는 심플한 디자인과 움직이는 그래픽을
                  활용하는 것이 좋다. - 배경음악과 효과음은 영상의 분위기를 크게 바꿀 수 있다.- 영상 제작의 기본 내용은
                  공백 없이 연출하는 것이 중요하다. - 온라인 강좌에서는 심플한 디자인과 움직이는 그래픽을 활용하는 것이
                  좋다. - 배경음악과 효과음은 영상의 분위기를 크게 바꿀 수 있다.- 영상 제작의 기본 내용은 공백 없이
                  연출하는 것이 중요하다. - 온라인 강좌에서는 심플한 디자인과 움직이는 그래픽을 활용하는 것이 좋다. -
                  배경음악과 효과음은 영상의 분위기를 크게 바꿀 수 있다.
                </pre>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryPage;
